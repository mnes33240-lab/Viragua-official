import { SplashScreen } from "@/components/SplashScreen"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { LuxuryDetailSection } from "@/components/LuxuryDetailSection"
import { SmartConnectivitySection } from "@/components/SmartConnectivitySection"
import { FiltrationSection } from "@/components/FiltrationSection"
import { MaterialsSection } from "@/components/MaterialsSection"
import { WaterDispensingSection } from "@/components/WaterDispensingSection"
import { LifestyleSection } from "@/components/LifestyleSection"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <>
      <SplashScreen />
      <Navigation />
      <main>
        <HeroSection />
        <LuxuryDetailSection />
        <SmartConnectivitySection />
        <FiltrationSection />
        <MaterialsSection />
        <WaterDispensingSection />
        <LifestyleSection />
      </main>
      <Footer />
    </>
  )
}

export default App
