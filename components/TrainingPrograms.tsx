'use client'

// Sección de programas de entrenamiento con fotos reales
import { useState } from 'react'
import Image from 'next/image'
import Reveal from './Reveal'
import { useLanguage } from '@/contexts/LanguageContext'

const programMeta = [
  {
    imageSrc: '/images/training-level1.jpg',
    glyph: '01',
    overlayGradient: 'linear-gradient(to top, rgba(15,17,21,0.92) 0%, rgba(15,17,21,0.45) 60%, rgba(15,17,21,0.2) 100%)',
    headerAccent: '#C8A349',
  },
  {
    imageSrc: '/images/helicopter.jpg',
    glyph: '02',
    overlayGradient: 'linear-gradient(to top, rgba(15,17,21,0.92) 0%, rgba(15,17,21,0.45) 60%, rgba(15,17,21,0.2) 100%)',
    headerAccent: '#C8A349',
  },
  {
    imageSrc: '/images/training-corporate.jpg',
    glyph: 'CO',
    overlayGradient: 'linear-gradient(to top, rgba(15,17,21,0.88) 0%, rgba(200,163,73,0.15) 60%, rgba(15,17,21,0.2) 100%)',
    headerAccent: '#C8A349',
  },
]

export default function TrainingPrograms() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <section
      id="training"
      className="py-24 md:py-32"
      style={{ backgroundColor: '#15181E' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <Reveal>
          <div className="text-center mb-16">
            <p
              className="text-xs font-medium tracking-widest uppercase mb-4"
              style={{ color: '#C8A349', letterSpacing: '0.25em', fontFamily: 'var(--font-inter), sans-serif' }}
            >
              {t.training.label}
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
              {t.training.headline}
            </h2>
          </div>
        </Reveal>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.training.programs.map((program, i) => {
            const meta = programMeta[i]
            const isHovered = hoveredCard === i
            return (
              <Reveal key={program.title} delay={i * 0.12}>
                <div
                  className="rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 cursor-default"
                  style={{
                    border: isHovered
                      ? '1px solid rgba(200, 163, 73, 0.45)'
                      : '1px solid rgba(200, 163, 73, 0.1)',
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                    boxShadow: isHovered ? '0 24px 60px rgba(0,0,0,0.45)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Header con foto real */}
                  <div className="relative overflow-hidden" style={{ height: '200px' }}>
                    <Image
                      src={meta.imageSrc}
                      alt={`${program.level} — ${program.title} training`}
                      fill
                      className="object-cover transition-transform duration-500"
                      style={{ transform: isHovered ? 'scale(1.06)' : 'scale(1)' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Overlay degradado */}
                    <div
                      className="absolute inset-0"
                      style={{ background: meta.overlayGradient }}
                      aria-hidden="true"
                    />

                    {/* Grilla táctica decorativa */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(200,163,73,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,163,73,0.3) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                      }}
                      aria-hidden="true"
                    />

                    {/* Número decorativo de fondo */}
                    <span
                      className="absolute bottom-0 right-4 font-black leading-none select-none pointer-events-none"
                      style={{
                        fontFamily: 'var(--font-archivo), sans-serif',
                        fontSize: '7rem',
                        color: 'rgba(200,163,73,0.12)',
                        lineHeight: '0.9',
                      }}
                      aria-hidden="true"
                    >
                      {meta.glyph}
                    </span>

                    {/* Línea dorada inferior */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background: 'linear-gradient(to right, transparent, rgba(200,163,73,0.5), transparent)' }}
                      aria-hidden="true"
                    />

                    {/* Nivel + título sobre la foto */}
                    <div className="absolute bottom-0 left-0 p-5">
                      <span
                        className="text-xs font-bold tracking-widest uppercase block mb-1"
                        style={{
                          color: meta.headerAccent,
                          fontFamily: 'var(--font-inter), sans-serif',
                          letterSpacing: '0.2em',
                        }}
                      >
                        {program.level}
                      </span>
                      <h3
                        className="font-black uppercase"
                        style={{
                          fontFamily: 'var(--font-archivo), sans-serif',
                          fontSize: '1.75rem',
                          color: '#F5F5F3',
                          letterSpacing: '0.02em',
                          lineHeight: '1',
                        }}
                      >
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  {/* Contenido de la card */}
                  <div
                    className="flex flex-col flex-1 p-6"
                    style={{ backgroundColor: '#15181E' }}
                  >
                    {/* Badge de duración */}
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: 'rgba(200, 163, 73, 0.1)',
                          color: '#C8A349',
                          fontFamily: 'var(--font-inter), sans-serif',
                          letterSpacing: '0.1em',
                        }}
                      >
                        {program.duration}
                      </span>
                    </div>

                    {/* Descripción */}
                    <p
                      className="font-light leading-relaxed mb-5 flex-1"
                      style={{
                        color: '#8A9099',
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '0.875rem',
                      }}
                    >
                      {program.desc}
                    </p>

                    {/* Features */}
                    <ul className="flex flex-col gap-2 mb-6">
                      {program.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs"
                          style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif' }}
                        >
                          <span style={{ color: '#C8A349' }}>—</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer group"
                      style={{ color: '#C8A349', fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      <span>{t.training.learnMore}</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
