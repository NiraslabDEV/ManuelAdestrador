import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Services />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
