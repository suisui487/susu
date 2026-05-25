"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "首页", href: "/" },
  { name: "关于我", href: "/about" },
  { name: "作品", href: "/work" },
  { name: "生活", href: "/life" },
  { name: "联系我", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      {/* Desktop Navigation - Pill Style like Paperfolio */}
      <nav className="hidden md:flex items-center bg-foreground text-background rounded-full px-2 py-2 shadow-lg">
        {/* Logo */}
        <div className="w-10 h-10 rounded-full border-2 border-background flex items-center justify-center mr-4 ml-2">
          <span className="text-sm font-medium">S</span>
        </div>
        
        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-full",
                pathname === item.href 
                  ? "text-background" 
                  : "text-background/70 hover:text-background hover:bg-background/10"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="ml-2 w-10 h-10 rounded-lg bg-background text-foreground flex items-center justify-center hover:bg-background/90 transition-colors"
        >
          <Mail className="w-5 h-5" />
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full flex justify-between items-center bg-background/80 backdrop-blur-md rounded-full px-4 py-2">
        <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center">
          <span className="text-sm font-medium">S</span>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-background z-40">
          <div className="flex flex-col items-center pt-12 gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-serif transition-colors",
                  pathname === item.href
                    ? "text-[#ff6b9d]"
                    : "text-foreground hover:text-[#ff6b9d]"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
