import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import portfolioManifest from '../data/portfolio-manifest.json'

const projects = [
  {
    id: 1,
    title: 'Refrigeração',
    category: 'GESTÃO DE SERVIÇOS',
    description:
      'Sistema de gestão para empresa de refrigeração e ar-condicionado, com dashboard, ordens de serviço, orçamentos e controle de clientes.',
    highlights: ['Dashboard operacional', 'Ordens de serviço', 'Orçamentos em PDF'],
    images: portfolioManifest.refrigeracao,
    url: 'refrigeracao.app',
  },
  {
    id: 2,
    title: 'Barbearia',
    category: 'GESTÃO DE SALÃO',
    description:
      'Plataforma completa para barbearia com agenda, profissionais, atendimentos, caixa e visão geral do negócio em tempo real.',
    highlights: ['Agenda inteligente', 'Gestão de equipe', 'Controle financeiro'],
    images: portfolioManifest.barbearia,
    url: 'barbearia.app',
  },
]

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [activeImage, setActiveImage] = useState(0)
  const total = project.images.length

  const goTo = (index: number) => {
    setActiveImage((index + total) % total)
  }

  const prev = () => goTo(activeImage - 1)
  const next = () => goTo(activeImage + 1)

  return (
    <article className="border border-black/10 rounded-[2rem] overflow-hidden bg-white hover:border-black/25 transition-all duration-300">
      <div className="bg-[#0a0a0a] p-5 md:p-7 lg:p-8">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl">
          <div className="h-10 bg-zinc-900 flex items-center px-4 gap-3 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <div className="flex-1 text-center text-[11px] tracking-[1px] text-white/35 font-mono truncate px-6">
              {project.url}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[300px] sm:h-[380px] md:h-[460px] lg:h-[540px] xl:h-[600px] bg-zinc-900 flex items-center justify-center overflow-hidden">
              {project.images.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={`${project.title} — ${image.label}`}
                  className={`absolute inset-0 w-full h-full object-contain p-3 md:p-5 transition-all duration-400 ${
                    activeImage === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-[0.98] pointer-events-none'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={prev}
              aria-label="Imagem anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/75 border border-white/20 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
            >
              <ChevronLeft size={22} strokeWidth={2} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Próxima imagem"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/75 border border-white/20 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
            >
              <ChevronRight size={22} strokeWidth={2} />
            </button>

            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/65 border border-white/15 text-[11px] tracking-[1px] text-white/75 font-mono">
              {activeImage + 1} / {total}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/65 border border-white/15 text-[11px] tracking-[1.5px] uppercase text-white/70 whitespace-nowrap">
              {project.images[activeImage].label}
            </div>
          </div>
        </div>

        <div className="mt-5 flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {project.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Ver ${image.label}`}
              aria-current={activeImage === index}
              className={`shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                activeImage === index
                  ? 'border-white ring-2 ring-white/30'
                  : 'border-white/15 opacity-55 hover:opacity-90 hover:border-white/40'
              }`}
            >
              <img
                src={image.src}
                alt=""
                className="w-32 h-20 sm:w-36 sm:h-24 object-cover object-top bg-zinc-900"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="px-7 md:px-10 py-8 md:py-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-2xl">
          <div className="text-[10px] tracking-[3px] text-black/45 mb-2">{project.category}</div>
          <h3 className="font-heading text-3xl md:text-4xl tracking-[-1px] font-extrabold leading-none mb-4">
            {project.title}
          </h3>
          <p className="text-[15px] md:text-base leading-relaxed text-black/60">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 lg:justify-end lg:max-w-md">
          {project.highlights.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 text-[10px] tracking-[1.5px] uppercase border border-black/10 rounded-full text-black/55"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-[1440px] mx-auto px-5 sm:px-6 py-16 md:py-20 border-b border-black/10">
      <div className="text-center mb-12">
        <div className="uppercase text-xs tracking-[3px] text-black/50 mb-2">TRABALHOS REALIZADOS</div>
        <h2 className="section-heading text-6xl md:text-[64px] tracking-[-3px] leading-none mb-3">
          Portfólio
        </h2>
        <p className="max-w-md mx-auto text-[15px] leading-relaxed text-black/60">
          Projetos reais desenvolvidos com foco em organização, usabilidade e presença profissional.
        </p>
      </div>

      <div className="flex flex-col gap-14 md:gap-16">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}