'use client'

// Sección About con contadores animados y texto corporativo
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'

// Datos de los contadores estadísticos
const stats = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 12, suffix: '', label: 'Countries Operated' },
  { value: 2400, suffix: '+', label: 'Operations Completed' },
  { value: 100, suffix: '%', label: 'Confidentiality Rate' },
]

interface CounterProps {
  target: number
  suffix: string
  label: string
}

// Contador individual que anima de 0 al valor objetivo
function AnimatedCounter({ target, suffix, label }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!inView) return
    if (prefersReducedMotion) {
      setCount(target)
      return
    }

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), target)
      setCount(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, target, prefersReducedMotion])

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6">
      <span
        className="font-black mb-2"
        style={{
          fontFamily: 'var(--font-archivo), sans-serif',
          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
          color: '#C8A349',
          lineHeight: '1',
        }}
      >
        {count.toLocaleString()}{suffix}
      </span>
      <span
        className="text-xs font-medium tracking-widest uppercase"
        style={{
          color: '#8A9099',
          fontFamily: 'var(--font-inter), sans-serif',
          letterSpacing: '0.15em',
        }}
      >
        {label}
      </span>
    </div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 diagonal-lines"
      style={{ backgroundColor: '#15181E' }}
    >
      {/* Línea decorativa superior */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(200,163,73,0.4), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Columna izquierda: Texto ── */}
          <div>
            <Reveal>
              <p
                className="text-xs font-medium tracking-widest uppercase mb-4"
                style={{ color: '#C8A349', letterSpacing: '0.25em', fontFamily: 'var(--font-inter), sans-serif' }}
              >
                About GOEA
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="font-black uppercase mb-8"
                style={{
                  fontFamily: 'var(--font-archivo), sans-serif',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  color: '#F5F5F3',
                  lineHeight: '1.1',
                  letterSpacing: '-0.01em',
                }}
              >
                Elite Protection.
                <br />
                <span style={{ color: '#C8A349' }}>Global Reach.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="font-light mb-5 leading-relaxed"
                style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif', fontSize: '1rem' }}
              >
                Founded by veterans of Argentine and international special operations units, GOEA
                has provided discreet, high-stakes protection and security consulting for over
                15 years. Our operational culture is built on three non-negotiable values:
                precision, confidentiality, and results.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p
                className="font-light mb-5 leading-relaxed"
                style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif', fontSize: '1rem' }}
              >
                From executive protection in Buenos Aires to risk management operations across
                Latin America, the Middle East, and Europe, our teams operate seamlessly in
                high-pressure environments. We have protected heads of state, Fortune 500
                executives, and high-net-worth families across 12 countries.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p
                className="font-light leading-relaxed"
                style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif', fontSize: '1rem' }}
              >
                Discretion is not a service feature — it is our operational standard. Every
                engagement is treated with the absolute confidentiality our clients require
                and deserve. GOEA is not a security firm. It is a trusted partner.
              </p>
            </Reveal>
          </div>

          {/* ── Columna derecha: Contadores 2×2 ── */}
          <div>
            <div
              className="grid grid-cols-2 gap-0"
              style={{ border: '1px solid rgba(200,163,73,0.15)' }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    borderRight: i % 2 === 0 ? '1px solid rgba(200,163,73,0.15)' : undefined,
                    borderBottom: i < 2 ? '1px solid rgba(200,163,73,0.15)' : undefined,
                  }}
                >
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </div>
              ))}
            </div>
          </div>
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
