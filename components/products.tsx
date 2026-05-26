import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Zap, Battery, Cpu, Lightbulb, Package, Wrench, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Products() {
  const products = [
    {
      icon: Zap,
      title: 'Solar Panels',
      price: '₦850,000',
      description: 'High efficiency monocrystalline panels',
      specs: ['400W capacity', '25-year lifespan', 'Optimal efficiency'],
      image: '/images/solar-panels.jpg',
    },
    {
      icon: Cpu,
      title: 'Inverters',
      price: '₦1,200,000',
      description: 'Inverters for home & commercial use',
      specs: ['5kW capacity', 'Pure sine wave', 'Smart monitoring'],
      image: '/images/inverter.jpg',
    },
    {
      icon: Battery,
      title: 'Batteries',
      price: '₦1,050,000',
      description: 'Long-life batteries for backup power',
      specs: ['10kWh capacity', 'Fast charging', 'Long lifespan'],
      image: '/images/battery.jpg',
    },
    {
      icon: Cpu,
      title: 'Charge Controllers',
      price: '₦215,000',
      description: 'Smart charge controllers for system safety',
      specs: ['MPPT technology', 'Digital display', 'Smart monitoring'],
      image: '/images/charge-controller.jpg',
    },
    {
      icon: Lightbulb,
      title: 'Solar Street Lights',
      price: '₦360,000',
      description: 'Bright & durable solar street lights',
      specs: ['100W LED', 'Motion sensor', 'IP65 rated'],
      image: '/images/street-light.jpg',
    },
    {
      icon: Wrench,
      title: 'Accessories',
      price: '₦95,000',
      description: 'All solar accessories & mounting kits',
      specs: ['Complete kits', 'Quality materials', 'Easy installation'],
      image: '/images/accessories.jpg',
    },
  ]

  return (
    <section id="products" className="py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-white via-blue-50 to-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
            Our <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Premium quality solar equipment designed for reliability, efficiency, and long-term value
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card key={index} className="border border-slate-200/60 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col bg-white/90 backdrop-blur-sm transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">{product.title}</CardTitle>
                  <div className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mt-3">{product.price}</div>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-foreground/70">
                        <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold hover:from-emerald-600 hover:to-cyan-600 shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:scale-105">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
