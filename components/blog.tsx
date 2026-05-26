'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { posts } from '@/lib/blog-data'

export function Blog() {
  const [showAll, setShowAll] = useState(false)
  const displayedPosts = showAll ? posts : posts.slice(0, 3)

  return (
    <section id="blog" className="py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white via-blue-50 to-slate-50 relative overflow-hidden">
      <div className="absolute top-20 -right-96 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-96 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
            From Our <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Latest insights and tips about solar energy to help you make informed decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedPosts.map((post, index) => (
            <Card key={index} className="border border-slate-200/60 hover:border-slate-300 hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white/90 backdrop-blur-sm transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-5 duration-500">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-emerald-600 transition-colors uppercase">{post.title}</CardTitle>
                <CardDescription className="text-sm text-foreground/70 leading-relaxed line-clamp-3">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 font-semibold group/btn">
                    Read More <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold hover:from-emerald-600 hover:to-cyan-600 shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:scale-105 text-base md:text-lg"
          >
            {showAll ? (
              <>Show Less <ChevronUp className="ml-2 w-4 h-4" /></>
            ) : (
              <>View All Posts <ArrowRight className="ml-2 w-4 h-4" /></>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}


