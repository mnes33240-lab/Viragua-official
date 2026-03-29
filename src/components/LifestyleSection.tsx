import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const lifestyleImages = [
  {
    src: "/lifestyle-hero.png",
    alt: "VIRÁGUA dispensers - Discover the future of hydration",
    showText: true,
    title: "Designed for Your Lifestyle",
    subtitle: "Seamlessly integrates into any luxury space"
  },
]

interface LifestyleImageProps {
  src: string
  alt: string
  index: number
  showText?: boolean
  title?: string
  subtitle?: string
}

function LifestyleImage({ src, alt, showText, title, subtitle }: LifestyleImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1.12, 1.03, 1, 0.97])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const textY = useTransform(scrollYProgress, [0.1, 0.3], [30, 0])

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: '90vh', minHeight: '500px' }}
    >
      <motion.div
        style={{ opacity, scale, y }}
        className="absolute inset-0"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      {showText && title && (
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
        >
          <h3 className="font-serif text-3xl md:text-5xl text-white mb-2">{title}</h3>
          {subtitle && (
            <p className="text-white/70 text-sm md:text-base font-light tracking-widest uppercase">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
    </div>
  )
}

export function LifestyleSection() {
  return (
    <section className="bg-[#0a0a0a]">
      <div className="text-center py-20 px-6">
        <p className="text-xs tracking-[0.4em] text-white/40 uppercase mb-4 font-light">
          Gallery
        </p>
        <h2 className="font-serif text-4xl md:text-6xl text-white">
          In Its Element
        </h2>
      </div>

      <div className="space-y-2">
        {lifestyleImages.map((img, index) => (
          <LifestyleImage
            key={img.src}
            src={img.src}
            alt={img.alt}
            index={index}
            showText={img.showText}
            title={img.title}
            subtitle={img.subtitle}
          />
        ))}
      </div>
    </section>
  )
}
