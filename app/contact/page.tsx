'use client'

import { Contact } from '@/components/contact'
import { FAQs } from '@/components/faqs'
import { Footer } from '@/components/footer'

export default function ContactPage() {
  return (
    <div className="w-full">
      <Contact />
      <FAQs />
      <Footer />
    </div>
  )
}
