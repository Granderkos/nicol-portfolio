"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  name: string
  role: string
  description: string
  images: string[]
}

const projects: Project[] = [
  {
    id: "radisox",
    name: "Radisox",
    role: "Textilní a brandingová grafika",
    description:
      "Návrh ponožek a etiket na zakázku, následně firemní branding – katalogy, reklamní bannery a e-mailové kampaně.",
    images: [
      "/projects/radisox/01.jpg",
      "/projects/radisox/02.jpg",
      "/projects/radisox/03.jpg",
      "/projects/radisox/04.jpg",
      "/projects/radisox/05.jpg",
      "/projects/radisox/06.jpg",
      "/projects/radisox/07.jpg",
      "/projects/radisox/08.jpg",
      "/projects/radisox/09.jpg",
    ],
  },
  {
    id: "cool-socks",
    name: "Cool Socks",
    role: "Social media",
    description:
      "Grafické návrhy postů pro sociální sítě.",
    images: [
      "/projects/cool-socks/01.png",
      "/projects/cool-socks/02.jpg",
      "/projects/cool-socks/03.jpg",
      "/projects/cool-socks/04.jpg",
    ],
  },
  {
    id: "fajn-sit",
    name: "Fajn Síť",
    role: "Marketingová grafika",
    description:
      "Vizuály pro marketing a firemní komunikaci.",
    images: [
      "/projects/fajn-sit/01.png",
      "/projects/fajn-sit/02.png",
      "/projects/fajn-sit/03.png",
      "/projects/fajn-sit/04.png",
      "/projects/fajn-sit/05.png",
      "/projects/fajn-sit/06.png",
    ],
  },
  {
    id: "farmiture",
    name: "Farmiture",
    role: "Produktová a brandingová grafika",
    description:
      "Tvorba loga, logomanuálu a produktových prezentací.",
    images: [
      "/projects/farmiture/01.png",
      "/projects/farmiture/02.jpg",
      "/projects/farmiture/03.jpg",
      "/projects/farmiture/04.jpg",
      "/projects/farmiture/05.jpg",
    ],
  },
  {
    id: "molten",
    name: "Molten",
    role: "Propagační materiály",
    description:
      "Tvorba loga a propagačních materiálů.",
    images: [
      "/projects/molten/01.png",
      "/projects/molten/02.png",
      "/projects/molten/03.png",
      "/projects/molten/04.png",
      "/projects/molten/05.png",
      "/projects/molten/06.png",
    ],
  },
  {
    id: "prisun-povolen",
    name: "Příšun Povolén",
    role: "Logo design",
    description:
      "Návrh loga kapely.",
    images: [
      "/projects/prisun-povolen/01.png",
      "/projects/prisun-povolen/02.png",
      "/projects/prisun-povolen/03.png",
    ],
  },
  {
    id: "reklamka-z-brd",
    name: "Reklamka z brd",
    role: "Základní vizuální identita",
    description:
      "Vytvoření loga fiktivní reklamní agentury.",
    images: [
      "/projects/reklamka-z-brd/01.png",
      "/projects/reklamka-z-brd/02.jpg",
    ],
  },
]

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-primary" />
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            Portfolio
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ukázky práce
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Výběr z realizovaných projektů pro různé klienty a odvětví.
        </p>

        {/* Featured Project - Radisox */}
        <div className="mb-12">
          <button
            onClick={() => openModal(projects[0])}
            className="w-full text-left bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-1 h-12 bg-primary rounded-full" />
              <div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {projects[0].name}
                </h3>
                <p className="text-sm font-medium text-primary uppercase tracking-wide">
                  {projects[0].role}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              {projects[0].description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projects[0].images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className="portfolio-bg relative aspect-square rounded-lg overflow-hidden bg-card border border-border flex items-center justify-center"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${projects[0].name} ukázka ${index + 1}`}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

          </button>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.slice(1).map((project) => (
            <button
              key={project.id}
              onClick={() => openModal(project)}
              className="text-left bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
            >
              <div className="relative aspect-[4/3] bg-card border-b border-border flex items-center justify-center">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-300 portfolio-bg"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-0.5 h-6 bg-primary rounded-full mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-medium text-primary uppercase tracking-wide">
                      {project.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b border-border">
              <div className="flex items-start gap-3">
                <div className="w-1 h-12 bg-primary rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {selectedProject.name}
                  </h3>
                  <p className="text-sm font-medium text-primary uppercase tracking-wide">
                    {selectedProject.role}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={24} />
                <span className="sr-only">Zavřít</span>
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-muted-foreground mb-6">
                {selectedProject.description}
              </p>

              {/* Image Gallery */}
              <div className="relative mb-4">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  <Image
                    src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedProject.name} ukázka ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                    >
                      <ChevronLeft size={20} />
                      <span className="sr-only">Předchozí</span>
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                    >
                      <ChevronRight size={20} />
                      <span className="sr-only">Další</span>
                    </Button>
                  </>
                )}
              </div>

              {/* Image Counter */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span>{currentImageIndex + 1}</span>
                <span>/</span>
                <span>{selectedProject.images.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
