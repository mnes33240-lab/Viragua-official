import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function HeroSection() {
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

  return (
    <section className="relative bg-[#0a0a0a]">
      {/* Spacer for splash screen scroll area */}
      <div className="h-screen" />

      {/* Full screen product image with clip-path reveal */}
      <div
        className="relative w-full flex items-center justify-center bg-[#0a0a0a]"
        id="explore"
        style={{ height: '100vh', minHeight: '600px' }}
      >
        <motion.div ref={ref} style={{ clipPath }} className="w-full h-full">
          <img
            src={`${import.meta.env.BASE_URL}lifestyle-hero.png`}
            alt="VIRÁGUA Dispensers - Black and White Marble"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* Bottom text block in Didot font */}
      <div className="bg-[#0a0a0a] px-8 md:px-20 lg:px-32 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-6 text-white/70 leading-relaxed"
          style={{ fontFamily: "'GFS Didot', 'Playfair Display', Georgia, serif", fontSize: '1rem', fontWeight: 400 }}
        >
          <p>
            VIRÁGUA is built with intention at every level, combining precision engineering with refined materials to create a water experience that feels as premium as it performs.
          </p>
          <p>
            At its core, it features the Everpure H-104 filtration system, trusted for its ability to reduce contaminants, improve taste, and deliver consistently clean, balanced water. This is paired with an integrated UV light self-cleaning system that actively maintains internal purity by inhibiting bacterial growth within the water pathways.
          </p>
          <p>
            The internal architecture is designed for efficiency and reliability, ensuring stable flow, precise temperature control, and long-term durability. Every component works in harmony to deliver performance you can depend on daily.
          </p>
          <p>
            The exterior reflects the same level of craftsmanship. A brushed stainless steel body provides structural strength and a timeless finish, while a vertically integrated marble inlay introduces a natural, sculptural contrast. Every surface is intentional. Every detail refined.
          </p>
          <p>
            An integrated touchscreen interface offers seamless control, giving you instant access to hot and cold dispensing with precision. The system operates quietly, requires minimal maintenance, and is designed to integrate effortlessly into your space.
          </p>
          <p>
            From the internal technology to the outer form, VIRÁGUA is not just a dispenser. It is a complete system engineered for purity, performance, and presence.
          </p>
        </div>
      </div>
    </section>
  )
}
