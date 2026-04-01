import { WhatsAppIcon } from './icons'
import { waUrl } from '@/lib/constants'

export default function FloatingWhatsApp() {
  return (
    <a
      href={waUrl('Olá, Manuel! Quero saber mais sobre o adestramento.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_30px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_4px_40px_rgba(37,211,102,0.7)] transition-all duration-300"
      aria-label="Falar com adestrador pelo WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 text-white" />
    </a>
  )
}
