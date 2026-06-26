'use client'

// Navegación fija con efecto glassmorphism al hacer scroll
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Training', href: '#training' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Detectar scroll para aplicar fondo glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? 'blur(12px)' : undefined,
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : undefined,
        backgroundColor: scrolled ? 'rgba(15, 17, 21, 0.9)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(200, 163, 73, 0.2)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <span
              className="text-2xl font-black tracking-widest uppercase"
              style={{
                fontFamily: 'var(--font-archivo), sans-serif',
                color: '#C8A349',
                letterSpacing: '0.2em',
              }}
            >
              GOEA
            </span>
            <span
              className="hidden sm:block text-xs tracking-widest uppercase"
              style={{ color: '#8A9099', letterSpacing: '0.15em', fontSize: '9px' }}
            >
              Executive Protection
            </span>
          </a>

          {/* Links de escritorio */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm font-medium tracking-widest uppercase transition-colors cursor-pointer"
                style={{
                  color: '#8A9099',
                  letterSpacing: '0.12em',
                  fontFamily: 'var(--font-inter), sans-serif',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#F5F5F3')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8A9099')}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA escritorio */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('#contact')}
              className="px-5 py-2 text-sm font-medium tracking-widest uppercase border transition-all duration-300 cursor-pointer"
              style={{
                borderColor: '#C8A349',
                color: '#C8A349',
                fontFamily: 'var(--font-inter), sans-serif',
                letterSpacing: '0.1em',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.backgroundColor = '#C8A349'
                el.style.color = '#0F1115'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.backgroundColor = 'transparent'
                el.style.color = '#C8A349'
              }}
            >
              Contact
            </button>
          </div>

          {/* Botón hamburguesa mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ color: '#F5F5F3' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menú mobile con animación slide-down */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden"
            style={{
              backgroundColor: 'rgba(15, 17, 21, 0.97)',
              borderBottom: '1px solid rgba(200, 163, 73, 0.2)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <nav className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left text-sm font-medium tracking-widest uppercase py-2 border-b cursor-pointer"
                  style={{
                    color: '#F5F5F3',
                    borderColor: 'rgba(200, 163, 73, 0.1)',
                    fontFamily: 'var(--font-inter), sans-serif',
                    letterSpacing: '0.15em',
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleLinkClick('#contact')}
                className="mt-2 py-3 text-sm font-medium tracking-widest uppercase text-center cursor-pointer"
                style={{
                  backgroundColor: '#C8A349',
                  color: '#0F1115',
                  fontFamily: 'var(--font-inter), sans-serif',
                  letterSpacing: '0.1em',
                }}
              >
                Contact
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
