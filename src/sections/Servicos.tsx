import { Check } from 'lucide-react'

const servicos = [
  {
    title: "Criação de Site Institucional",
    desc: "Desenvolvimento completo de site profissional, com design exclusivo, otimizado para conversão e responsivo em todos os dispositivos.",
    items: ["Design personalizado e premium", "Estrutura de páginas completa", "SEO técnico básico", "Formulários de contato", "Entrega em até 15 dias"],
  },
  {
    title: "Manutenção Mensal",
    desc: "Suporte contínuo para manter seu site sempre atualizado, seguro e funcionando perfeitamente.",
    items: ["Atualizações de conteúdo", "Correção de problemas", "Monitoramento de segurança", "Backup mensal", "Suporte prioritário"],
  },
  {
    title: "Ajustes e Evolução",
    desc: "Adições de novas seções, melhorias de performance e adaptações conforme sua empresa cresce.",
    items: ["Novas páginas e funcionalidades", "Integrações com WhatsApp e redes", "Otimização de performance", "Ajustes de identidade visual"],
  },
  {
    title: "Presença Digital Profissional",
    desc: "Organização completa da sua imagem online para transmitir seriedade e profissionalismo.",
    items: ["Alinhamento de marca", "Textos estratégicos", "Fotos e elementos visuais", "Consistência em todas as páginas"],
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="max-w-6xl mx-auto px-6 py-14 md:py-16 border-b border-black/10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <div className="uppercase tracking-[3px] text-xs text-black/50 mb-2">O QUE ENTREGAMOS</div>
          <h2 className="section-heading text-6xl md:text-[68px] tracking-[-3px] leading-none">Serviços</h2>
        </div>
        <p className="max-w-xs text-black/60">Tudo que sua empresa precisa para ter uma presença digital profissional e mantê-la funcionando.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
        {servicos.map((servico, index) => (
          <div key={index} className="pl-0 md:pl-1">
            <div className="font-heading text-[26px] tracking-[-0.7px] font-extrabold mb-3">{servico.title}</div>
            <p className="text-[15px] leading-relaxed text-black/70 mb-6 pr-3">{servico.desc}</p>
            
            <div className="space-y-1.5 text-sm text-black/75">
              {servico.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={16} className="mt-[3px] shrink-0 text-black/50" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

