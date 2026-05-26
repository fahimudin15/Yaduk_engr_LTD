'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contact <span className="text-accent">Us</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Get in touch with our team to discuss your solar needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-border">
            <CardHeader>
              <Phone className="w-8 h-8 text-accent mb-2" />
              <CardTitle className="text-foreground">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">+234 (0) 9 0123 4567</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <Mail className="w-8 h-8 text-accent mb-2" />
              <CardTitle className="text-foreground">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">info@solarisenergy.ng</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <MapPin className="w-8 h-8 text-accent mb-2" />
              <CardTitle className="text-foreground">Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">45 Lekki-Epe Expressway, Lagos, Nigeria</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <Card className="border-border">
            <CardHeader>
              <Clock className="w-8 h-8 text-accent mb-2" />
              <CardTitle className="text-foreground">Working Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-foreground/70">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-foreground/70">Sunday: Closed</p>
                <p className="text-sm text-accent mt-4 font-semibold">Emergency Support: 24/7</p>
              </div>
            </CardContent>
          </Card>

          <form onSubmit={handleSubmit} className="md:col-span-1 space-y-4">
            <div>
              <Label htmlFor="name" className="text-foreground font-semibold">
                Your Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-2 border-border"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground font-semibold">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-2 border-border"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground font-semibold">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="mt-2 border-border"
              />
            </div>

            <div>
              <Label htmlFor="subject" className="text-foreground font-semibold">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                className="mt-2 border-border"
                required
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground font-semibold">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="mt-2 border-border min-h-32"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Send Message <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>

        <div className="flex justify-center gap-6 pt-8 border-t border-border">
          <Button variant="ghost" size="icon" className="text-accent hover:bg-accent/10">
            <Facebook className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-accent hover:bg-accent/10">
            <Twitter className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-accent hover:bg-accent/10">
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-accent hover:bg-accent/10">
            <Instagram className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
