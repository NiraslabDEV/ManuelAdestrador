import { WhatsAppIcon } from './icons'
import { MapPin } from 'lucide-react'
import { WA_BASE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-oswald text-2xl font-bold mb-2">
            Manuel <span className="text-[#F5C518]">Adestrador</span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Adestrador profissional de cães em Maputo com 18 anos de
            experiência. Treinamento de obediência, protecção controlada e
            cuidados domiciliares.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-[#F5C518] uppercase tracking-widest text-xs">
            Serviços
          </h4>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li>Obediência Completa</li>
            <li>Protecção Controlada</li>
            <li>Passeio + Energia</li>
            <li>Banho Domiciliar</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-[#F5C518] uppercase tracking-widest text-xs">
            Contacto
          </h4>
          <div className="space-y-3">
            <a
              href={WA_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-[#F5C518] transition-colors text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              +258 87 603 7823
            </a>
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <MapPin className="w-4 h-4" />
              Maputo, Moçambique
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-zinc-800 text-center text-zinc-600 text-xs">
        © {new Date().getFullYear()} Manuel Adestrador · Maputo, Moçambique ·
        Todos os direitos reservados
      </div>
    </footer>
  )
}
