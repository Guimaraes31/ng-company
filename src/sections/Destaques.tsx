import { motion } from 'framer-motion'
import { Palette, Smartphone, RefreshCw, Eye } from 'lucide-react'

const destaques = [
  {
    icon: Palette,
    label: '+100%',
    title: 'Projetos personalizados',
    desc: 'Cada projeto é desenvolvido de acordo com as necessidades do cliente.',
  },
  {
    icon: Smartphone,
    label: '100%',
    title: 'Responsivos',
    desc: 'Experiência otimizada para celulares, tablets e computadores.',
  },
  {
    icon: RefreshCw,
    label: 'Suporte',
    title: 'Mensal disponível',
    desc: 'Manutenção contínua para manter o site atualizado e funcionando.',
  },
  {
    icon: Eye,
    label: 'Visual',
    title: 'Moderno e profissional',
    desc: 'Design pensado para transmitir credibilidade e valor para sua empresa.',
  },
]

export default function Destaques() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14 md:py-16 border-b border-black/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {destaques.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="flex flex-col border border-black/10 rounded-3xl p-8 hover:border-black/40 transition-colors bg-white"
            >
              <div className="mb-8">
                <div className="inline-flex w-10 h-10 items-center justify-center rounded-2xl border border-black/10 mb-5">
                  <Icon size={20} className="text-black/70" />
                </div>

                <div className="font-heading text-[42px] leading-none tracking-[-2.5px] font-extrabold mb-1">
                  {item.label}
                </div>
                <div className="font-heading text-xl tracking-[-0.5px] font-extrabold">
                  {item.title}
                </div>
              </div>

              <p className="mt-auto text-[15px] leading-relaxed text-black/70">
                {item.desc}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
