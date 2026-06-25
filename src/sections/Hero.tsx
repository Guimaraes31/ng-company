import { motion } from 'framer-motion'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Hero() {
  return (
    <section className="pt-20 min-h-[85dvh] flex items-center border-b border-black/10 bg-white relative overflow-hidden">
      {/* Subtle futuristic grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 pt-8 pb-12 md:pt-10 text-center relative z-10">
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-[10px] tracking-[3px] uppercase border border-black/15 rounded-full text-black/60">
            <span className="w-1 h-1 bg-black rounded-full" /> NG COMPANY
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading text-[12vw] sm:text-[60px] md:text-[72px] lg:text-[84px] leading-[0.9] tracking-[-4.5px] font-bold mb-4"
        >
          SITES COM<br />PRESENÇA REAL.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="max-w-[520px] mx-auto text-[15px] md:text-[17px] leading-[1.4] text-black/65 mb-8"
        >
          Desenvolvemos sites institucionais de alto nível. 
          Design preciso, estrutura sólida e estética que transmite autoridade.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <WhatsAppButton className="w-full sm:w-auto py-3" />

          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="w-full sm:w-auto px-8 py-3 border border-black text-sm font-medium tracking-[2px] uppercase rounded-full hover:bg-black hover:text-white active:bg-zinc-900 transition-all"
          >
            VER PROJETOS
          </button>
        </div>

        <div className="mt-6 text-[9px] tracking-[2.5px] text-black/40">
          ENTREGA EM ATÉ 15 DIAS  •  MANUTENÇÃO A PARTIR DE R$ 90/MÊS
        </div>
      </div>

      {/* Subtle geometric accent */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-[0.07]">
        <div className="w-px h-28 bg-black" />
        <div className="w-28 h-px bg-black -mt-px" />
      </div>
    </section>
  )
}

