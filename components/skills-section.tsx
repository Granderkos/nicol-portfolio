export function SkillsSection() {
  const coreSkills = [
    {
      title: "Tisková grafika",
      description: "Příprava podkladů pro ofset, digitální tisk a velkoplošný tisk",
      color: "bg-primary",
    },
    {
      title: "Produktová grafika",
      description: "Etikety, obaly, patterny a vizuály pro textil",
      color: "bg-accent",
    },
    {
      title: "Vizuální identita",
      description: "Práce s brand manuály, tvorba a údržba vizuálních systémů",
      color: "bg-primary",
    },
    {
      title: "Digitální vizuály",
      description: "Grafika pro sociální sítě, web a interní komunikaci",
      color: "bg-primary",
    },
  ]

  const tools = [
    { name: "Adobe Photoshop", level: 80 },
    { name: "Inkscape", level: 90 },
    { name: "Adobe Illustrator", level: 50 },
    { name: "InDesign", level: 25 },
  ]

  return (
    <section id="dovednosti" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-primary" />
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            Schopnosti
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Dovednosti a nástroje
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Core Skills */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Hlavní dovednosti
            </h3>
            <div className="space-y-4">
              {coreSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-2 h-2 rounded-full ${skill.color} mt-2`} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {skill.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Nástroje
            </h3>
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-5"
                >
                  <div className="mb-3">
                    <span className="font-medium text-foreground">{tool.name}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${tool.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
