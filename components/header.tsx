'use client'

import { Sun } from 'lucide-react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Link from 'next/link'

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 text-white backdrop-blur-sm border-b border-slate-700/50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3 md:gap-4">
            <SidebarTrigger className="md:hidden text-white hover:bg-slate-700" />
            <Link href="/" className="flex items-center gap-2 md:gap-3 group cursor-pointer hover:opacity-80 transition-opacity">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <Sun className="w-5 h-5 md:w-6 md:h-6 text-white drop-shadow-md" />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-lg md:text-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  SOLARIS
                </h1>
                <p className="text-xs md:text-sm text-slate-400 font-medium tracking-wide">
                  Energy Solutions
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/calculator"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
            >
              Calculator
            </Link>
            <Link
              href="/services"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
            >
              Services
            </Link>
            <Link
              href="/products"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
            >
              Blog
            </Link>
            <Link
              href="/contact#faqs"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
            >
              FAQs
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg hover:from-emerald-600 hover:to-cyan-600 shadow-lg hover:shadow-emerald-500/50 transition-all duration-200 transform hover:scale-105"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  )
}
