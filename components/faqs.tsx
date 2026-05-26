'use client'

import { Card } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQs() {
  const faqs = [
    {
      question: 'How long do solar panels last?',
      answer: 'Most solar panels last 25-30 years or more. Our panels come with a 10-year comprehensive warranty covering manufacturing defects and performance.',
    },
    {
      question: 'Does solar work during rainy seasons?',
      answer: 'Yes, solar panels work during rainy seasons, though their efficiency is reduced. They can still generate power on cloudy days, though at lower levels than on sunny days.',
    },
    {
      question: 'How many panels do I need?',
      answer: 'The number of panels depends on your daily energy usage, location, and available roof space. Our solar calculator can provide personalized recommendations based on your specific needs.',
    },
    {
      question: 'Do you provide maintenance?',
      answer: 'Yes, we provide comprehensive maintenance services including cleaning, inspections, and repairs. We offer both annual maintenance packages and on-demand service.',
    },
    {
      question: 'Is there any government subsidy?',
      answer: 'Yes, there are government subsidies and incentives available for solar installations. We help you navigate through the process to maximize your benefits.',
    },
    {
      question: 'What is the installation timeline?',
      answer: 'Typical residential installations take 3-5 days from site survey to system activation. Commercial installations may take longer depending on system complexity.',
    },
  ]

  return (
    <section id="faqs" className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-accent">FAQs</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Common questions about solar energy
          </p>
        </div>

        <Card className="border-border p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  )
}
