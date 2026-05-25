import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { DifyChatbot } from '@/components/dify-chatbot'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Suisui | AI 训练师 & 前舞蹈老师',
  description: '用舞蹈训练出的细腻感知，给AI注入理解人类情绪的能力，让技术更有温度。',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <DifyChatbot />
      </body>
    </html>
  )
}
