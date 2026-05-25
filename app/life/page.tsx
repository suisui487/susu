import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const lifePhotos = [
  {
    id: 1,
    src: "/images/life-1.jpg",
    alt: "洛阳老城街景",
  },
  {
    id: 2,
    src: "/images/life-2.jpg",
    alt: "洛阳美食",
  },
  {
    id: 3,
    src: "/images/life-3.jpg",
    alt: "户外露营",
  },
]

export default function LifePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Life Section */}
      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-normal mb-8">
            About Me More
          </h1>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            工作之外，我是一个爱逛老城、爱尝美食、爱记录生活的洛阳女孩。
          </p>
          
          {/* Photo Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {lifePhotos.map((photo) => (
              <div 
                key={photo.id}
                className="group relative aspect-square rounded-3xl overflow-hidden"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
              </div>
            ))}
          </div>
          
          {/* Additional Content */}
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">兴趣爱好</h3>
              <div className="flex flex-wrap gap-2">
                {["探索老城", "美食打卡", "户外露营", "摄影记录", "阅读", "旅行"].map((hobby) => (
                  <span key={hobby} className="px-4 py-2 bg-muted text-sm rounded-full">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">关于洛阳</h3>
              <p className="text-muted-foreground leading-relaxed">
                洛阳是我的家乡，十三朝古都，有着深厚的历史文化底蕴。我喜欢在老城区的街巷里穿行，品尝地道的洛阳水席，感受这座城市古今交融的独特魅力。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
