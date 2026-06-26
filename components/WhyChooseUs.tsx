'use client'

// Sección "Por qué elegirnos" con imagen y checklist animado
import Image from 'next/image'
import Reveal from './Reveal'

const reasons = [
  'Highly trained personnel with military and law enforcement backgrounds',
  '15+ years of operational experience across 12 countries',
  'Absolute confidentiality and professional discretion',
  '24/7 rapid response capability',
  'Strategic intelligence-led planning',
]

// Checkmark SVG dorado personalizado
function GoldCheck() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0 mt-0.5"
    >
      <circle cx="11" cy="11" r="10.5" stroke="#C8A349" strokeWidth="1" />
      <path
        d="M 6.5 11 L 9.5 14 L 15.5 8"
        stroke="#C8A349"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function WhyChooseUs() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: '#0F1115' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Columna izquierda: Imagen ── */}
          <Reveal>
            <div
              className="relative aspect-[4/5] rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(200, 163, 73, 0.15)' }}
            >
              <Image
                src="https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg"
                alt="GOEA security operative in professional attire"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay sutil para integrar con la paleta */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(15,17,21,0.6) 0%, transparent 50%)',
                }}
                aria-hidden="true"
              />
              {/* Badge de experiencia */}
              <div
                className="absolute bottom-6 left-6 px-5 py-4"
                style={{
                  backgroundColor: 'rgba(15, 17, 21, 0.9)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(200, 163, 73, 0.3)',
                }}
              >
                <span
                  className="block font-black text-2xl"
                  style={{ color: '#C8A349', fontFamily: 'var(--font-archivo), sans-serif' }}
                >
                  15+
                </span>
                <span
                  className="block text-xs tracking-widest uppercase"
                  style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.15em' }}
                >
                  Years of Excellence
                </span>
              </div>
            </div>
          </Reveal>

          {/* ── Columna derecha: Checklist ── */}
          <div>
            <Reveal>
              <p
                className="text-xs font-medium tracking-widest uppercase mb-4"
                style={{ color: '#C8A349', letterSpacing: '0.25em', fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Why GOEA
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="font-black uppercase mb-10"
                style={{
                  fontFamily: 'var(--font-archivo), sans-serif',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  color: '#F5F5F3',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.1',
                }}
              >
                The Standard
                <br />
                <span style={{ color: '#C8A349' }}>Others Follow.</span>
              </h2>
            </Reveal>

            {/* Lista de razones con stagger */}
            <div className="flex flex-col gap-6">
              {reasons.map((reason, i) => (
                <Reveal key={reason} delay={0.2 + i * 0.1}>
                  <div className="flex items-start gap-4">
                    <GoldCheck />
                    <p
                      className="font-light leading-relaxed pt-0.5"
                      style={{
                        color: '#8A9099',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '0.95rem',
                      }}
                    >
                      {reason}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CTA sutil */}
            <Reveal delay={0.8}>
              <div className="mt-10">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase cursor-pointer group"
                  style={{
                    color: '#C8A349',
                    fontFamily: 'var(--font-inter), sans-serif',
                    letterSpacing: '0.12em',
                  }}
                >
                  <span>Begin the Conversation</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
