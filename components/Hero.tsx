import Image from 'next/image'
import { WhatsAppIcon } from './icons'
import { waUrl } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80"
          alt="Cão treinado com adestrador profissional em Maputo"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block bg-[#F5C518] text-black text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest animate-pulse">
          Adestrador em Maputo • 18 Anos de Experiência
        </div>

        <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase leading-tight mb-6">
          Transforme o seu cão num{' '}
          <span className="text-[#F5C518]">companheiro exemplar</span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Treinamento profissional de cães em Maputo. Obediência, protecção e
          equilíbrio — resultados reais em semanas.
        </p>

        <a
          href={waUrl('Olá, Manuel! Quero marcar uma avaliação para o meu cão.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp text-xl shadow-lg"
        >
          <WhatsAppIcon className="w-7 h-7" />
          Falar com adestrador em Maputo
        </a>

        <p className="mt-4 text-zinc-400 text-sm">
          Resposta em menos de 30 minutos · Avaliação gratuita
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  )
}
