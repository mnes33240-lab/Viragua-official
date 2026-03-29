import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function SmartConnectivitySection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const captionY = useTransform(scrollYProgress, [0.1, 0.35], [40, 0])
  const captionOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1])

  const features = [
    { label: "Wi-Fi Connected", desc: "Monitor usage from anywhere" },
    { label: "Touch Display", desc: "Intuitive precision control" },
    { label: "Smart Scheduling", desc: "Automated temperature settings" },
  ]

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] overflow-hidden" style={{ height: '130vh' }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background video */}
        <motion.div style={{ opacity }} className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          >
            <source src="/smart-connectivity.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Left side text */}
        <motion.div style={{ y: captionY, opacity: captionOpacity }} className="relative z-10 self-end pb-14 px-8 md:px-16 w-full max-w-md">
          <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-3 font-light">
            Intelligent Control
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-5 leading-tight">
            Smart Connectivity
          </h2>
          <p className="text-white/60 font-light text-sm md:text-base mb-6 leading-relaxed">
            Seamlessly integrated with your connected home. Control every aspect of your hydration experience with elegance.
          </p>
          <div className="space-y-4">
            {features.map((f) => (
              <div key={f.label} className="flex items-start gap-3">
                <div className="mt-1.5 w-1 h-1 rounded-full bg-white/60 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">{f.label}</p>
                  <p className="text-white/50 text-xs font-light">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
