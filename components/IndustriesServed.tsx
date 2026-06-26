'use client'

// Sección de industrias con mapa de puntos geográficos real y pills animadas
import { motion, useReducedMotion } from 'framer-motion'
import { Zap, Mountain, Droplets, Briefcase, Star, Building } from 'lucide-react'
import Reveal from './Reveal'
import { useLanguage } from '@/contexts/LanguageContext'

const industryIcons = [Zap, Mountain, Droplets, Briefcase, Star, Building]

// Puntos operacionales — ciudades clave con presencia GOEA
const operationalDots = [
  { x: 213, y: 122, label: 'Miami' },
  { x: 271, y: 251, label: 'Buenos Aires' },
  { x: 253, y: 178, label: 'Bogotá' },
  { x: 400, y: 89,  label: 'London' },
  { x: 422, y: 86,  label: 'Frankfurt' },
  { x: 518, y: 129, label: 'Dubai' },
  { x: 560, y: 149, label: 'Mumbai' },
  { x: 644, y: 189, label: 'Singapore' },
  { x: 702, y: 120, label: 'Tokyo' },
]

// Puntos de tierra para el mapa de puntos — posiciones geográficas reales
// Proyección equirectangular: x = (lon+180)*(800/360), y = (90-lat)*(400/180)
const landDots: [number, number][] = [
  // América del Norte
  [33,56],[56,56],[78,56],[111,60],[127,84],[136,120],[149,84],[156,56],
  [156,138],[158,98],[180,82],[180,131],[180,158],[189,78],[193,107],
  [200,116],[200,133],[202,156],[204,49],[211,86],[213,129],[216,98],
  [216,109],[220,138],[240,86],[240,107],[256,262],[260,98],
  // América del Sur
  [227,204],[227,218],[231,191],[240,222],[240,300],[242,273],[247,318],
  [253,178],[253,238],[256,278],[271,251],[273,191],[278,200],[282,233],
  [289,211],[296,251],[304,251],
  // Europa
  [369,169],[373,160],[380,113],[382,82],[391,111],[396,84],[404,96],
  [418,62],[422,86],[427,104],[440,67],[444,84],[449,116],[456,56],
  [456,100],[458,56],[467,140],[471,89],
  // África
  [389,124],[396,162],[407,138],[418,162],[418,178],[427,189],[431,140],
  [431,142],[440,167],[440,227],[440,249],[440,267],[453,209],[462,200],
  [462,231],[462,267],[467,140],[467,244],[469,167],[476,213],[476,240],
  [489,180],[498,127],[498,184],[502,242],
  // Asia y Medio Oriente
  [478,113],[484,122],[489,127],[498,107],[502,147],[504,167],[518,129],
  [527,153],[533,73],[542,109],[547,124],[551,93],[551,133],[560,149],
  [573,171],[578,71],[589,147],[600,67],[600,147],[613,153],[622,67],
  [624,164],[627,138],[631,98],[640,164],[640,204],[644,189],[651,127],
  [662,107],[669,133],[671,173],[684,118],[702,120],[702,218],[711,67],
  [720,244],[731,271],[756,78],
  // Australia y Oceanía
  [671,262],[693,244],[700,267],[720,244],[720,284],[787,282],[778,298],
]

export default function IndustriesServed() {
  const prefersReducedMotion = useReducedMotion()
  const { t } = useLanguage()

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
              {t.industries.label}
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
              {t.industries.headline}
            </h2>
          </div>
        </Reveal>

        {/* Mapa mundial — video real con puntos operacionales superpuestos */}
        <Reveal delay={0.15}>
          <div
            className="relative w-full mb-16 mx-auto overflow-hidden rounded-xl"
            style={{ maxWidth: '900px', border: '1px solid rgba(200,163,73,0.15)' }}
          >
            {/* Video mapamundi como fondo */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto block"
              aria-hidden="true"
            >
              <source src="/video/mapamundi.mp4" type="video/mp4" />
            </video>

            {/* Overlay oscuro para integrar con la paleta */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, rgba(15,17,21,0.55) 0%, rgba(15,17,21,0.35) 50%, rgba(15,17,21,0.65) 100%)' }}
              aria-hidden="true"
            />

            {/* SVG de puntos operacionales superpuesto — mismo viewBox que el mapa */}
            <svg
              viewBox="0 0 800 400"
              className="absolute inset-0 w-full h-full"
              aria-label="Mapa mundial con presencia operacional de GOEA"
            >
              {/* Puntos de tierra tenues para reforzar la forma de los continentes */}
              {landDots.map(([x, y], i) => (
                <circle
                  key={`land-${i}`}
                  cx={x}
                  cy={y}
                  r={2}
                  fill="rgba(200, 163, 73, 0.22)"
                />
              ))}

              {/* Puntos operacionales con pulso dorado */}
              {operationalDots.map((dot, i) => (
                <g key={dot.label}>
                  <motion.circle
                    cx={dot.x}
                    cy={dot.y}
                    r={8}
                    fill="none"
                    stroke="rgba(200, 163, 73, 0.4)"
                    strokeWidth="1"
                    animate={prefersReducedMotion ? {} : { scale: [1, 2.2, 1], opacity: [0.9, 0, 0.9] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.28, ease: 'easeOut' }}
                    style={{ transformOrigin: `${dot.x}px ${dot.y}px` }}
                  />
                  <circle cx={dot.x} cy={dot.y} r={4} fill="#C8A349" />
                  <circle cx={dot.x} cy={dot.y} r={2} fill="#F5F5F3" />
                </g>
              ))}
            </svg>

            {/* Label de presencia activa */}
            <div
              className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded"
              style={{
                backgroundColor: 'rgba(15,17,21,0.75)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(200,163,73,0.2)',
              }}
            >
              <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#C8A349' }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: '#C8A349', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.6rem', letterSpacing: '0.15em' }}
              >
                {t.industries.activePresence}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Pills de industrias */}
        <div className="flex flex-wrap justify-center gap-3">
          {t.industries.items.map((label, i) => {
            const Icon = industryIcons[i]
            return (
              <Reveal key={label} delay={i * 0.08}>
                <div
                  className="flex items-center gap-3 px-5 py-3 rounded-full"
                  style={{
                    border: '1px solid rgba(200, 163, 73, 0.25)',
                    backgroundColor: 'rgba(62, 74, 63, 0.12)',
                  }}
                >
                  <Icon size={13} style={{ color: '#C8A349' }} />
                  <span
                    className="text-sm font-medium"
                    style={{ color: '#F5F5F3', fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {label}
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
