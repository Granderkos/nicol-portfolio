import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="kontakt" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-primary" />
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            Kontakt
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Ozvěte se
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Hledáte grafika do týmu nebo máte dotaz k mé práci? Napište mi.
        </p>

        <div className="bg-card border border-border rounded-lg p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Email
              </h3>
              <a
                href="mailto:grafika@nicolstampferova.com"
                className="text-lg md:text-xl text-foreground hover:text-primary transition-colors"
              >
                grafika@nicolstampferova.com
              </a>
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="mailto:grafika@nicolstampferova.com">
                <Mail size={18} className="mr-2" />
                Napsat email
              </a>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-6">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span>Kompletní portfolio k dispozici na vyžádání.</span>
        </div>
      </div>
    </section>
  )
}
