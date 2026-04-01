import Image from 'next/image'
import { WhatsAppIcon } from './icons'
import { waUrl } from '@/lib/constants'

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
          alt="Cão bem treinado por adestrador profissional em Maputo"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest animate-pulse">
          Vagas limitadas esta semana
        </div>
        <h2 className="section-title mb-6">
          O seu cão merece o{' '}
          <span className="text-[#F5C518]">melhor treino</span> em Maputo
        </h2>
        <p className="text-zinc-300 text-xl mb-10 leading-relaxed">
          Não deixe os problemas de comportamento crescerem. Fale agora com
          um especialista e transforme a vida do seu cão em semanas.
        </p>
        <a
          href={waUrl('Olá, Manuel! Vi o site e quero agendar a avaliação gratuita.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp text-xl"
        >
          <WhatsAppIcon className="w-7 h-7" />
          Falar com adestrador em Maputo
        </a>
        <p className="mt-4 text-zinc-500 text-sm">
          Avaliação 100% gratuita · Sem compromisso
        </p>
      </div>
    </section>
  )
}
