import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, FolderOpen } from "lucide-react"

// Logo items for marquee
const logos = [
  "舞蹈", "AI训练", "数据标注", "情绪识别", "肢体语言", "人机交互",
  "舞蹈", "AI训练", "数据标注", "情绪识别", "肢体语言", "人机交互",
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-tight">
                {"I'm "}
                <span className="bg-[#ff6b9d] text-white px-2">Suisui</span>
                {", "}
                <br />
                AI训练师，
                <br />
                来自
                <span className="bg-[#3b82f6] text-white px-2 ml-1">洛阳</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                用舞蹈训练出的细腻感知，给AI注入理解人类情绪的能力，让技术更有温度。
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/work"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors"
                >
                  <FolderOpen className="w-5 h-5" />
                  查看作品
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-6 py-3 rounded-full font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                  联系我
                </Link>
              </div>
            </div>
            
            {/* Right - Avatar Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-3xl overflow-hidden bg-[#fbbf24]">
                <Image
                  src="/images/avatar.jpg"
                  alt="Suisui - 个人头像"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Logo Marquee */}
      <section className="py-8 border-y border-border overflow-hidden">
        <div className="flex animate-marquee">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-8 px-8 shrink-0">
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{logo}</span>
              <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            </div>
          ))}
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-normal mb-4">
              我的专业领域
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              从舞蹈艺术到AI技术，跨界融合创造独特价值
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="group p-8 rounded-3xl border border-border hover:border-foreground/20 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-[#ff6b9d]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#ff6b9d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3">AI数据标注</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                专注于情绪识别、肢体语言分析等AI训练数据的精准标注
              </p>
            </div>
            
            {/* Service Card 2 */}
            <div className="group p-8 rounded-3xl border border-border hover:border-foreground/20 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3">情绪理解训练</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                利用舞蹈背景的敏锐感知，训练AI理解复杂的人类情绪表达
              </p>
            </div>
            
            {/* Service Card 3 */}
            <div className="group p-8 rounded-3xl border border-border hover:border-foreground/20 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-[#fbbf24]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3">舞蹈编创教学</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                爵士舞、国风舞蹈编创与体态矫正，让身体语言更有感染力
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
