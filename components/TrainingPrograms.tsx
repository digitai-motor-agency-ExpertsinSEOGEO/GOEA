'use client'

// Sección de programas de entrenamiento con 3 cards diferenciadas
import { useState } from 'react'
import Image from 'next/image'
import Reveal from './Reveal'

const programs = [
  {
    level: 'Level 01',
    title: 'Foundation',
    duration: '4 Weeks',
    description:
      'Core security principles, situational awareness, threat identification, first aid, and operational protocols for security professionals entering the field.',
    image: 'https://images.pexels.com/photos/4621485/pexels-photo-4621485.jpeg',
    accentFrom: '#3E4A3F',
    accentTo: '#2A3529',
    features: ['Threat Awareness', 'First Aid & Trauma', 'Operational Protocols'],
  },
  {
    level: 'Level 02',
    title: 'Advanced',
    duration: '8 Weeks',
    description:
      'Close protection techniques, evasive driving, counter-surveillance, crisis response, and advanced tactical operations for experienced security personnel.',
    image: 'https://images.pexels.com/photos/8369520/pexels-photo-8369520.jpeg',
    accentFrom: '#5A6B4D',
    accentTo: '#3E4A3F',
    features: ['Close Protection', 'Evasive Driving', 'Counter-Surveillance'],
  },
  {
    level: 'Corporate',
    title: 'Program',
    duration: 'Custom',
    description:
      'Tailored training programs designed specifically for corporate security teams. Curriculum and duration adapted to your organization\'s specific risk profile and requirements.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    accentFrom: '#C8A349',
    accentTo: '#9A7A35',
    features: ['Custom Curriculum', 'On-Site Training', 'Team Certification'],
  },
]

export default function TrainingPrograms() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section
      id="training"
      className="py-24 md:py-32"
      style={{ backgroundColor: '#15181E' }}
    >
      {/* Línea decorativa superior */}
      <div
        className="absolute left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(200,163,73,0.4), transparent)',
          position: 'static',
          marginBottom: '0',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <Reveal>
          <div className="text-center mb-16">
            <p
              className="text-xs font-medium tracking-widest uppercase mb-4"
              style={{ color: '#C8A349', letterSpacing: '0.25em', fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Professional Development
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
              Training Programs
            </h2>
          </div>
        </Reveal>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, i) => {
            const isHovered = hoveredCard === i
            return (
              <Reveal key={program.title} delay={i * 0.12}>
                <div
                  className="rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 cursor-default"
                  style={{
                    border: isHovered
                      ? '1px solid rgba(200, 163, 73, 0.4)'
                      : '1px solid rgba(200, 163, 73, 0.1)',
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                    boxShadow: isHovered ? '0 20px 60px rgba(0,0,0,0.4)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Header con gradiente y nivel */}
                  <div
                    className="relative px-6 pt-6 pb-4"
                    style={{
                      background: `linear-gradient(135deg, ${program.accentFrom}, ${program.accentTo})`,
                    }}
                  >
                    <span
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{
                        color: i === 2 ? '#0F1115' : '#C8A349',
                        fontFamily: 'var(--font-inter), sans-serif',
                        letterSpacing: '0.2em',
                      }}
                    >
                      {program.level}
                    </span>
                    <h3
                      className="font-black uppercase mt-1"
                      style={{
                        fontFamily: 'var(--font-archivo), sans-serif',
                        fontSize: '1.5rem',
                        color: i === 2 ? '#0F1115' : '#F5F5F3',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {program.title}
                    </h3>
                  </div>

                  {/* Imagen */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={`${program.level} — ${program.title} training program`}
                      fill
                      className="object-cover transition-transform duration-500"
                      style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(15,17,21,0.8) 100%)' }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Contenido */}
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
                      {program.description}
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

                    {/* Link */}
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer group"
                      style={{ color: '#C8A349', fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      <span>Learn More</span>
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
