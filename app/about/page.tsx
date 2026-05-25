import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* About Section */}
      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-normal mb-16">
            About
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Text Content */}
            <div className="space-y-8">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  我是<span className="bg-[#ff6b9d] text-white px-1">Suisui</span>，前舞蹈老师，现AI训练师。
                </p>
                <p className="text-muted-foreground">
                  舞蹈沉淀，让我练就了捕捉情绪、洞察肢体细节的敏锐感知。
                </p>
                <p className="text-muted-foreground">
                  如今我把这份能力，用来训练AI读懂真实的人类表达。
                </p>
              </div>
              
              {/* Timeline */}
              <div className="pt-8 space-y-6">
                <h3 className="font-serif text-2xl">经历</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-24 shrink-0 text-sm text-muted-foreground">2024 - 至今</div>
                    <div>
                      <div className="font-medium">AI训练师</div>
                      <div className="text-sm text-muted-foreground">专注情绪识别与人机交互数据标注</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-24 shrink-0 text-sm text-muted-foreground">2019 - 2024</div>
                    <div>
                      <div className="font-medium">舞蹈老师</div>
                      <div className="text-sm text-muted-foreground">爵士舞、国风舞蹈教学与编创</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-24 shrink-0 text-sm text-muted-foreground">2015 - 2019</div>
                    <div>
                      <div className="font-medium">舞蹈专业学习</div>
                      <div className="text-sm text-muted-foreground">系统学习现代舞、爵士舞、中国舞</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Skills */}
              <div className="pt-8 space-y-4">
                <h3 className="font-serif text-2xl">技能</h3>
                <div className="flex flex-wrap gap-2">
                  {["AI数据标注", "情绪识别", "肢体语言分析", "爵士舞", "国风舞蹈", "编舞创作", "体态矫正"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-muted text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right - Photo */}
            <div className="relative">
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden">
                <Image
                  src="/images/avatar-new.png"
                  alt="Suisui - 生活照"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
