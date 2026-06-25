export const WHATSAPP_NUMBER = '5511993586438'
export const WHATSAPP_DISPLAY = '+55 11 99358-6438'
export const EMAIL = 'shulmannatanconta@gmail.com'

export const whatsappUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}