import { Button } from '@/components/ui/button'
import { Sun, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                  <Sun className="w-6 h-6 text-sidebar-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Solaris</h3>
                  <p className="text-xs text-sidebar-foreground/60">Energy Solutions</p>
                </div>
              </div>
              <p className="text-sidebar-foreground/70 text-sm">
                Powering a brighter tomorrow with sustainable solar solutions.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sidebar-foreground/70 hover:text-accent transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/calculator" className="text-sidebar-foreground/70 hover:text-accent transition-colors text-sm">
                    Solar Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sidebar-foreground/70 hover:text-accent transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-sidebar-foreground/70 hover:text-accent transition-colors text-sm">
                    Products
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sidebar-foreground/70 hover:text-accent transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sidebar-foreground/70 hover:text-accent transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact#faqs" className="text-sidebar-foreground/70 hover:text-accent transition-colors text-sm">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sidebar-foreground/70 hover:text-accent transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-sidebar-foreground/70 text-sm mb-4">
                Subscribe to our newsletter to get latest offers and articles.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded bg-sidebar-accent text-foreground text-sm border-0"
                />
                <Button className="bg-accent text-sidebar-foreground hover:bg-accent/90">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-sidebar-border">
            <p className="text-center text-sidebar-foreground/60 text-sm">
              © 2024 Solaris Energy Solutions. All rights reserved. | Powered by sustainable energy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
