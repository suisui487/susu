import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-medium">
            S
          </div>
          <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Suisui. All rights reserved.
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            首页
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            关于我
          </Link>
          <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            作品
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            联系我
          </Link>
        </div>
      </div>
    </footer>
  )
}
