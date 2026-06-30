import { Check, Clock, Sparkles } from 'lucide-react'
import WhatsAppButton from '../components/WhatsAppButton'

const plans = [
  {
    name: 'Site Essencial',
    tagline: 'Entrada Rápida',
    setupPrice: '990',
    setupSuffix: '*',
    setupLabel: 'único',
    monthlyPrice: '99',
    description: 'Ideal para quem quer um site profissional rápido.',
    features: [
      'Design profissional e responsivo',
      'Até 4 páginas essenciais',
      'Integração com WhatsApp',
      'Formulário de contato',
      'SEO técnico básico',
    ],
    cta: 'Começar agora',
    message:
      'Olá NG COMPANY! Tenho interesse no plano Site Essencial (R$ 990 + R$ 99/mês). Pode me passar os próximos passos?',
    featured: false,
  },
  {
    name: 'Sistema de Gestão + Site',
    tagline: 'Solução completa',
    setupPrice: '2.700',
    setupSuffix: '',
    setupLabel: 'setup',
    monthlyPrice: '199',
    description: 'Melhor opção para quem quer um sistema completo de gerenciamento.',
    features: [
      'Site institucional completo',
      'Painel de gestão personalizado',
      'Cadastros de produtos e serviços',
      'Relatórios e métricas em tempo real',
      'Múltiplos usuários + suporte dedicado',
    ],
    cta: 'Falar no WhatsApp',
    message:
      'Olá NG COMPANY! Tenho interesse no plano Sistema de Gestão + Site (R$ 2.700 setup + R$ 199/mês). Pode me passar os próximos passos?',
    featured: true,
  },
  {
    name: 'Sistema de Gestão',
    tagline: 'Gestão interna',
    setupPrice: '1.690',
    setupSuffix: '',
    setupLabel: 'único',
    monthlyPrice: '129',
    description: 'Gestão profissional para barbearias, clínicas, estéticas e prestadores de serviço.',
    features: [
      'Dashboard completo com métricas em tempo real',
      'Controle de clientes, agendamentos e financeiro',
      'Múltiplos usuários com permissões',
      'Relatórios e exportação de dados',
      'Integração com WhatsApp',
      'Acesso via celular e computador',
      'Suporte dedicado + atualizações',
    ],
    cta: 'Começar agora',
    message:
      'Olá NG COMPANY! Tenho interesse no plano Sistema de Gestão (R$ 1.690 + R$ 129/mês). Pode me passar os próximos passos?',
    featured: false,
  },
]

