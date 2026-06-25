import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import BrandMark from './BrandMark'
import WhatsAppButton from './WhatsAppButton'

const navLinks = [
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Preços', href: '#precos' },
  { label: 'FAQ', href: '#faq' },
]

const HEADER_OFFSET = 140

const handleNavClick = (href: string, onDone?: () => void) => {
  onDone?.()
  const element = document.querySelector(href)
  if (element) {
    const bodyRect = document.body.getBoundingClientRect().top
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition - bodyRect - HEADER_OFFSET
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_1px_24px_-4px_rgba(0,0,0,0.06)]'
          : 'bg-white/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div
          className={`grid grid-cols-[auto_1fr_auto] md:grid-cols-3 items-center transition-all duration-500 ${
            scrolled ? 'h-20' : 'h-36'
          }`}
        >
          {/* Brand */}
          <BrandMark
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="justify-self-start"
            logoSize={scrolled ? 'h-12' : 'h-28'}
          />

          {/* Desktop Navigation — truly centered */}
          <nav className="hidden md:flex items-center justify-center gap-1" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="nav-link relative px-4 py-2 text-[11px] font-medium tracking-[2.5px] uppercase text-black/55 hover:text-black"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center justify-end">
            <WhatsAppButton variant="secondary" className="!px-5 !py-2.5 !text-[11px] !tracking-[2px]">
              FALAR NO WHATSAPP
            </WhatsAppButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden justify-self-end p-2.5 -mr-1 rounded-full text-black/70 hover:text-black hover:bg-black/[0.04] transition-colors"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-black/[0.06] bg-white/95 backdrop-blur-xl"
          >
            <nav className="px-5 sm:px-6 py-6 flex flex-col gap-1" aria-label="Navegação mobile">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href, () => setIsOpen(false))}
                  className="text-left py-3.5 px-2 text-[13px] font-medium tracking-[2px] uppercase text-black/70 hover:text-black border-b border-black/[0.05] last:border-0 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="pt-4"
              >
                <WhatsAppButton className="w-full !py-3.5 !text-[11px]">
                  FALAR NO WHATSAPP
                </WhatsAppButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}