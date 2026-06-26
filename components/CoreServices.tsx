'use client'

// Sección de servicios principales con 6 cards glassmorphism
import { useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Shield, Eye, Search, Target, GraduationCap, Map } from 'lucide-react'
import Reveal from './Reveal'

const services = [
  {
    icon: Shield,
    title: 'Executive Protection',
    description: 'Tailored close protection for executives, VIPs, and high-risk environments.',
  },
  {
    icon: Eye,
    title: 'Corporate Security',
    description: 'Comprehensive security audits and implementation for corporate facilities.',
  },
  {
    icon: Search,
    title: 'Risk Assessment',
    description: 'Intelligence-led threat analysis and vulnerability mapping.',
  },
  {
    icon: Target,
    title: 'Tactical Consulting',
    description: 'Strategic guidance from seasoned field operatives.',
  },
  {
    icon: GraduationCap,
    title: 'Professional Training',
    description: 'Elite training programs for security professionals.',
  },
  {
    icon: Map,
    title: 'Security Planning',
    description: 'End-to-end operational security planning and management.',
  },
]

// Variantes para el stagger de las cards
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function CoreServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{ backgroundColor: '#0F1115' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <Reveal>
          <div className="text-center mb-16">
            <p
              className="text-xs font-medium tracking-widest uppercase mb-4"
              style={{ color: '#C8A349', letterSpacing: '0.25em', fontFamily: 'var(--font-inter), sans-serif' }}
            >
              What We Do
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
              Core Services
            </h2>
          </div>
        </Reveal>

        {/* Grid de servicios con stagger */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-64px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={service.title}
                variants={prefersReducedMotion ? undefined : cardVariants}
                className="relative p-8 rounded-xl cursor-default transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(21, 24, 30, 0.5)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: isHovered
                    ? '1px solid rgba(200, 163, 73, 0.5)'
                    : '1px solid rgba(200, 163, 73, 0.1)',
                  boxShadow: isHovered
                    ? '0 20px 60px rgba(200, 163, 73, 0.1), 0 0 0 1px rgba(200, 163, 73, 0.15)'
                    : 'none',
                  transform: isHovered && !prefersReducedMotion ? 'translateY(-4px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icono */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300"
                  style={{
                    backgroundColor: isHovered
                      ? 'rgba(200, 163, 73, 0.15)'
                      : 'rgba(62, 74, 63, 0.4)',
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: isHovered ? '#C8A349' : '#5A6B4D' }}
                  />
                </div>

                {/* Título */}
                <h3
                  className="font-bold mb-3"
                  style={{
                    fontFamily: 'var(--font-archivo), sans-serif',
                    fontSize: '1.1rem',
                    color: '#F5F5F3',
                    letterSpacing: '0.02em',
                  }}
                >
                  {service.title}
                </h3>

                {/* Descripción */}
                <p
                  className="font-light leading-relaxed"
                  style={{
                    color: '#8A9099',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.9rem',
                  }}
                >
                  {service.description}
                </p>

                {/* Línea accent inferior al hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px transition-all duration-300"
                  style={{
                    background: isHovered
                      ? 'linear-gradient(to right, transparent, rgba(200,163,73,0.6), transparent)'
                      : 'transparent',
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
