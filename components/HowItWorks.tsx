const steps = [
  {
    number: '01',
    title: 'Avaliação Gratuita',
    description:
      'Enviamos mensagem pelo WhatsApp, entendemos o comportamento do seu cão e agendamos a visita inicial em Maputo.',
  },
  {
    number: '02',
    title: 'Plano Personalizado',
    description:
      'Manuel cria um programa de treinamento de cães em Maputo adaptado à raça, idade e comportamento do seu animal.',
  },
  {
    number: '03',
    title: 'Resultado Garantido',
    description:
      'Sessões consistentes com acompanhamento contínuo. Você vê a evolução desde a primeira semana.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-black py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#F5C518] font-bold uppercase tracking-widest text-sm mb-4">
            Processo
          </p>
          <h2 className="section-title mb-4">
            Como <span className="text-[#F5C518]">funciona</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Simples, directo e com resultados reais.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-transparent via-[#F5C518]/40 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.number} className="text-center">
                <div className="w-24 h-24 rounded-full bg-[#F5C518]/10 border-2 border-[#F5C518] flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="font-oswald text-3xl font-bold text-[#F5C518]">
                    {s.number}
                  </span>
                </div>
                <h3 className="font-oswald text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
