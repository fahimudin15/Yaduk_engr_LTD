'use client'

import { useParams } from 'next/navigation'
import { Footer } from '@/components/footer'
import { posts } from '@/lib/blog-data'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50">
      
      <main className="pb-20">
        <article>
          {/* Hero Section */}
          <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20">
              <div className="max-w-4xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-6 font-medium">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
                <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm md:text-base mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    5 min read
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tight">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 -mt-10 relative z-10">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100">
              <div 
                className="prose prose-slate prose-lg max-w-none 
                prose-headings:text-slate-900 prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-strong:text-slate-900 prose-strong:font-bold
                prose-ul:list-disc prose-ul:pl-5
                prose-img:rounded-2xl prose-img:shadow-lg
                [&>h3]:text-2xl [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-emerald-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <hr className="my-12 border-slate-100" />

              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <span className="text-slate-500 font-medium">Share this article:</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <Link href="/blog">
                  <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold hover:from-emerald-600 hover:to-cyan-600 shadow-lg transition-all rounded-xl px-8">
                    Read More Articles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Newsletter / Related Section Placeholder */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 py-12">
           <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Ready to switch to solar?</h2>
                <p className="text-slate-400 mb-8 max-w-lg mx-auto">Join the renewable energy revolution and start saving on your energy bills today.</p>
                <Link href="/contact">
                  <Button className="bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all rounded-xl px-10 py-6 text-lg">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
