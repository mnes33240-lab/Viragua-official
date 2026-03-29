import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function FiltrationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
  )

  const textOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1])
  const textX = useTransform(scrollYProgress, [0.3, 0.7], [-20, 0])

  const features = [
    "Multi-stage filtration",
    "Removes contaminants",
    "Crystal-clear purity",
  ]

  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      <motion.div ref={ref} style={{ clipPath }} className="relative w-full">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1773711136858~2.png-tFAxllfaX3lKmNj6ZulrFAFxOB4Xfm.jpeg"
          alt="VIRÁGUA Internal Filtration System"
          className="w-full h-auto object-contain"
        />
        
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-400/10 via-transparent to-transparent" />

        <motion.div
          style={{ opacity: textOpacity, x: textX }}
          className="absolute left-0 top-0 bottom-0 flex items-center"
        >
          <div className="bg-gradient-to-r from-black/90 via-black/70 to-transparent py-6 px-4 md:px-8 pr-12 md:pr-16 max-w-xs md:max-w-sm">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-2">
              Advanced Purification
            </p>
            <h2 className="font-serif text-xl md:text-2xl text-white mb-4">
              Pure Water Technology
            </h2>

            <div className="space-y-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="relative flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <div className="absolute inset-0 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-75" />
                  </div>
                  <span className="text-sm text-white/90 font-light">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative w-full">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_uncompromising_purity_202603191422.png-dSFoUe3UFBlDG9sHv2UNOa52Bm3geH.jpeg"
          alt="VIRÁGUA with Everpure H-104 Filter"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  )
}
