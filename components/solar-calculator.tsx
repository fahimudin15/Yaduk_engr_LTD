'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { X, Plus, Minus, Download, Edit2, Save } from 'lucide-react'
import Image from 'next/image'

interface Appliance {
  id: string
  name: string
  image: string
  wattage: number
}

interface SelectedAppliance {
  id: string
  name: string
  wattage: number
  quantity: number
}

const APPLIANCES: Appliance[] = [
  { id: 'refrigerator', name: 'Refrigerator', image: '/images/appliance-refrigerator.jpg', wattage: 500 },
  { id: 'washing-machine', name: 'Washing Machine', image: '/images/appliance-washing-machine.jpg', wattage: 2000 },
  { id: 'air-conditioner', name: 'Air Conditioner', image: '/images/appliance-air-conditioner.jpg', wattage: 3500 },
  { id: 'microwave', name: 'Microwave', image: '/images/appliance-microwave.jpg', wattage: 1000 },
  { id: 'iron', name: 'Iron', image: '/images/appliance-iron.jpg', wattage: 1500 },
  { id: 'television', name: 'Television', image: '/images/appliance-television.jpg', wattage: 150 },
  { id: 'oven', name: 'Electric Oven', image: '/images/appliance-oven.jpg', wattage: 3000 },
  { id: 'water-heater', name: 'Water Heater', image: '/images/appliance-water-heater.jpg', wattage: 4500 },
]

const SOLAR_PANEL_COST = 150000 // per panel
const BATTERY_COST = 250000 // per kWh
const INVERTER_COSTS = {
  '1kW-3kW': { min: 300000, max: 600000, type: 'String Inverter' },
  '3kW-5kW': { min: 600000, max: 1200000, type: 'Hybrid Inverter' },
  '5kW-10kW': { min: 1200000, max: 2500000, type: 'Three-Phase Inverter' },
  '10kW+': { min: 2500000, max: 5000000, type: 'Industrial Inverter' },
}

