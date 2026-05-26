import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Smile, Headphones, Shield } from 'lucide-react'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative pt-32 pb-40 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl -z-10" />
      <div className="absolute top-40 left-20 w-[300px] h-[300px] bg-gradient-to-br from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 leading-tight tracking-tight">
            Power Your <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">Future</span>
            <br />
            with Clean <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">Solar Energy</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-10 leading-relaxed max-w-2xl font-light">
            Smart solar solutions for homes and businesses. Save more, worry less. Join thousands of satisfied customers powered by renewable energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button 
              size="lg" 
              className="px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold hover:from-emerald-600 hover:to-cyan-600 shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 text-base md:text-lg"
              onClick={() => scrollToSection('calculator')}
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-3 md:py-4 border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 font-bold text-base md:text-lg transition-all duration-300"
              onClick={() => scrollToSection('calculator')}
            >
              Calculate Savings
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="group flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50/50 to-cyan-50/50 hover:from-emerald-100/50 hover:to-cyan-100/50 transition-all duration-300 border border-emerald-100/30 hover:border-emerald-200">
              <Zap className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 text-white p-2 rounded-lg mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-black text-2xl md:text-3xl bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">500+</p>
              <p className="text-sm md:text-base text-foreground/60 font-semibold mt-2">Installations</p>
            </div>
            <div className="group flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-cyan-50/50 to-blue-50/50 hover:from-cyan-100/50 hover:to-blue-100/50 transition-all duration-300 border border-cyan-100/30 hover:border-cyan-200">
              <Smile className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 text-white p-2 rounded-lg mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-black text-2xl md:text-3xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">98%</p>
              <p className="text-sm md:text-base text-foreground/60 font-semibold mt-2">Satisfaction</p>
            </div>
            <div className="group flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-blue-50/50 to-slate-50/50 hover:from-blue-100/50 hover:to-slate-100/50 transition-all duration-300 border border-blue-100/30 hover:border-blue-200">
              <Headphones className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-slate-600 text-white p-2 rounded-lg mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-black text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">24/7</p>
              <p className="text-sm md:text-base text-foreground/60 font-semibold mt-2">Support</p>
            </div>
            <div className="group flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50/50 to-slate-50/50 hover:from-emerald-100/50 hover:to-slate-100/50 transition-all duration-300 border border-emerald-100/30 hover:border-emerald-200">
              <Shield className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-600 to-slate-600 text-white p-2 rounded-lg mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-black text-2xl md:text-3xl bg-gradient-to-r from-emerald-600 to-slate-600 bg-clip-text text-transparent">10Y</p>
              <p className="text-sm md:text-base text-foreground/60 font-semibold mt-2">Warranty</p>
            </div>
          </div>
        </div>

        <div className="relative h-96 md:h-full min-h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-sm" />
          <div className="relative h-full w-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-t from-emerald-500 to-transparent" />
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative text-center z-10">
              <div className="mb-6 animate-bounce">
                <Zap className="w-24 h-24 md:w-32 md:h-32 mx-auto text-emerald-400 drop-shadow-lg" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">Solar Power Ready</p>
              <p className="text-sm md:text-base text-cyan-300 mt-3 font-light">Harness clean, renewable energy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
