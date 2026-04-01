import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { WA_PHONE } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

const TITLE = 'Adestrador de Cães em Maputo | Treinamento Profissional'
const DESCRIPTION =
  'Treinamento de cães em Maputo. Obediência completa, proteção controlada e passeios. 18 anos de experiência com resultados comprovados.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'adestrador de cães Maputo, treinamento de cães Maputo, cachorro obediente Maputo, adestramento Moçambique',
  authors: [{ name: 'Manuel Adestrador' }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://manueladestrador.com',
    siteName: 'Manuel Adestrador',
    locale: 'pt_MZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://manueladestrador.com' },
}

const schemaJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Manuel Adestrador',
  description: DESCRIPTION,
  url: 'https://manueladestrador.com',
  telephone: `+${WA_PHONE}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Maputo',
    addressCountry: 'MZ',
  },
  areaServed: { '@type': 'City', name: 'Maputo' },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '18:00',
    },
  ],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJsonLd }} />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
