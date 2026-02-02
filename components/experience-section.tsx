export function ExperienceSection() {
  const highlights = [
    {
      title: "Tisková a výrobní grafika",
      description:
        "Podklady pro tisk a výrobu: správné formáty, ořezy, barevné profily a exporty.",
      color: "bg-primary",
    },
    {
      title: "Produktová a textilní grafika",
      description:
        "Návrhy vzorů, etiket a produktových vizuálů s ohledem na výrobní proces.",
      color: "bg-accent",
    },
    {
      title: "Marketingové materiály",
      description:
        "Vizuály pro kampaně, sociální sítě a firemní komunikaci.",
      color: "bg-primary",
    },
  ]

  return (
    <section id="zkusenosti" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-accent" />
          <span className="text-sm font-medium tracking-wide text-accent uppercase">
            Zkušenosti
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Zkušenosti z praxe
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-foreground leading-relaxed">
                Typy grafických prací, které jsem realizovala pro různé firmy a značky.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full ${item.color} mt-2`} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
