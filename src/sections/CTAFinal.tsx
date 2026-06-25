import { motion } from 'framer-motion'
import {
  ArrowRight,
  Layout,
  MessageCircle,
  Search,
  Shield,
  Smartphone,
} from 'lucide-react'

import { whatsappUrl } from '../config/contact'

const WHATSAPP_MESSAGE =
  'Olá NG COMPANY! Quero iniciar o projeto do meu site institucional. Pode me passar os próximos passos?'

const includedItems = [
  {
    icon: Layout,
    label: 'Design profissional e exclusivo',
  },
  {
    icon: Smartphone,
    label: 'Site 100% responsivo (celular, tablet e desktop)',
  },
  {
    icon: Search,
    label: 'Otimizado para mecanismos de busca',
  },
  {
    icon: MessageCircle,
    label: 'Integração com WhatsApp',
  },
  {
    icon: Shield,
    label: 'Satisfação Garantida',
  },
]

const openWhatsApp = () => {
  window.open(whatsappUrl(WHATSAPP_MESSAGE), '_blank')
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
}

export default function CTAFinal() {
  return (
    <section className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Microcopy + Headline */}
        <motion.div {...fadeUp} className="text-center mb-14 md:mb-16">
          <div className="uppercase tracking-[4px] text-[10px] text-white/40 mb-5">
            Seu site profissional começa agora
          </div>

          <h2 className="section-heading text-[9vw] sm:text-[44px] md:text-[58px] lg:text-[68px] tracking-[-3.5px] leading-[0.92] text-white mb-6">
            Vamos criar o site que representa<br className="hidden sm:block" /> o seu negócio com seriedade.
          </h2>

          <p className="text-white/55 max-w-xl mx-auto text-[15px] md:text-[17px] leading-relaxed">
            Um site institucional bem construído transmite confiança, organiza sua presença online
            e facilita o contato com novos clientes.
          </p>
        </motion.div>

        {/* What's included */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="mb-14 md:mb-16">
          <h3 className="text-center section-heading text-2xl md:text-3xl tracking-[-1.5px] text-white mb-3">
            Tudo que você recebe por R$ 700
          </h3>
          <p className="text-center text-white/40 text-sm mb-10">
            Sem surpresas. Tudo descrito com clareza.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {includedItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="flex flex-col items-center text-center gap-4 p-6 md:p-7 bg-black"
              >
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <item.icon size={17} className="text-white/80" strokeWidth={1.5} />
                </div>
                <p className="text-[12px] md:text-[13px] leading-snug text-white/75 font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.14 }}
          className="text-center mb-12"
        >
          <div className="inline-block border border-white/15 rounded-3xl px-10 md:px-16 py-9 md:py-11">
            <div className="text-[11px] tracking-[3px] uppercase text-white/40 mb-3">
              Investimento único
            </div>
            <div className="section-heading text-[64px] sm:text-[80px] md:text-[96px] leading-none tracking-[-5px] text-white mb-5">
              R$ 700
            </div>
            <p className="text-white/50 text-sm md:text-[15px] leading-relaxed max-w-sm mx-auto">
              Manutenção mensal a partir de R$ 90
              <span className="block text-white/35 text-[13px] mt-1">
                (inclui atualizações, segurança e suporte)
              </span>
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="text-center"
        >
          <button
            onClick={openWhatsApp}
            className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto min-w-[320px] px-12 py-5 md:py-6 bg-white text-black text-[12px] md:text-[13px] font-bold tracking-[2.5px] uppercase rounded-full hover:bg-white/90 transition-all duration-300 active:scale-[0.985]"
          >
            Iniciar projeto agora
            <ArrowRight
              size={17}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-7 text-[10px] tracking-[2.5px] uppercase text-white/35">
            <span>Resposta rápida</span>
            <span className="text-white/20">•</span>
            <span>Sem compromisso</span>
            <span className="text-white/20">•</span>
            <span>Garantia de satisfação</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}