"use client"

import { useEffect, useState } from "react"

export function SplashScreen() {
  const [opacity, setOpacity] = useState(1)
  const [showText, setShowText] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true)
    }, 500)

    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const newOpacity = Math.max(0, 1 - scrollY / (windowHeight * 0.5))
      setOpacity(newOpacity)

      if (newOpacity <= 0) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearTimeout(textTimer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (isHidden) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
      style={{
        opacity,
        pointerEvents: opacity < 0.1 ? "none" : "auto",
        transition: "opacity 0.1s ease-out",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/847fd95c-7804-485a-8347-18f2f384dc5d-1~2-CFUVzDibutDa0vWzSSjtTQt9crDkxz.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div
        className="relative z-10 flex flex-col items-center justify-center text-center"
        style={{
          transition: "opacity 1s ease, transform 1s ease",
          opacity: showText ? 1 : 0,
          transform: showText ? "translateY(0)" : "translateY(1rem)",
        }}
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] text-white mb-4">
          VIRÁGUA
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em] text-white/90 uppercase">
          Luxury Hydration. Perfected.
        </p>
      </div>
    </div>
  )
}
