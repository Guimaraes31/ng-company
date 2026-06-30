import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'

import { whatsappUrl } from '../config/contact'

const WHATSAPP_MESSAGE =
  'Olá NG COMPANY! Quero conhecer os planos e iniciar meu projeto. Pode me passar os próximos passos?'

const planSummaries = [
  {
    name: 'Site Essencial',
    price: '990',
    priceSuffix: '*',
    benefit: 'Site profissional rápido, pronto para captar clientes.',
  },
  {
    name: 'Sistema de Gestão',
    price: '1.690',
    priceSuffix: '',
    benefit: 'Controle de clientes, agenda e financeiro em um só lugar.',
  },
  {
    name: 'Sistema de Gestão + Site',
    price: '2.700',
    priceSuffix: '',
    benefit: 'Presença digital e gestão completa do seu negócio.',
  },
]

const scrollToPrecos = () => {
  document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

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
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mb-12 text-center md:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-[10px] tracking-[3px] uppercase text-white/45">
            <Sparkles size={12} className="text-white/60" />
            Planos transparentes
          </div>

          <h2 className="section-heading mb-6 text-[9vw] leading-[0.92] tracking-[-3.5px] text-white sm:text-[44px] md:text-[58px] lg:text-[64px]">
            Planos feitos para o seu negócio
            <br className="hidden sm:block" /> crescer com estrutura.
          </h2>

          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-white/55 md:text-[17px]">
            Escolha entre um site profissional ou um sistema de gestão completo.
            Comece rápido, pague o que faz sentido para o seu momento.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.08 }}
          className="mb-12 grid gap-4 md:grid-cols-3 md:gap-5"
        >
          {planSummaries.map((plan, i) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group flex flex-col rounded-[24px] border border-white/12 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] md:p-7"
            >
              <p className="mb-2 text-[10px] tracking-[3px] uppercase text-white/40">A partir de</p>
              <h3 className="font-heading text-xl font-extrabold leading-tight tracking-[-0.6px]">
                {plan.name}
              </h3>
              <div className="mt-3 font-heading text-4xl font-extrabold leading-none tracking-[-2px]">
                R$ {plan.price}
                {plan.priceSuffix}
              </div>
              <p className="mt-4 flex-1 text-[14px] leading-relaxed text-white/60">{plan.benefit}</p>
              <button
                onClick={scrollToPrecos}
                className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium tracking-[2px] uppercase text-white/70 transition-colors hover:text-white"
              >
                Ver detalhes
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.16 }}
          className="text-center"
        >
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={scrollToPrecos}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-12 py-5 text-[12px] font-bold tracking-[2.5px] uppercase text-black transition-all duration-300 hover:bg-white/90 active:scale-[0.985] sm:w-auto sm:min-w-[280px] md:text-[13px] md:py-6"
            >
              Ver planos
              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={openWhatsApp}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/30 px-10 py-5 text-[12px] font-medium tracking-[2px] uppercase text-white transition-all duration-300 hover:bg-white hover:text-black active:scale-[0.985] sm:w-auto md:text-[13px] md:py-6"
            >
              <MessageCircle size={17} />
              Falar no WhatsApp
            </button>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] tracking-[2.5px] uppercase text-white/35">
            <span>Entrega em até 15 dias</span>
            <span className="text-white/20">•</span>
            <span>Sem fidelidade</span>
            <span className="text-white/20">•</span>
            <span>Suporte contínuo</span>
          </div>

          <p className="mt-4 text-xs text-white/25">
            *Valor promocional do plano Site Essencial. Consulte condições.
          </p>
        </motion.div>
      </div>
    </section>
  )
}