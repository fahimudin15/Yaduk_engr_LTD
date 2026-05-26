'use client'

import { Home, Sun, Wrench, Package, Users, BookOpen, HelpCircle, Mail, LogIn } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function AppSidebar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Sidebar>
      <SidebarContent className="bg-sidebar text-sidebar-foreground">
        <SidebarGroup className="py-6 px-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
              <Sun className="w-6 h-6 text-sidebar-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Yaduk</h1>
              <p className="text-xs text-sidebar-foreground/60">Engineering LTD</p>
            </div>
          </div>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <Link href="/" className="flex items-center gap-2 w-full">
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <Link href="/calculator" className="flex items-center gap-2 w-full">
                    <Sun className="w-4 h-4" />
                    <span>Solar Calculator</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <Link href="/services" className="flex items-center gap-2 w-full">
                    <Wrench className="w-4 h-4" />
                    <span>Services</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <Link href="/products" className="flex items-center gap-2 w-full">
                    <Package className="w-4 h-4" />
                    <span>Products</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <Link href="/about" className="flex items-center gap-2 w-full">
                    <Users className="w-4 h-4" />
                    <span>About Us</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <Link href="/blog" className="flex items-center gap-2 w-full">
                    <BookOpen className="w-4 h-4" />
                    <span>Blog</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <Link href="/contact#faqs" className="flex items-center gap-2 w-full">
                    <HelpCircle className="w-4 h-4" />
                    <span>FAQs</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <Link href="/contact" className="flex items-center gap-2 w-full">
                    <Mail className="w-4 h-4" />
                    <span>Contact</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto pt-6">
          <Button 
            asChild
            className="w-full bg-accent text-sidebar-foreground hover:bg-accent/90"
          >
            <Link href="/contact">
              Get Free Quote
            </Link>
          </Button>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
