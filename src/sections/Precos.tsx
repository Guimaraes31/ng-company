import WhatsAppButton from '../components/WhatsAppButton'

export default function Precos() {
  return (
    <section id="precos" className="bg-black text-white py-16 md:py-20 relative">
      {/* Subtle grid for futuristic feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-10">
          <div className="uppercase tracking-[4px] text-xs text-white/40 mb-3">INVESTIMENTO TRANSPARENTE</div>
          <h2 className="section-heading text-white text-6xl md:text-[70px] tracking-[-3.2px] leading-none">Preços diretos.</h2>
          <p className="mt-5 text-white/55 max-w-[420px] mx-auto text-[15px]">Pague uma única vez pela construção. Mantenha com mensalidade acessível.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-[980px] mx-auto">
          {/* Criação */}
          <div className="bg-white text-black rounded-3xl p-9 md:p-11 flex flex-col">
            <div>
              <div className="text-xs tracking-[3px] text-black/40">PAGAMENTO ÚNICO</div>
              <div className="font-heading text-[56px] leading-none tracking-[-3.2px] mt-2 font-extrabold">
                R$ 700<span className="text-xl align-baseline tracking-normal font-sans text-black/50"> único</span>
              </div>
            </div>

            <div className="h-px bg-black/10 my-9" />

            <div className="text-xs tracking-[3px] text-black/40 mb-4">INCLUI:</div>
            <ul className="space-y-[13px] text-sm flex-1">
              {[
                "Design exclusivo e moderno",
                "Até 6 páginas estruturadas",
                "Site totalmente responsivo (celular, tablet e desktop)",
                "Integração com WhatsApp e formulários de contato",
                "Entrega em até 15 dias úteis",
                "Otimização técnica inicial para SEO",
              ].map((item, i) => <li key={i}>• {item}</li>)}
            </ul>

            <div className="mt-auto pt-9">
              <WhatsAppButton 
                variant="primary" 
                className="w-full justify-center"
                message="Olá NG COMPANY, quero contratar a criação do site por R$ 700."
              >
                CONTRATAR CRIAÇÃO DO SITE
              </WhatsAppButton>
            </div>
          </div>

          {/* Manutenção */}
          <div className="border border-white/15 rounded-3xl p-9 md:p-11 flex flex-col">
            <div>
              <div className="text-xs tracking-[3px] text-white/40 mb-2">MANUTENÇÃO MENSAL</div>
              <div className="font-heading text-[56px] leading-none tracking-[-3.2px] font-extrabold">
                R$ 90<span className="text-xl align-baseline tracking-normal font-sans text-white/50">/mês</span>
              </div>
            </div>

            <div className="h-px bg-white/15 my-9" />

            <div className="text-xs tracking-[3px] text-white/40 mb-4">INCLUI:</div>
            <ul className="space-y-[13px] text-sm flex-1 text-white/85">
              {[
                "Correções técnicas e ajustes",
                "Backup automático + monitoramento de segurança",
                "Suporte prioritário via WhatsApp",
                "Atualizações de segurança e performance",
                "Até 2 atualizações simples de conteúdo por mês",
              ].map((item, i) => <li key={i}>• {item}</li>)}
            </ul>

            <div className="mt-auto pt-9">
              <button 
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 border border-white/30 rounded-full text-sm tracking-[2.2px] uppercase hover:bg-white hover:text-black transition"
              >
                ENTENDA A MANUTENÇÃO
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-[10px] tracking-[2.5px] text-white/30 mt-10">
          SEM FIDELIDADE • SEM TAXAS OCULTAS • CANCELAMENTO SIMPLES
        </div>
      </div>
    </section>
  )
}

