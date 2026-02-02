import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-sm font-medium tracking-wide text-primary uppercase">
              2D Grafická Designérka
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            Grafika, která funguje v{" "}
            <span className="text-primary">tisku</span> i na{" "}
            <span className="text-accent">obrazovce.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
             Grafická designérka se zaměřením na tiskovou i digitální grafiku. Vytvářím plakáty, vizitky a letáky, občasně se věnuji také tvorbě log, bitmap a vizuálních identit firem.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-foreground">Tisková grafika</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm text-foreground">Digitální vizuály</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card">
              <span className="w-2 h-2 rounded-full bg-foreground" />
              <span className="text-sm text-foreground">Produktový design</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#portfolio">Zobrazit portfolio</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent">
              <a href="#kontakt">Kontakt</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex items-center gap-2 text-muted-foreground">
          <ArrowDown size={16} className="animate-bounce" />
          <span className="text-sm">Více níže</span>
        </div>
      </div>
    </section>
  )
}
