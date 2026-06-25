const beneficios = [
  {
    title: "Visual Premium",
    text: "Design elegante e contemporâneo que transmite seriedade e profissionalismo desde o primeiro segundo.",
  },
  {
    title: "Mais Credibilidade",
    text: "Empresas com site bem estruturado são percebidas como mais confiáveis por clientes e parceiros.",
  },
  {
    title: "Estrutura para Vender",
    text: "Páginas organizadas, textos estratégicos e formulários que realmente geram contatos qualificados.",
  },
  {
    title: "Presença Digital Real",
    text: "Seu negócio passa a existir de forma profissional na internet, 24 horas por dia.",
  },
  {
    title: "Manutenção Tranquila",
    text: "Com a mensalidade, você não precisa se preocupar com atualizações, quebras ou segurança.",
  },
  {
    title: "Investimento Acessível",
    text: "R$ 700 pela criação + R$ 90/mês. Qualidade premium com custo realista para pequenas e médias empresas.",
  },
]

export default function Beneficios() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-14 md:py-16 border-b border-black/10">
      <div className="mb-8">
        <div className="uppercase tracking-[3px] text-xs text-black/50 mb-2">DIFERENCIAL</div>
        <h2 className="section-heading text-6xl md:text-[68px] tracking-[-3px] leading-none">Por que a NG COMPANY</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {beneficios.map((b, index) => (
          <div key={index} className="p-8 border border-black/10 rounded-3xl hover:border-black transition-colors">
            <div className="font-heading text-[22px] tracking-[-0.6px] font-extrabold mb-4 leading-tight">{b.title}</div>
            <p className="text-[15px] leading-relaxed text-black/70">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

