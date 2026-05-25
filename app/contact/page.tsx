"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Contact Section */}
      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-normal mb-16">
            Contact
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                如果你对AI训练、舞蹈教学或任何合作机会感兴趣，欢迎随时联系我。
              </p>
              
              {/* Contact Methods */}
              <div className="space-y-6 pt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#ff6b9d]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#ff6b9d]" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">邮箱</div>
                    <a href="mailto:2974192911@qq.com" className="font-medium hover:text-[#ff6b9d] transition-colors">
                      2974192911@qq.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#3b82f6]" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">微信</div>
                    <span className="font-medium">s13233960258</span>
                  </div>
                </div>
              </div>
              
              {/* Location */}
              <div className="pt-8">
                <div className="text-sm text-muted-foreground mb-2">位置</div>
                <div className="font-serif text-2xl">
                  中国 · <span className="bg-[#3b82f6] text-white px-2">洛阳</span>
                </div>
              </div>
            </div>
            
            {/* Right - Contact Form */}
            <div className="bg-muted/50 rounded-3xl p-8">
              <h3 className="font-serif text-2xl mb-6">发送消息</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                    placeholder="你的姓名"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                    消息
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                    placeholder="写下你想说的..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 rounded-full font-medium hover:bg-foreground/90 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  发送消息
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
