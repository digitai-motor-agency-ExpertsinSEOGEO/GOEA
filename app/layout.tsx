import type { Metadata } from 'next'
import { Archivo, Inter } from 'next/font/google'
import './globals.css'

// Fuente de títulos — arquitectural y poderosa
const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

// Fuente de cuerpo — legible y refinada
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GOEA | Executive Protection & Security',
  description:
    'Grupo Operaciones Especiales Argentina — Elite executive protection, corporate security, risk assessment, and tactical consulting across Latin America and globally.',
  keywords: [
    'executive protection',
    'corporate security',
    'risk assessment',
    'tactical consulting',
    'security training',
    'Argentina',
    'Latin America',
  ],
  openGraph: {
    title: 'GOEA | Executive Protection & Security',
    description:
      'Elite executive protection and corporate security services. Discretion. Expertise. Results.',
    type: 'website',
    locale: 'en_US',
  },
}

// Datos estructurados JSON-LD para motores de búsqueda
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SecurityService',
  name: 'GOEA — Grupo Operaciones Especiales Argentina',
  description:
    'Elite executive protection, corporate security, risk assessment, and tactical consulting.',
  url: 'https://goea.com.ar',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contacto@goea.com.ar',
    contactType: 'customer service',
  },
  areaServed: 'Latin America',
  serviceType: [
    'Executive Protection',
    'Corporate Security',
    'Risk Assessment',
    'Tactical Consulting',
    'Professional Training',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  )
}
