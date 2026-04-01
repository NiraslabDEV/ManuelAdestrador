import { ShieldCheck, Wind, Sparkles } from 'lucide-react'
import { WhatsAppIcon } from './icons'
import { waUrl } from '@/lib/constants'

const services = [
  {
    icon: ShieldCheck,
    title: 'Obediência Completa',
    description:
      'Seu cão aprende comandos essenciais: sentar, ficar, vir, largar e caminhar ao lado. Vida diária mais tranquila para toda a família.',
    text: 'Olá, Manuel! Quero saber sobre o treino de obediência.',
  },
  {
    icon: ShieldCheck,
    title: 'Protecção Controlada',
    description:
      'Treinamento especializado para cães de guarda com total controlo do dono. Segurança real, sem agressividade descontrolada.',
    text: 'Olá, Manuel! Quero saber sobre o treino de protecção.',
  },
  {
    icon: Wind,
    title: 'Passeio + Energia',
    description:
      'Passeios estruturados que gastam a energia do seu cão, reduzem a ansiedade e melhoram o comportamento em casa.',
    text: 'Olá, Manuel! Quero saber sobre os passeios.',
  },
  {
    icon: Sparkles,
    title: 'Banho Domiciliar',
    description:
      'Banho profissional realizado na sua casa em Maputo. Praticidade, higiene e cuidado sem stresse para o seu cão.',
    text: 'Olá, Manuel! Quero saber sobre o banho domiciliar.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="bg-black py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#F5C518] font-bold uppercase tracking-widest text-sm mb-4">
            O que oferecemos
          </p>
          <h2 className="section-title mb-4">
            Serviços de <span className="text-[#F5C518]">adestramento</span>
            <br /> em Maputo
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Cada serviço é desenhado para entregar resultados reais,
            adaptados ao seu cão e ao seu estilo de vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card-service group">
              <div className="w-14 h-14 bg-[#F5C518]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F5C518]/20 transition-colors">
                <s.icon className="w-7 h-7 text-[#F5C518]" />
              </div>
              <h3 className="font-oswald text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">{s.description}</p>
              <a
                href={waUrl(s.text)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#F5C518] font-bold hover:gap-3 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Saber mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
