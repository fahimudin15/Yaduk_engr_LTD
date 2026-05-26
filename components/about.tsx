import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Award, Zap, CheckCircle } from 'lucide-react'

export function About() {
  const stats = [
    {
      icon: Award,
      value: '10+',
      label: 'Years Experience',
      color: 'from-primary to-accent',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Projects Completed',
      color: 'from-accent to-primary',
    },
    {
      icon: Zap,
      value: '50+',
      label: 'Expert Technicians',
      color: 'from-secondary to-accent',
    },
    {
      icon: CheckCircle,
      value: '100%',
      label: 'Quality Assurance',
      color: 'from-accent to-secondary',
    },
  ]

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About <span className="text-accent">Solaris</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              We provide sustainable and cost-effective solar solutions that help homes and businesses reduce energy costs and achieve energy independence.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              With over 10 years of experience, our team of expert technicians is dedicated to delivering high-quality solar installations and maintenance services.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Learn More About Us
            </Button>
          </div>

          <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl opacity-10" />
            <div className="relative text-center">
              <Users className="w-32 h-32 text-accent mx-auto mb-4" />
              <p className="text-2xl font-bold text-foreground">Your Trusted Solar Partner</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="border-border text-center">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 mx-auto rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-sm text-foreground/60">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
