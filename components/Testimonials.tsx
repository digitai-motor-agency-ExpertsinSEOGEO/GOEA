'use client'

// Sección de testimonios — placeholders marcados para reemplazar con testimonios reales
import Image from 'next/image'
import Reveal from './Reveal'
import { Star } from 'lucide-react'

// IMPORTANTE: Todos estos testimonios son placeholders — deben ser reemplazados
// por testimonios reales verificados antes de publicar el sitio.
const testimonials = [
  {
    name: '[ Nombre pendiente ]',
    title: '[ Cargo pendiente ]',
    company: '[ Empresa pendiente ]',
    quote: '[ Insertar testimonio real aquí ]',
    avatarSeed: 'JP',
  },
  {
    name: '[ Nombre pendiente ]',
    title: '[ Cargo pendiente ]',
    company: '[ Empresa pendiente ]',
    quote: '[ Insertar testimonio real aquí ]',
    avatarSeed: 'MR',
  },
  {
    name: '[ Nombre pendiente ]',
    title: '[ Cargo pendiente ]',
    company: '[ Empresa pendiente ]',
    quote: '[ Insertar testimonio real aquí ]',
    avatarSeed: 'AC',
  },
]

// Cinco estrellas doradas
function Stars() {
  return (
    <div className="flex gap-1 mb-4" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} style={{ color: '#C8A349', fill: '#C8A349' }} />
      ))}
    </div>
  )
}

export default function Testimonials() {
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
              Client Confidence
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
              What Clients Say
            </h2>
          </div>
        </Reveal>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className="rounded-xl p-8 flex flex-col h-full"
                style={{
                  backgroundColor: 'rgba(21, 24, 30, 0.5)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <Stars />

                {/* Cita */}
                <blockquote
                  className="font-light leading-relaxed flex-1 mb-6"
                  style={{
                    color: '#8A9099',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Aviso de placeholder */}
                <p
                  className="text-xs mb-6 px-3 py-2 rounded"
                  style={{
                    color: '#5A6B4D',
                    fontFamily: 'var(--font-inter), sans-serif',
                    backgroundColor: 'rgba(62, 74, 63, 0.2)',
                    border: '1px dashed rgba(90, 107, 77, 0.4)',
                  }}
                >
                  [ Reemplazar por testimonio real verificado ]
                </p>

                {/* Perfil del cliente */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={`https://ui-avatars.com/api/?name=${testimonial.avatarSeed}&background=3E4A3F&color=C8A349&size=40&bold=true`}
                      alt={`${testimonial.name} avatar`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p
                      className="font-medium text-sm"
                      style={{ color: '#F5F5F3', fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {testimonial.title}
                      {testimonial.company !== '[ Empresa pendiente ]' && `, ${testimonial.company}`}
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
