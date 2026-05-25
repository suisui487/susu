'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    difyChatbotConfig?: {
      token: string
      inputs: Record<string, unknown>
      systemVariables: Record<string, unknown>
      userVariables: Record<string, unknown>
    }
  }
}

export function DifyChatbot() {
  const injected = useRef(false)

  useEffect(() => {
    if (injected.current) return
    injected.current = true

    window.difyChatbotConfig = {
      token: '0s6WkpbDxETqjt1W',
      inputs: {},
      systemVariables: {},
      userVariables: {},
    }

    const script = document.createElement('script')
    script.src = 'https://udify.app/embed.min.js'
    script.id = '0s6WkpbDxETqjt1W'
    document.body.appendChild(script)

    const style = document.createElement('style')
    style.textContent =
      '#dify-chatbot-bubble-button{background-color:#1C64F2!important}#dify-chatbot-bubble-window{width:24rem!important;height:40rem!important}'
    document.head.appendChild(style)
  }, [])

  return null
}
