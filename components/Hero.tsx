'use client'

// Hero de pantalla completa con video de fondo y efectos parallax
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Transformación parallax sutil para el contenido
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Split headline on \n for line breaks
  const headlineLines = t.hero.headline.split('\n')

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px', backgroundColor: '#0F1115' }}
    >
      {/* ── Video de fondo ── */}
      {!prefersReducedMotion && mounted && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          <source
            src="/video/hero-desktop.mp4"
            media="(min-width: 768px)"
            type="video/mp4"
          />
          <source src="/video/hero-mobile.mp4" type="video/mp4" />
        </video>
      )}

      {/* Poster estático cuando prefers-reduced-motion está activo */}
      {(prefersReducedMotion || !mounted) && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
      )}

      {/* ── Gradiente de overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(15,17,21,0.95) 0%, rgba(15,17,21,0.7) 50%, rgba(15,17,21,0.4) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Grilla táctica sutil (5% de opacidad) ── */}
      <div
        className="absolute inset-0 tactical-grid"
        style={{ opacity: 0.5 }}
        aria-hidden="true"
      />

      {/* ── Marco decorativo superior izquierdo ── */}
      <div className="absolute top-24 left-8 md:left-16 pointer-events-none" aria-hidden="true">
        <div
          className="w-16 h-16 border-t-2 border-l-2"
          style={{ borderColor: 'rgba(200, 163, 73, 0.5)' }}
        />
      </div>

      {/* ── Marco decorativo inferior derecho ── */}
      <div className="absolute bottom-16 right-8 md:right-16 pointer-events-none" aria-hidden="true">
        <div
          className="w-16 h-16 border-b-2 border-r-2"
          style={{ borderColor: 'rgba(200, 163, 73, 0.5)' }}
        />
      </div>

      {/* ── Compás SVG decorativo (rotación lenta) ── */}
      <div
        className="absolute top-24 right-8 md:right-16 pointer-events-none"
        aria-hidden="true"
      >
        <motion.svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          animate={prefersReducedMotion ? {} : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ opacity: 0.3 }}
        >
          <circle cx="40" cy="40" r="38" stroke="#C8A349" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="30" stroke="#C8A349" strokeWidth="0.5" />
          <line x1="40" y1="2" x2="40" y2="14" stroke="#C8A349" strokeWidth="1" />
          <line x1="40" y1="66" x2="40" y2="78" stroke="#C8A349" strokeWidth="1" />
          <line x1="2" y1="40" x2="14" y2="40" stroke="#C8A349" strokeWidth="1" />
          <line x1="66" y1="40" x2="78" y2="40" stroke="#C8A349" strokeWidth="1" />
          <polygon points="40,10 43,34 40,38 37,34" fill="#C8A349" opacity="0.8" />
          <polygon points="40,70 43,46 40,42 37,46" fill="#C8A349" opacity="0.4" />
          <circle cx="40" cy="40" r="3" fill="#C8A349" opacity="0.8" />
          {/* Marcas de brújula */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <line
              key={i}
              x1="40"
              y1="4"
              x2="40"
              y2={i % 2 === 0 ? '10' : '8'}
              stroke="#C8A349"
              strokeWidth="0.75"
              transform={`rotate(${deg} 40 40)`}
            />
          ))}
        </motion.svg>
      </div>

      {/* ── Contenido principal ── */}
      <motion.div
        className="relative z-10 flex flex-col justify-center h-full"
        style={prefersReducedMotion ? {} : { y: contentY, opacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Etiqueta superior */}
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 text-xs font-medium tracking-widest uppercase"
              style={{
                color: '#8A9099',
                letterSpacing: '0.25em',
                fontFamily: 'var(--font-inter), sans-serif',
              }}
            >
              {t.hero.label}
            </motion.p>

            {/* H1 principal */}
            <motion.h1
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-black uppercase leading-none mb-6"
              style={{
                fontFamily: 'var(--font-archivo), sans-serif',
                fontSize: 'clamp(3.5rem, 8vw, 9rem)',
                letterSpacing: '-0.02em',
                color: '#F5F5F3',
                lineHeight: '0.95',
              }}
            >
              {headlineLines[0]}
              {headlineLines.length > 1 && (
                <>
                  <br />
                  <span style={{ color: '#C8A349' }}>{headlineLines[1]}</span>
                </>
              )}
              {headlineLines.length > 2 && (
                <>
                  <br />
                  {headlineLines[2]}
                </>
              )}
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-10 font-light text-sm md:text-base"
              style={{
                color: '#8A9099',
                fontFamily: 'var(--font-inter), sans-serif',
                letterSpacing: '0.08em',
                maxWidth: '520px',
              }}
            >
              {t.hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* CTA primario */}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: '#C8A349',
                  color: '#0F1115',
                  fontFamily: 'var(--font-inter), sans-serif',
                  letterSpacing: '0.1em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4b05a'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#C8A349'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {t.hero.ctaPrimary}
              </button>

              {/* CTA secundario */}
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 text-sm font-medium tracking-widest uppercase border transition-all duration-300 cursor-pointer"
                style={{
                  borderColor: '#C8A349',
                  color: '#C8A349',
                  fontFamily: 'var(--font-inter), sans-serif',
                  letterSpacing: '0.1em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(200, 163, 73, 0.08)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {t.hero.ctaSecondary}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Indicador de scroll animado ── */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll down"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ color: '#8A9099' }}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.2em', fontSize: '9px' }}
        >
          {t.hero.scrollLabel}
        </span>
        <ChevronDown size={16} />
      </motion.button>
    </section>
  )
}
