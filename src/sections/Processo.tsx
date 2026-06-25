import { motion } from 'framer-motion'
import { MessageCircle, Layout, Code, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Entendimento do projeto',
    desc: 'Conversamos sobre sua empresa, seus objetivos e o tipo de presença digital que deseja construir.',
  },
  {
    number: '02',
    icon: Layout,
    title: 'Planejamento visual',
    desc: 'Definimos a estrutura do site, páginas, identidade visual e organização do conteúdo.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Desenvolvimento',
    desc: 'Transformamos o planejamento em um site moderno, responsivo e preparado para transmitir profissionalismo.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Publicação e suporte',
    desc: 'Após a aprovação, realizamos a publicação e oferecemos manutenção para manter tudo funcionando corretamente.',
  },
]

export default function Processo() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14 md:py-16 border-b border-black/10">
      <div className="mb-10 text-center">
        <div className="uppercase tracking-[3px] text-xs text-black/50 mb-1.5">METODOLOGIA</div>
        <h2 className="section-heading text-5xl md:text-[56px] tracking-[-2.5px] leading-none mb-2">NOSSO PROCESSO</h2>
        <p className="text-[15px] text-black/60">Como trabalhamos</p>
      </div>

      <div className="relative">
        {/* Desktop connecting line */}
        <div className="hidden lg:block absolute top-[92px] left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-black/10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative flex flex-col border border-black/10 rounded-3xl p-8 bg-white hover:border-black/30 transition-all"
              >
                {/* Step number */}
                <div className="font-heading text-[42px] tracking-[-2px] font-extrabold text-black mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex w-11 h-11 items-center justify-center rounded-2xl border border-black/10 group-hover:border-black/30 transition">
                  <Icon size={22} className="text-black/70" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-[21px] tracking-[-0.6px] font-extrabold leading-tight mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] leading-relaxed text-black/70 flex-1">
                  {step.desc}
                </p>

                {/* Step connector dot */}
                <div className="hidden lg:block absolute top-[92px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border border-black/20 bg-white" />
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="mt-14 text-center text-sm text-black/60">
        Projetos desenvolvidos com foco em qualidade, performance e experiência do usuário.
      </div>
    </section>
  )
}
