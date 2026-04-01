import { Check } from 'lucide-react'
import { WhatsAppIcon } from './icons'
import { waUrl } from '@/lib/constants'

const plans = [
  {
    name: 'Proteção Controlada',
    badge: 'Recomendado',
    price: '9.000',
    unit: 'MT/mês',
    priceAVista: '25.000 MT à vista',
    description: '3x por semana · 1h por sessão',
    focus: 'Controlo do cão + protecção do dono',
    features: [
      '3 sessões por semana (1h cada)',
      'Controlo total sob comando',
      'Protecção do dono e família',
      'Relatórios detalhados',
      'Suporte prioritário WhatsApp',
    ],
    highlight: true,
    text: 'Olá, Manuel! Quero o plano de Proteção Controlada.',
  },
  {
    name: 'Pacote Completo',
    badge: 'Premium',
    price: '25.000',
    unit: 'MT à vista',
    priceAVista: 'ou valor mensal negociado',
    description: '3x por semana · 1h por dia',
    focus: 'Obediência + Proteção + Passeio + Banho',
    features: [
      '3 sessões por semana (1h cada)',
      'Obediência completa',
      'Protecção controlada',
      'Passeio incluído',
      'Banho domiciliar incluído',
      'Acompanhamento total',
      'Linha directa WhatsApp',
    ],
    highlight: false,
    text: 'Olá, Manuel! Quero o Pacote Completo Premium.',
  },
]

const extras = [
  {
    name: 'Passeio Avulso',
    price: '5.000 MT',
    detail: '3x por semana · 1h por sessão',
    text: 'Olá, Manuel! Quero saber sobre o passeio avulso.',
  },
  {
    name: 'Banho Domiciliar',
    price: '700 MT',
    detail: 'Realizado na sua casa em Maputo',
    text: 'Olá, Manuel! Quero saber sobre o banho domiciliar.',
  },
]

function cn(highlight: boolean, yes: string, no: string) {
  return highlight ? yes : no
}

export default function Pricing() {
  return (
    <section id="precos" className="bg-zinc-950 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#F5C518] font-bold uppercase tracking-widest text-sm mb-4">
            Investimento
          </p>
          <h2 className="section-title mb-4">
            Planos de <span className="text-[#F5C518]">treinamento</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Valores transparentes. Sem surpresas. Avaliação gratuita antes de começar.
          </p>
        </div>

        {/* Main plans */}
        <div className="grid md:grid-cols-2 gap-6 items-start mb-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border transition-all duration-300 ${cn(
                p.highlight,
                'bg-[#F5C518] text-black border-[#F5C518] shadow-[0_0_60px_rgba(245,197,24,0.3)]',
                'bg-zinc-900 border-zinc-800 hover:border-zinc-600'
              )}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest ${cn(
                  p.highlight,
                  'bg-black text-[#F5C518]',
                  'bg-[#F5C518] text-black'
                )}`}>
                  {p.badge}
                </div>
              </div>

              <h3 className={`font-oswald text-2xl font-bold mb-1 ${cn(p.highlight, 'text-black', 'text-white')}`}>
                {p.name}
              </h3>
              <p className={`text-sm mb-1 ${cn(p.highlight, 'text-black/70', 'text-zinc-500')}`}>
                {p.description}
              </p>
              <p className={`text-sm font-semibold mb-6 ${cn(p.highlight, 'text-black/80', 'text-zinc-400')}`}>
                {p.focus}
              </p>

              <div className="mb-2">
                <span className={`font-oswald text-5xl font-bold ${cn(p.highlight, 'text-black', 'text-white')}`}>
                  {p.price}
                </span>
                <span className={`ml-2 text-sm ${cn(p.highlight, 'text-black/70', 'text-zinc-400')}`}>
                  {p.unit}
                </span>
              </div>
              <p className={`text-xs mb-8 ${cn(p.highlight, 'text-black/60', 'text-zinc-600')}`}>
                {p.priceAVista}
              </p>

              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${cn(p.highlight, 'text-black', 'text-[#F5C518]')}`} />
                    <span className={`text-sm ${cn(p.highlight, 'text-black', 'text-zinc-300')}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waUrl(p.text)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold transition-all hover:scale-105 ${cn(
                  p.highlight,
                  'bg-black text-[#F5C518] hover:bg-zinc-900',
                  'bg-[#F5C518] text-black hover:bg-[#D4A017]'
                )}`}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Escolher Plano · Falar no WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Extras */}
        <div className="border border-zinc-800 rounded-2xl p-6">
          <p className="text-[#F5C518] font-bold uppercase tracking-widest text-xs mb-4">
            Extras opcionais
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {extras.map((e) => (
              <div key={e.name} className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-white">{e.name}</p>
                  <p className="text-zinc-500 text-xs">{e.detail}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-oswald text-xl font-bold text-[#F5C518]">{e.price}</p>
                  <a
                    href={waUrl(e.text)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-400 hover:text-[#F5C518] transition-colors"
                  >
                    Saber mais →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-zinc-600 text-xs mt-6">
          * Preços podem variar conforme localização e necessidades específicas do cão.
          Entre em contacto para uma avaliação gratuita.
        </p>
      </div>
    </section>
  )
}
