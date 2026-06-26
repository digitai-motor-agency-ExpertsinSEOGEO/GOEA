'use client'

// Sección de industrias con mapa mundial SVG y puntos pulsantes dorados
import { motion, useReducedMotion } from 'framer-motion'
import { Zap, Mountain, Droplets, Briefcase, Star, Building } from 'lucide-react'
import Reveal from './Reveal'

const industries = [
  { icon: Zap, label: 'Energy' },
  { icon: Mountain, label: 'Mining' },
  { icon: Droplets, label: 'Oil & Gas' },
  { icon: Briefcase, label: 'Corporate Executives' },
  { icon: Star, label: 'High-Net-Worth Individuals' },
  { icon: Building, label: 'Critical Infrastructure' },
]

// Coordenadas relativas de los puntos en el mapa (% del SVG viewBox)
const mapDots = [
  { x: 270, y: 180, label: 'New York' },
  { x: 220, y: 195, label: 'Mexico City' },
  { x: 310, y: 250, label: 'Bogotá' },
  { x: 320, y: 310, label: 'Buenos Aires' },
  { x: 480, y: 160, label: 'London' },
  { x: 510, y: 155, label: 'Frankfurt' },
  { x: 560, y: 190, label: 'Dubai' },
  { x: 640, y: 200, label: 'Mumbai' },
  { x: 740, y: 200, label: 'Singapore' },
]

export default function IndustriesServed() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      className="py-24 md:py-32 relative"
      style={{ backgroundColor: '#15181E' }}
    >
      {/* Línea decorativa superior */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(200,163,73,0.4), transparent)' }}
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
              Operational Reach
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
              Industries &amp; Regions Served
            </h2>
          </div>
        </Reveal>

        {/* Mapa mundial SVG simplificado con puntos de presencia */}
        <Reveal delay={0.1}>
          <div className="relative w-full mb-16" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
            <svg
              viewBox="0 0 800 400"
              className="w-full h-auto"
              aria-label="World map showing GOEA operational locations"
            >
              {/* Contorno simplificado de continentes — solo stroke, sin fill */}
              {/* América del Norte */}
              <path
                d="M 160 100 L 200 80 L 260 85 L 300 100 L 310 130 L 290 160 L 270 200 L 240 220 L 220 200 L 200 180 L 180 160 L 165 140 Z"
                stroke="rgba(200, 163, 73, 0.2)"
                strokeWidth="1"
                fill="rgba(62, 74, 63, 0.08)"
              />
              {/* América del Sur */}
              <path
                d="M 240 225 L 280 220 L 320 230 L 340 270 L 350 320 L 330 360 L 300 370 L 270 355 L 250 330 L 245 290 L 238 260 Z"
                stroke="rgba(200, 163, 73, 0.2)"
                strokeWidth="1"
                fill="rgba(62, 74, 63, 0.08)"
              />
              {/* Europa */}
              <path
                d="M 460 90 L 510 80 L 550 90 L 560 110 L 540 130 L 510 140 L 480 130 L 460 115 Z"
                stroke="rgba(200, 163, 73, 0.2)"
                strokeWidth="1"
                fill="rgba(62, 74, 63, 0.08)"
              />
              {/* África */}
              <path
                d="M 470 145 L 540 140 L 570 160 L 575 210 L 560 270 L 530 310 L 500 320 L 470 300 L 455 260 L 450 200 L 460 165 Z"
                stroke="rgba(200, 163, 73, 0.2)"
                strokeWidth="1"
                fill="rgba(62, 74, 63, 0.08)"
              />
              {/* Asia / Medio Oriente */}
              <path
                d="M 555 90 L 660 80 L 760 90 L 790 130 L 780 170 L 740 190 L 680 210 L 620 205 L 570 190 L 555 160 L 550 130 Z"
                stroke="rgba(200, 163, 73, 0.2)"
                strokeWidth="1"
                fill="rgba(62, 74, 63, 0.08)"
              />
              {/* Oceanía */}
              <path
                d="M 720 270 L 770 260 L 790 280 L 780 300 L 750 305 L 720 295 Z"
                stroke="rgba(200, 163, 73, 0.2)"
                strokeWidth="1"
                fill="rgba(62, 74, 63, 0.08)"
              />

              {/* Puntos de presencia operacional */}
              {mapDots.map((dot, i) => (
                <g key={dot.label}>
                  {/* Pulso externo */}
                  <motion.circle
                    cx={dot.x}
                    cy={dot.y}
                    r={8}
                    fill="rgba(200, 163, 73, 0.15)"
                    animate={prefersReducedMotion ? {} : { scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                  />
                  {/* Punto central */}
                  <circle
                    cx={dot.x}
                    cy={dot.y}
                    r={3}
                    fill="#C8A349"
                    opacity={0.9}
                  />
                </g>
              ))}
            </svg>
          </div>
        </Reveal>

        {/* Pills de industrias */}
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            return (
              <Reveal key={industry.label} delay={i * 0.08}>
                <div
                  className="flex items-center gap-3 px-5 py-3 rounded-full"
                  style={{
                    border: '1px solid rgba(200, 163, 73, 0.25)',
                    backgroundColor: 'rgba(62, 74, 63, 0.12)',
                  }}
                >
                  <Icon size={14} style={{ color: '#C8A349' }} />
                  <span
                    className="text-sm font-medium"
                    style={{ color: '#F5F5F3', fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {industry.label}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(200,163,73,0.4), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
