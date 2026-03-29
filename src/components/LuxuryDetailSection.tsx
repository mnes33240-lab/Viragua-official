import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function LuxuryDetailSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 0.98])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const captionY = useTransform(scrollYProgress, [0.05, 0.3], [30, 0])
  const captionOpacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1])

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] overflow-hidden" style={{ height: '120vh' }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Caption on top */}
        <motion.div
          style={{ y: captionY, opacity: captionOpacity }}
          className="absolute top-10 left-0 right-0 z-10 text-center px-6 pointer-events-none"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-3">
            Water, Reimagined.
          </h2>
          <p className="text-sm md:text-base text-white/50 font-light tracking-widest uppercase">
            Crafted in steel. Defined by stone. Engineered for purity.
          </p>
        </motion.div>

        {/* Video fitted in frame */}
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          >
            <source src={`${import.meta.env.BASE_URL}timeless-design.mp4`} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  )
}
