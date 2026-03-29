import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function MaterialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.02, 0.98])
  const textY = useTransform(scrollYProgress, [0.15, 0.45], [50, 0])
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1])

  const materials = [
    { name: "Carrara Marble", desc: "Hand-selected Italian stone" },
    { name: "316 Stainless Steel", desc: "Marine-grade alloy construction" },
    { name: "Tempered Glass", desc: "Crystal clear display panel" },
  ]

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] overflow-hidden" style={{ height: '130vh' }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ scale, opacity }} className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generate_images_of_this_55_inch_dispenser_standing_delpmaspu%20%284%29~2.png-Yv3F7fOLDdXoIcR9AaROlOqUjTGWgM.jpeg"
            alt="VIRÁGUA Material Detail"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent" />
        </motion.div>

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 ml-auto px-8 md:px-16 max-w-sm"
        >
          <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-3 font-light">
            Uncompromising Quality
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
            Built to Last
          </h2>
          <div className="space-y-5">
            {materials.map((m) => (
              <div key={m.name} className="border-l border-white/20 pl-4">
                <p className="text-white text-sm font-medium tracking-wide">{m.name}</p>
                <p className="text-white/50 text-xs font-light mt-0.5">{m.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
