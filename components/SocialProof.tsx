import Image from 'next/image'

const stats = [
  { value: '18+', label: 'Anos de Experiência' },
  { value: '500+', label: 'Cães Transformados' },
  { value: '100%', label: 'Dedicação ao Resultado' },
  { value: '4.9★', label: 'Avaliação dos Clientes' },
]

export default function SocialProof() {
  return (
    <section className="bg-zinc-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center border border-zinc-800 rounded-2xl p-6 hover:border-[#F5C518] transition-colors"
            >
              <div className="font-oswald text-4xl md:text-5xl font-bold text-[#F5C518] mb-2">
                {s.value}
              </div>
              <div className="text-zinc-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Proof text */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#F5C518] font-bold uppercase tracking-widest text-sm mb-4">
              Confiança comprovada
            </p>
            <h2 className="section-title mb-6">
              Mais de 18 anos <br />
              <span className="text-[#F5C518]">transformando cães</span>
              <br /> em Maputo
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Clientes que incluem diplomatas, famílias e profissionais
              exigentes que confiam no trabalho de Manuel para ter um cão
              equilibrado, obediente e seguro.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              O treinamento profissional de cães em Maputo que realmente
              funciona — sem truques, sem métodos violentos, apenas
              técnica e consistência.
            </p>
          </div>

          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&q=80"
              alt="Adestramento profissional de cões em Maputo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-[#F5C518] text-black font-bold px-4 py-2 rounded-full text-sm">
              Manuel Adestrador · Maputo
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
