import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Zap, Wrench, Battery, Cpu, MessageSquare, Building2, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Services() {
  const services = [
    {
      icon: Zap,
      title: 'Solar Panel Installation',
      description: 'Professional installation for maximum efficiency and durability.',
      color: 'from-primary to-accent',
      image: '/images/panel-installation.jpg',
    },
    {
      icon: Wrench,
      title: 'Solar System Maintenance',
      description: 'Keep your system running at peak performance.',
      color: 'from-accent to-primary',
      image: '/images/maintenance.jpg',
    },
    {
      icon: Battery,
      title: 'Battery Installation',
      description: 'Reliable energy storage solutions for backup power and savings.',
      color: 'from-secondary to-primary',
      image: '/images/battery-installation.jpg',
    },
    {
      icon: Cpu,
      title: 'Inverter Setup',
      description: 'High-efficiency inverters for smooth, stable power.',
      color: 'from-primary to-secondary',
      image: '/images/inverter-setup.jpg',
    },
    {
      icon: MessageSquare,
      title: 'Energy Consultation',
      description: 'Expert advice to help you choose the right solution.',
      color: 'from-accent to-secondary',
      image: '/images/consultation.jpg',
    },
    {
      icon: Building2,
      title: 'Commercial Solar Solutions',
      description: 'Scalable solar solutions for commercial needs.',
      color: 'from-secondary to-accent',
      image: '/images/commercial.jpg',
    },
  ]

  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-20 -left-96 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-96 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
            Our <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Comprehensive solar energy solutions tailored for your home or business. From installation to maintenance, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border border-slate-200/60 hover:border-slate-300 hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white/80 backdrop-blur-sm">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-emerald-600 transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-foreground/70 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 font-semibold group/btn">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
