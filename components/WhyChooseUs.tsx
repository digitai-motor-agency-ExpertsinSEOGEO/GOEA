'use client'

// Sección "Por qué elegirnos" — foto real del equipo + checklist animado
import Image from 'next/image'
import Reveal from './Reveal'
import { useLanguage } from '@/contexts/LanguageContext'

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
  const { t } = useLanguage()

  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: '#0F1115' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Columna izquierda: Video local como fondo ── */}
          <Reveal>
            <div
              className="relative aspect-[4/5] rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(200, 163, 73, 0.15)' }}
            >
              {/* Foto real del equipo */}
              <Image
                src="/images/why-choose-us.jpg"
                alt="GOEA team — elite security professionals"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Overlay oscuro para legibilidad */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(15,17,21,0.85) 0%, rgba(15,17,21,0.3) 60%, transparent 100%)',
                }}
                aria-hidden="true"
              />

              {/* Grilla táctica decorativa */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(200,163,73,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,163,73,0.4) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
                aria-hidden="true"
              />

              {/* Badge de experiencia */}
              <div
                className="absolute bottom-6 left-6 px-5 py-4"
                style={{
                  backgroundColor: 'rgba(15, 17, 21, 0.88)',
                  backdropFilter: 'blur(12px)',
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
                  {t.why.badgeLabel}
                </span>
              </div>

              {/* Logo marca de agua */}
              <div className="absolute top-6 right-6">
                <span
                  className="font-black text-2xl tracking-widest select-none"
                  style={{
                    color: 'rgba(200,163,73,0.15)',
                    fontFamily: 'var(--font-archivo), sans-serif',
                    letterSpacing: '0.2em',
                  }}
                  aria-hidden="true"
                >
                  GOEA
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
                {t.why.label}
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
                {t.why.headline}
                <br />
                <span style={{ color: '#C8A349' }}>{t.why.headlineAccent}</span>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-6">
              {t.why.reasons.map((reason, i) => (
                <Reveal key={i} delay={0.2 + i * 0.1}>
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

            <Reveal delay={0.8}>
              <div className="mt-10">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase cursor-pointer group"
                  style={{ color: '#C8A349', fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.12em' }}
                >
                  <span>{t.why.cta}</span>
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
