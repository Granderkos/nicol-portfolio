export function AboutSection() {
  const qualities = [
    { text: "Výstupy připravené k výrobě", color: "bg-primary" },
    { text: "Důraz na technickou správnost", color: "bg-accent" },
    { text: "Práce podle brand manuálů", color: "bg-primary" },
    { text: "Samostatná a spolehlivá práce", color: "bg-accent" },
  ]

  return (
    <section id="o-mne" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-accent" />
          <span className="text-sm font-medium tracking-wide text-accent uppercase">
            O mně
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Nicol Štampferová
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-foreground leading-relaxed font-medium">
                Grafická designérka se zaměřením na tiskovou a digitální grafiku pro firemní prostředí.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Vytvářím marketingové materiály, produktovou grafiku a vizuály pro interní i externí komunikaci. Dbám na to, aby výstupy odpovídaly technickým požadavkům a byly použitelné bez dalších úprav.
            </p>
          </div>

          {/* Right Column - Qualities & Location */}
          <div className="space-y-6">
            {/* What I Bring */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Jak pracuji
              </h3>
              <ul className="space-y-3">
                {qualities.map((quality, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${quality.color}`} />
                    <span className="text-foreground">{quality.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Dostupnost
              </h3>
              <p className="text-foreground">
                Otevřená nabídkám samostatně či v týmu převážně na dálku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
