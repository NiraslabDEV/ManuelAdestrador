import { Check } from 'lucide-react'
import { WhatsAppIcon } from './icons'
import { waUrl } from '@/lib/constants'

const plans = [
  {
    name: 'Básico',
    price: '1.500',
    unit: 'MT/mês',
    description: 'Ideal para começar',
    features: [
      '4 sessões por mês',
      'Obediência básica',
      'Relatório de progresso',
      'Suporte via WhatsApp',
    ],
    highlight: false,
    text: 'Olá, Manuel! Quero o plano Básico.',
  },
  {
    name: 'Profissional',
    price: '2.800',
    unit: 'MT/mês',
    description: 'Mais popular · Melhor custo-benefício',
    features: [
      '8 sessões por mês',
      'Obediência completa',
      'Treino de protecção',
      'Passeio semanal',
      'Relatório detalhado',
      'Suporte prioritário',
    ],
    highlight: true,
    text: 'Olá, Manuel! Quero o plano Profissional.',
  },
  {
    name: 'Premium',
    price: '4.500',
    unit: 'MT/mês',
    description: 'Máximo resultado',
    features: [
      'Sessões ilimitadas',
      'Obediência + protecção',
      'Passeios diários',
      'Banho domiciliar incluso',
      'Acompanhamento total',
      'Linha directa 24/7',
    ],
    highlight: false,
    text: 'Olá, Manuel! Quero o plano Premium.',
  },
]

function cn(highlight: boolean, yes: string, no: string) {
  return highlight ? yes : no
}

export default function Pricing() {
  return (
    <section id="precos" className="bg-zinc-950 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#F5C518] font-bold uppercase tracking-widest text-sm mb-4">
            Investimento
          </p>
          <h2 className="section-title mb-4">
            Planos de <span className="text-[#F5C518]">treinamento</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Valores transparentes. Sem surpresas. Consulte disponibilidade
            para a sua área em Maputo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border transition-all duration-300 ${cn(
                p.highlight,
                'bg-[#F5C518] text-black border-[#F5C518] scale-105 shadow-[0_0_60px_rgba(245,197,24,0.3)]',
                'bg-zinc-900 border-zinc-800 hover:border-zinc-600'
              )}`}
            >
              {p.highlight && (
                <div className="bg-black text-[#F5C518] text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block uppercase tracking-widest">
                  Recomendado
                </div>
              )}
              <h3 className={`font-oswald text-2xl font-bold mb-1 ${cn(p.highlight, 'text-black', 'text-white')}`}>
                {p.name}
              </h3>
              <p className={`text-sm mb-6 ${cn(p.highlight, 'text-black/70', 'text-zinc-500')}`}>
                {p.description}
              </p>
              <div className="mb-8">
                <span className={`font-oswald text-5xl font-bold ${cn(p.highlight, 'text-black', 'text-white')}`}>
                  {p.price}
                </span>
                <span className={`ml-2 text-sm ${cn(p.highlight, 'text-black/70', 'text-zinc-400')}`}>
                  {p.unit}
                </span>
              </div>

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
                Escolher plano
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-500 text-sm mt-8">
          * Preços podem variar conforme localização e necessidades específicas do cão.
          Entre em contacto para uma avaliação gratuita.
        </p>
      </div>
    </section>
  )
}
