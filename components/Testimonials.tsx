'use client'

// Sección de testimonios con clientes reales
import Image from 'next/image'
import Reveal from './Reveal'
import { Star } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

function Stars() {
  return (
    <div className="flex gap-1 mb-5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} style={{ color: '#C8A349', fill: '#C8A349' }} />
      ))}
    </div>
  )
}

// Comillas decorativas SVG
function QuoteIcon() {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      aria-hidden="true"
      className="mb-4 opacity-40"
    >
      <path
        d="M0 24V14.4C0 10.56 0.96 7.28 2.88 4.56C4.88 1.84 7.68 0.16 11.28 0L12 3.12C9.52 3.6 7.6 4.72 6.24 6.48C4.96 8.24 4.32 10.4 4.32 12.96H8.64V24H0ZM19.2 24V14.4C19.2 10.56 20.16 7.28 22.08 4.56C24.08 1.84 26.88 0.16 30.48 0L31.2 3.12C28.72 3.6 26.8 4.72 25.44 6.48C24.16 8.24 23.52 10.4 23.52 12.96H27.84V24H19.2Z"
        fill="#C8A349"
      />
    </svg>
  )
}

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: '#0F1115' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <Reveal>
          <div className="text-center mb-16">
            <p
              className="text-xs font-medium tracking-widest uppercase mb-4"
              style={{ color: '#C8A349', letterSpacing: '0.25em', fontFamily: 'var(--font-inter), sans-serif' }}
            >
              {t.testimonials.label}
            </p>
            <h2
              className="font-black uppercase"
              style={{
                fontFamily: 'var(--font-archivo), sans-serif',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                color: '#F5F5F3',
                letterSpacing: '-0.01em',
              }}
            >
              {t.testimonials.headline}
            </h2>
          </div>
        </Reveal>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <Reveal key={item.seed} delay={i * 0.12}>
              <div
                className="rounded-xl p-8 flex flex-col h-full"
                style={{
                  backgroundColor: 'rgba(21, 24, 30, 0.6)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(200, 163, 73, 0.08)',
                }}
              >
                <Stars />
                <QuoteIcon />

                {/* Cita */}
                <blockquote
                  className="font-light leading-relaxed flex-1 mb-8"
                  style={{
                    color: '#8A9099',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                {/* Separador dorado */}
                <div
                  className="h-px mb-6"
                  style={{ background: 'linear-gradient(to right, rgba(200,163,73,0.3), transparent)' }}
                  aria-hidden="true"
                />

                {/* Perfil del cliente */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                    style={{ border: '1px solid rgba(200,163,73,0.25)' }}
                  >
                    <Image
                      src={`https://ui-avatars.com/api/?name=${item.seed}&background=3E4A3F&color=C8A349&size=40&bold=true`}
                      alt={`${item.name} avatar`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: '#F5F5F3', fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {item.name}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: '#C8A349', fontFamily: 'var(--font-inter), sans-serif', opacity: 0.8 }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
