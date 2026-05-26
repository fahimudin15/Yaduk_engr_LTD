'use client'

import { SolarCalculator } from '@/components/solar-calculator'
import { Footer } from '@/components/footer'

export default function CalculatorPage() {
  return (
    <div className="w-full">
      <SolarCalculator />
      <Footer />
    </div>
  )
}
