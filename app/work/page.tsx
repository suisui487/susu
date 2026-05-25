import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const works = [
  {
    id: 1,
    title: "爵士舞作品合集",
    image: "/images/work-jazz.jpg",
    tags: ["#爵士舞", "#编舞作品", "#舞台表演"],
  },
  {
    id: 2,
    title: "系统化舞蹈教学课程",
    image: "/images/work-teaching.jpg",
    tags: ["#舞蹈教学", "#课程设计", "#体态矫正"],
  },
  {
    id: 3,
    title: "国风融合舞探索",
    image: "/images/work-chinese.jpg",
    tags: ["#国风爵士", "#创意编舞", "#文化融合"],
  },
  {
    id: 4,
    title: "AI训练师项目",
    image: "/images/work-ai.jpg",
    tags: ["#AI训练", "#数据标注", "#人机交互"],
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Work Section */}
      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-normal mb-16">
            Work
          </h1>
          
          {/* Work Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {works.map((work) => (
              <div 
                key={work.id}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl mb-2 group-hover:text-[#ff6b9d] transition-colors">
                  {work.title}
                </h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
