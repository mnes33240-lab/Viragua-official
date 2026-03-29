import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function WaterDispensingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [1.08, 1.02, 1, 0.97])
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const textY = useTransform(scrollYProgress, [0.2, 0.5], [30, 0])

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] overflow-hidden" style={{ height: '130vh' }}>
      <div className="sticky top-0 h-screen flex items-end justify-center overflow-hidden pb-16">
        <motion.div style={{ scale, opacity }} className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Using_the_provided_202603181904-qxtBaZNEfM7nJMp5dIytmUeLgZRwHH.jpeg"
            alt="VIRÁGUA Water Dispensing Moment"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </motion.div>

        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 text-center px-6 max-w-2xl"
        >
          <p className="text-xs tracking-[0.4em] text-white/50 uppercase mb-3 font-light">
            The Perfect Moment
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-4 leading-tight">
            Every Drop, Perfected
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto font-light">
            Every drop, perfectly dispensed. Every moment, effortlessly elegant.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
