import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: "O que está incluso na criação do site?",
    a: "Design exclusivo, estrutura com até 6 páginas, responsividade completa, formulários de contato, integração com WhatsApp, otimização básica de SEO e entrega em até 15 dias úteis.",
  },
  {
    q: "Como funciona a manutenção mensal?",
    a: "Por R$ 90 por mês você recebe: correções técnicas, backup automático, monitoramento de segurança, suporte prioritário e até 2 pequenas atualizações de conteúdo por mês. Alterações maiores são orçadas à parte.",
  },
  {
    q: "Em quanto tempo o site fica pronto?",
    a: "O prazo médio de entrega é de 12 a 15 dias úteis, dependendo da complexidade e da agilidade no fornecimento de textos e imagens por parte do cliente.",
  },
  {
    q: "Posso pedir alterações depois da entrega?",
    a: "Sim. Alterações simples estão incluídas na manutenção. Mudanças maiores podem ser orçadas separadamente ou realizadas dentro do pacote mensal.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Recomendamos o pagamento dividido em duas etapas: 50% no início do projeto e 50% na entrega, antes de publicar o site.",
  },
  {
    q: "Vocês fazem sites para qualquer tipo de empresa?",
    a: "Sim. Atendemos escritórios, clínicas, consultorias, prestadores de serviço, lojas especializadas e negócios B2B que precisam de presença digital profissional.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 py-14 md:py-16 border-b border-black/10">
      <div className="text-center mb-12">
        <div className="uppercase tracking-[3px] text-xs mb-2 text-black/50">PERGUNTAS</div>
        <h2 className="section-heading text-6xl tracking-[-2.5px]">Perguntas frequentes</h2>
      </div>

      <div className="divide-y divide-black/10 border-y border-black/10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="py-1">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              >
                <span className="text-[17px] pr-4 tracking-[-0.1px]">{faq.q}</span>
                <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-black/20 group-hover:border-black transition">
                  {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                </div>
              </button>
              <div className={`overflow-hidden text-black/70 text-[15px] leading-relaxed pr-12 transition-all ${isOpen ? 'max-h-52 pb-7' : 'max-h-0'}`}>
                {faq.a}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