export default function Precos() {
  return (
    <section id="precos" className="relative overflow-hidden bg-black py-20 md:py-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-[10px] tracking-[3px] uppercase text-white/50">
            <Sparkles size={12} className="text-white/70" />
            Investimento transparente
          </div>
          <h2 className="section-heading text-5xl leading-[0.95] tracking-[-3px] text-white sm:text-6xl md:text-[68px] md:tracking-[-3.5px]">
            Planos feitos para
            <br />
            crescer rápido.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/55 md:text-base">
            Pague uma única vez pela construção e mantenha com mensalidade acessível.
            Comece rápido, evolua com estrutura — sem surpresas no caminho.
          </p>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={[
                'group relative flex flex-col rounded-[28px] p-8 transition-all duration-500 ease-out md:p-9',
                plan.featured
                  ? 'z-10 border-2 border-white/20 bg-white text-black shadow-[0_32px_80px_-20px_rgba(255,255,255,0.28)] lg:-translate-y-3 lg:scale-[1.03] hover:shadow-[0_40px_100px_-24px_rgba(255,255,255,0.32)]'
                  : 'border border-white/12 bg-white/[0.03] backdrop-blur-sm hover:border-white/25 hover:bg-white/[0.06]',
              ].join(' ')}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black px-4 py-1.5 text-[10px] font-medium tracking-[2px] uppercase text-white shadow-lg">
                    <Sparkles size={11} />
                    Melhor custo-benefício
                  </span>
                </div>
              )}

              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p
                    className={[
                      'text-[10px] tracking-[3px] uppercase',
                      plan.featured ? 'text-black/45' : 'text-white/40',
                    ].join(' ')}
                  >
                    {plan.tagline}
                  </p>
                  <h3 className="mt-1 font-heading text-[26px] font-extrabold leading-tight tracking-[-0.8px]">
                    {plan.name}
                  </h3>
                </div>
                <span
                  className={[
                    'inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] tracking-[1.5px] uppercase',
                    plan.featured
                      ? 'bg-black/5 text-black/55'
                      : 'border border-white/10 bg-white/5 text-white/55',
                  ].join(' ')}
                >
                  <Clock size={11} />
                  15 dias
                </span>
              </div>

              <p
                className={[
                  'mb-7 text-[14px] leading-relaxed',
                  plan.featured ? 'text-black/60' : 'text-white/60',
                ].join(' ')}
              >
                {plan.description}
              </p>

              <div className="mb-7 space-y-4">
                <div>
                  <p
                    className={[
                      'mb-1 text-[10px] tracking-[3px] uppercase',
                      plan.featured ? 'text-black/40' : 'text-white/35',
                    ].join(' ')}
                  >
                    {plan.setupLabel === 'setup' ? 'Investimento inicial' : 'Pagamento único'}
                  </p>
                  <div className="flex items-end gap-1">
                    <span
                      className={[
                        'font-heading text-[46px] font-extrabold leading-none tracking-[-2.5px] md:text-[52px]',
                        plan.featured ? 'text-black' : 'text-white',
                      ].join(' ')}
                    >
                      R$ {plan.setupPrice}
                      {plan.setupSuffix}
                    </span>
                    <span
                      className={[
                        'mb-1.5 text-sm',
                        plan.featured ? 'text-black/45' : 'text-white/45',
                      ].join(' ')}
                    >
                      {plan.setupLabel}
                    </span>
                  </div>
                </div>

                <div
                  className={[
                    'flex items-center gap-3 rounded-2xl px-4 py-3',
                    plan.featured ? 'bg-black/[0.04]' : 'border border-white/10 bg-white/[0.03]',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'text-[10px] tracking-[2px] uppercase',
                      plan.featured ? 'text-black/40' : 'text-white/40',
                    ].join(' ')}
                  >
                    {plan.setupLabel === 'setup' ? 'Mensalidade' : 'Manutenção'}
                  </span>
                  <span
                    className={[
                      'ml-auto font-heading text-2xl font-extrabold tracking-[-1px]',
                      plan.featured ? 'text-black' : 'text-white',
                    ].join(' ')}
                  >
                    R$ {plan.monthlyPrice}
                    <span
                      className={[
                        'text-sm font-sans font-medium',
                        plan.featured ? 'text-black/45' : 'text-white/45',
                      ].join(' ')}
                    >
                      /mês
                    </span>
                  </span>
                </div>
              </div>

              <div
                className={[
                  'mb-7 h-px',
                  plan.featured ? 'bg-black/10' : 'bg-white/10',
                ].join(' ')}
              />

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[14px] leading-snug">
                    <span
                      className={[
                        'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                        plan.featured ? 'bg-black text-white' : 'bg-white/10 text-white',
                      ].join(' ')}
                    >
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className={plan.featured ? 'text-black/75' : 'text-white/80'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <WhatsAppButton
                  variant={plan.featured ? 'primary' : 'secondary'}
                  className={[
                    'w-full justify-center py-4 transition-transform duration-300 group-hover:scale-[1.02]',
                    plan.featured ? '' : 'border-white/30 text-white hover:bg-white hover:text-black',
                  ].join(' ')}
                  message={plan.message}
                >
                  {plan.name === 'Sistema de Gestão' ? 'Começar agora' : plan.cta}
                </WhatsAppButton>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 space-y-3 text-center">
          <p className="text-[11px] tracking-[2.5px] uppercase text-white/35">
            Sem fidelidade • Suporte incluso • Cancelamento simples
          </p>
          <p className="text-xs text-white/25">
            *Valor promocional do plano Site Essencial. Consulte condições.
          </p>
        </div>
      </div>
    </section>
  )
}