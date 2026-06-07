import { NavBar } from "./components/NavBar"
import { HeroSection } from "./components/HeroSection"
import { ProblemSection } from "./components/ProblemSection"
import { ModulesSection } from "./components/ModulesSection"
import { ImpactSection } from "./components/ImpactSection"
import { CtaSection, Footer } from "./components/CtaFooter"

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <ModulesSection />
      <ImpactSection />
      <CtaSection />
      <Footer />
    </>
  )
}

export default App
