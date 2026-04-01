'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Quanto custa o adestramento de cães em Maputo?',
    a: 'Os planos começam a partir de 1.500 MT por mês, dependendo da frequência e tipo de treino. Oferecemos uma avaliação gratuita para recomendar o plano ideal para o seu cão.',
  },
  {
    q: 'Quanto tempo leva para um cão obedecer?',
    a: 'A maioria dos cães mostra progresso claro nas primeiras 2 a 4 semanas. O treinamento completo pode levar de 1 a 3 meses, dependendo da raça, idade e comportamento do animal.',
  },
  {
    q: 'O treino funciona para qualquer raça?',
    a: 'Sim. Manuel tem experiência com todas as raças — desde labradores e pastores alemães a rotweilers e pit bulls. O método é adaptado a cada animal individualmente.',
  },
  {
    q: 'O adestramento é feito em casa ou num centro de treino?',
    a: 'Trabalhamos directamente na sua casa em Maputo, o que torna o treino muito mais eficaz. O cão aprende no seu ambiente natural, com os donos presentes.',
  },
  {
    q: 'O treinamento de protecção é seguro para a família?',
    a: 'Sim. O treino de protecção controlada ensina o cão a responder apenas a comandos específicos. É feito de forma gradual e segura, garantindo que o cão é amigável com a família mas eficaz na protecção.',
  },
  {
    q: 'Como posso agendar uma avaliação gratuita?',
    a: 'Basta clicar em qualquer botão do WhatsApp nesta página. Manuel responde em menos de 30 minutos e agenda a visita inicial gratuita.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-zinc-800 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900 transition-colors"
      >
        <span className="font-bold text-lg pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#F5C518] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 text-zinc-400 leading-relaxed">{a}</div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-zinc-950 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#F5C518] font-bold uppercase tracking-widest text-sm mb-4">
            Dúvidas frequentes
          </p>
          <h2 className="section-title mb-4">
            Perguntas <span className="text-[#F5C518]">frequentes</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