export function SolarCalculator() {
  const [selected, setSelected] = useState<SelectedAppliance[]>([])
  const [hoursPerDay, setHoursPerDay] = useState(8)
  const [batteryCapacity, setBatteryCapacity] = useState(5) // in kWh
  const [showQuotation, setShowQuotation] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [companyName, setCompanyName] = useState('Yaduk Engineering LTD')
  const [notes, setNotes] = useState('This quotation is valid for 30 days. Installation and commissioning are not included in this quote.')
  const quotationRef = useRef<HTMLDivElement>(null)

  const toggleAppliance = (appliance: Appliance) => {
    const existing = selected.find((s) => s.id === appliance.id)
    if (existing) {
      setSelected(selected.filter((s) => s.id !== appliance.id))
    } else {
      setSelected([
        ...selected,
        {
          id: appliance.id,
          name: appliance.name,
          wattage: appliance.wattage,
          quantity: 1,
        },
      ])
    }
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return
    setSelected(selected.map((s) => (s.id === id ? { ...s, quantity } : s)))
  }

  const removeAppliance = (id: string) => {
    setSelected(selected.filter((s) => s.id !== id))
  }

  const calculateResults = () => {
    if (selected.length === 0) {
      return {
        totalWatts: 0,
        dailyEnergy: 0,
        systemSize: 0,
        panelsNeeded: 0,
        batteriesNeeded: 0,
        inverterType: 'No System',
        inverterCost: 0,
        panelCost: 0,
        batteryCost: 0,
        totalCost: 0,
        monthlySavings: 0,
      }
    }

    const totalWatts = selected.reduce((sum, app) => sum + app.wattage * app.quantity, 0)
    const dailyEnergy = (totalWatts * hoursPerDay) / 1000 // kWh
    const systemSize = dailyEnergy * 1.25 // 25% buffer
    const panelsNeeded = Math.ceil(systemSize / 0.4) // 400W panels
    const batteriesNeeded = Math.ceil(batteryCapacity / 5) // 5kWh battery units
    
    let inverterType = 'No System'
    let inverterCost = 0
    
    if (systemSize <= 3) {
      inverterType = 'String Inverter'
      inverterCost = 450000
    } else if (systemSize <= 5) {
      inverterType = 'Hybrid Inverter'
      inverterCost = 900000
    } else if (systemSize <= 10) {
      inverterType = 'Three-Phase Inverter'
      inverterCost = 1800000
    } else {
      inverterType = 'Industrial Inverter'
      inverterCost = 3500000
    }

    const panelCost = panelsNeeded * SOLAR_PANEL_COST
    const batteryCost = batteryCapacity * BATTERY_COST
    const totalCost = panelCost + inverterCost + batteryCost
    const monthlySavings = Math.round((dailyEnergy * 30 * 25) / 100) // Assuming 25/kWh rate

    return {
      totalWatts,
      dailyEnergy: Math.round(dailyEnergy * 100) / 100,
      systemSize: Math.round(systemSize * 100) / 100,
      panelsNeeded,
      batteriesNeeded,
      inverterType,
      inverterCost,
      panelCost,
      batteryCost,
      totalCost,
      monthlySavings,
    }
  }

  const downloadPDF = async () => {
    if (!quotationRef.current) return
    
    // @ts-ignore
    const html2pdf = (await import('html2pdf.js')).default
    
    const element = quotationRef.current
    const opt = {
      margin: 10,
      filename: `Solar-Quotation-${new Date().toLocaleDateString()}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
    }
    html2pdf().set(opt).from(element).save()
  }

  const results = calculateResults()
  const selectedCount = selected.length

  return (
    <>
      <section id="calculator" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              <span className="text-accent">Solar</span> Calculator
            </h2>
            <p className="text-lg text-foreground/70">
              Select your appliances and calculate the solar system you need
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
          {/* Appliance Selection */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Select Your Appliances</CardTitle>
                <CardDescription>Click on appliances you use, set quantities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {APPLIANCES.map((appliance) => {
                    const isSelected = selected.some((s) => s.id === appliance.id)
                    return (
                      <button
                        key={appliance.id}
                        onClick={() => toggleAppliance(appliance)}
                        className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
                          isSelected
                            ? 'border-accent bg-accent/10'
                            : 'border-border bg-background hover:border-accent/50'
                        }`}
                      >
                        <div className="relative w-full h-20 mb-2">
                          <Image
                            src={appliance.image}
                            alt={appliance.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="text-xs font-semibold text-center text-foreground">{appliance.name}</p>
                        <p className="text-xs text-foreground/60">{appliance.wattage}W</p>
                      </button>
                    )
                  })}
                </div>

                {/* Hours Per Day */}
                <div className="border-t border-border pt-6 mb-6">
                  <Label htmlFor="hours" className="text-foreground font-semibold block mb-2">
                    Average Hours Used Per Day
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="hours"
                      type="number"
                      min="1"
                      max="24"
                      value={hoursPerDay}
                      onChange={(e) => setHoursPerDay(Math.max(1, Math.min(24, parseInt(e.target.value) || 1)))}
                      className="border-border w-20"
                    />
                    <span className="text-sm text-foreground/60">hours</span>
                  </div>
                </div>

                {/* Battery Capacity */}
                <div className="border-t border-border pt-6">
                  <Label htmlFor="battery" className="text-foreground font-semibold block mb-2">
                    Battery Storage Capacity (kWh)
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="battery"
                      type="number"
                      min="1"
                      step="1"
                      value={batteryCapacity}
                      onChange={(e) => setBatteryCapacity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="border-border w-20"
                    />
                    <span className="text-sm text-foreground/60">kWh</span>
                  </div>
                </div>

                {/* Selected Appliances */}
                {selectedCount > 0 && (
                  <div className="border-t border-border mt-6 pt-6">
                    <h3 className="font-semibold text-foreground mb-4">Selected ({selectedCount})</h3>
                    <div className="space-y-3">
                      {selected.map((item) => (
                        <div key={item.id} className="flex items-center justify-between bg-background p-3 rounded-lg border border-border">
                          <div className="flex-1">
                            <p className="font-medium text-foreground text-sm">{item.name}</p>
                            <p className="text-xs text-foreground/60">{item.wattage * item.quantity}W total</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-accent/10 rounded"
                            >
                              <Minus className="w-4 h-4 text-foreground" />
                            </button>
                            <span className="w-8 text-center font-semibold text-foreground">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-accent/10 rounded"
                            >
                              <Plus className="w-4 h-4 text-foreground" />
                            </button>
                            <button
                              onClick={() => removeAppliance(item.id)}
                              className="p-1 hover:bg-red-100 rounded ml-2"
                            >
                              <X className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div>
            <Card className={`border-border ${selectedCount > 0 ? 'bg-green-50' : 'bg-gray-50'}`}>
              <CardHeader>
                <CardTitle className="text-accent">System Recommendation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedCount === 0 ? (
                  <p className="text-sm text-foreground/60 text-center py-8">
                    Select appliances to see recommendations
                  </p>
                ) : (
                  <>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <p className="text-xs text-foreground/60">Total Daily Energy</p>
                      <p className="text-2xl font-bold text-foreground">{results.dailyEnergy} kWh</p>
                    </div>

                    <div className="bg-white/50 p-4 rounded-lg">
                      <p className="text-xs text-foreground/60">System Size</p>
                      <p className="text-2xl font-bold text-accent">{results.systemSize} kW</p>
                    </div>

                    <div className="bg-white/50 p-4 rounded-lg">
                      <p className="text-xs text-foreground/60">Solar Panels (400W)</p>
                      <p className="text-2xl font-bold text-foreground">{results.panelsNeeded}</p>
                    </div>

                    <div className="bg-white/50 p-4 rounded-lg">
                      <p className="text-xs text-foreground/60">Battery Storage</p>
                      <p className="text-2xl font-bold text-foreground">{results.batteriesNeeded} Unit(s)</p>
                    </div>

                    <div className="bg-white/50 p-4 rounded-lg">
                      <p className="text-xs text-foreground/60">Inverter Type</p>
                      <Badge className="mt-2 bg-accent text-sidebar-foreground">{results.inverterType}</Badge>
                    </div>

                    <div className="border-t border-accent/20 pt-4 space-y-2">
                      <div>
                        <p className="text-xs text-foreground/60">Solar Panels</p>
                        <p className="font-bold text-foreground">₦{results.panelCost.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60">Inverter</p>
                        <p className="font-bold text-foreground">₦{results.inverterCost.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60">Battery Storage</p>
                        <p className="font-bold text-foreground">₦{results.batteryCost.toLocaleString()}</p>
                      </div>
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <p className="text-xs text-foreground/60">Total Installation</p>
                        <p className="text-2xl font-bold text-accent">₦{results.totalCost.toLocaleString()}</p>
                      </div>
                    </div>

                    <Button 
                      onClick={() => {
                        console.log('[v0] Quotation button clicked, setting showQuotation to true')
                        setShowQuotation(true)
                      }}
                      className="w-full mt-4 bg-accent text-sidebar-foreground hover:bg-accent/90"
                    >
                      Generate Quotation
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    {/* Quotation Modal */}
    {showQuotation && (
      <div className="fixed inset-0 bg-black/50 z-[9999] flex items-start justify-center p-4 overflow-y-auto pt-20">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl">
          <div className="flex flex-row items-center justify-between p-6 border-b">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Solar System Quotation</h2>
              <p className="text-sm text-foreground/60">Generated on {new Date().toLocaleDateString()}</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => setEditMode(!editMode)}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                {editMode ? <Save className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
                {editMode ? 'Save' : 'Edit'}
              </Button>
              <Button
                onClick={downloadPDF}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <Download className="w-4 h-4" />
                PDF
              </Button>
              <button
                onClick={() => setShowQuotation(false)}
                className="text-foreground/60 hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-8" ref={quotationRef}>
            {editMode ? (
              <div className="space-y-6">
                <div>
                  <Label className="font-semibold">Company Name</Label>
                  <Input
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label className="font-semibold">Notes & Terms</Label>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-2 min-h-20"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center border-b pb-6">
                  <h1 className="text-3xl font-bold text-foreground mb-2">{companyName}</h1>
                  <p className="text-foreground/60">Solar Energy Solution Quotation</p>
                  <p className="text-sm text-foreground/50 mt-2">Quote Date: {new Date().toLocaleDateString()}</p>
                </div>

                {/* Selected Appliances */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">Selected Appliances</h2>
                  <div className="space-y-2">
                    {selected.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm border-b pb-2">
                        <span className="text-foreground">
                          {item.name} × {item.quantity}
                        </span>
                        <span className="font-semibold text-foreground">
                          {item.wattage * item.quantity} W
                        </span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 border-t-2">
                      <span className="font-bold text-foreground">Total System Load</span>
                      <span className="font-bold text-accent text-lg">{results.totalWatts} W</span>
                    </div>
                  </div>
                </div>

                {/* System Specifications */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">System Specifications</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-foreground/60 mb-1">Daily Energy Consumption</p>
                      <p className="text-2xl font-bold text-foreground">{results.dailyEnergy} kWh</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-foreground/60 mb-1">System Size Required</p>
                      <p className="text-2xl font-bold text-accent">{results.systemSize} kW</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-foreground/60 mb-1">Solar Panels (400W)</p>
                      <p className="text-2xl font-bold text-foreground">{results.panelsNeeded}</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-foreground/60 mb-1">Battery Units</p>
                      <p className="text-2xl font-bold text-foreground">{results.batteriesNeeded}</p>
                    </div>
                    <div className="border rounded-lg p-4 col-span-2">
                      <p className="text-sm text-foreground/60 mb-1">Inverter Type</p>
                      <p className="text-xl font-bold text-accent">{results.inverterType}</p>
                    </div>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">Cost Breakdown</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm border-b pb-2">
                      <span className="text-foreground">Solar Panels ({results.panelsNeeded} × 400W @ ₦{(SOLAR_PANEL_COST).toLocaleString()})</span>
                      <span className="font-semibold text-foreground">₦{results.panelCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm border-b pb-2">
                      <span className="text-foreground">Inverter ({results.inverterType})</span>
                      <span className="font-semibold text-foreground">₦{results.inverterCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm border-b pb-2">
                      <span className="text-foreground">Battery Storage ({batteryCapacity}kWh)</span>
                      <span className="font-semibold text-foreground">₦{results.batteryCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-lg border-t-2 pt-3">
                      <span className="font-bold text-foreground">Total System Cost</span>
                      <span className="font-bold text-accent text-xl">₦{results.totalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="border rounded-lg p-4 bg-accent/5">
                  <h3 className="font-semibold text-foreground mb-2">Terms & Notes</h3>
                  <p className="text-sm text-foreground/70 whitespace-pre-wrap">{notes}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )}
    </>
  )
}
