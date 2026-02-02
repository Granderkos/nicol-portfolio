import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Global Background Image */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Image
          src="/images/hero-textile-sharp.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
        />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <PortfolioSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
