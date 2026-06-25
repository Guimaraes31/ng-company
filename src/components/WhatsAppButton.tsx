import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../config/contact'

interface WhatsAppButtonProps {
  message?: string
  children?: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function WhatsAppButton({ 
  message = 'Olá NG COMPANY, gostaria de solicitar um orçamento para um site institucional.', 
  children = 'SOLICITAR ORÇAMENTO',
  className = '',
  variant = 'primary'
}: WhatsAppButtonProps) {
  const openWhatsApp = () => {
    window.open(whatsappUrl(message), '_blank')
  }

  const base = "inline-flex items-center justify-center gap-2.5 font-medium tracking-[1.5px] uppercase transition-all active:scale-[0.985] rounded-full"

  const styles = {
    primary: "bg-black text-white px-9 py-4 text-sm hover:bg-zinc-900",
    secondary: "border-2 border-black px-9 py-4 text-sm hover:bg-black hover:text-white",
    ghost: "text-sm text-black/70 hover:text-black underline-offset-4 hover:underline",
  }

  return (
    <button 
      onClick={openWhatsApp} 
      className={`${base} ${styles[variant]} ${className}`}
    >
      <MessageCircle size={18} />
      {children}
    </button>
  )
}
