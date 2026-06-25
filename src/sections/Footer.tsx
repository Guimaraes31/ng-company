import BrandMark from '../components/BrandMark'
import { EMAIL, WHATSAPP_DISPLAY, whatsappUrl } from '../config/contact'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 text-sm">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-y-12">
          {/* Brand + Contact */}
          <div>
            <div className="mb-5">
              <BrandMark logoSize="h-28" />
            </div>
            <div className="text-black/60 max-w-[260px] leading-snug">
              Sites institucionais premium para empresas que querem ser levadas a sério.
            </div>

            <div className="mt-6 text-xs text-black/50 space-y-px">
              <div>{EMAIL}</div>
              <div>{WHATSAPP_DISPLAY}</div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-9 text-sm">
            <div>
              <div className="font-medium tracking-widest text-[10px] mb-4 text-black/50">NAVEGAÇÃO</div>
              <div className="space-y-2 text-black/70">
                <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="block hover:text-black">Portfólio</button>
                <button onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })} className="block hover:text-black">Serviços</button>
                <button onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })} className="block hover:text-black">Preços</button>
              </div>
            </div>

            <div>
              <div className="font-medium tracking-widest text-[10px] mb-4 text-black/50">SERVIÇOS</div>
              <div className="space-y-2 text-black/70">
                <div>Criação de Sites</div>
                <div>Manutenção Mensal</div>
                <div>Ajustes e Evolução</div>
              </div>
            </div>

            <div>
              <div className="font-medium tracking-widest text-[10px] mb-4 text-black/50">CONTATO</div>
              <div className="space-y-2 text-black/70">
                <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="block hover:text-black">WhatsApp</a>
                <a href={`mailto:${EMAIL}`} className="block hover:text-black">E-mail</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col md:flex-row md:items-center gap-y-2 justify-between text-[10px] tracking-[1.5px] text-black/40">
          <div>© {currentYear} NG COMPANY. TODOS OS DIREITOS RESERVADOS.</div>
          <div className="flex gap-x-6">
            <span>TERMOS</span>
            <span>PRIVACIDADE</span>
            <span>POLÍTICA DE COOKIES</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

