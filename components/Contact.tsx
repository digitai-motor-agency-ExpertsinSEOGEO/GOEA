'use client'

// Sección de contacto con formulario client-side y mapa de información
import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import Reveal from './Reveal'

// Tipo para el estado del formulario
interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

const serviceOptions = [
  'Executive Protection',
  'Corporate Security',
  'Risk Assessment',
  'Tactical Consulting',
  'Professional Training',
  'Security Planning',
]

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contacto@goea.com.ar',
    href: 'mailto:contacto@goea.com.ar',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '[TELÉFONO PENDIENTE]',
    href: '#',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: '[CIUDAD, PAÍS]',
    href: '#',
  },
]

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Manejo de envío — solo client-side por ahora (sin backend)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simular envío — reemplazar por integración real cuando corresponda
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  // Estilos compartidos para los inputs
  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'rgba(21, 24, 30, 0.8)',
    border: '1px solid rgba(200, 163, 73, 0.2)',
    color: '#F5F5F3',
    padding: '12px 16px',
    fontFamily: 'var(--font-inter), sans-serif',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section
      id="contact"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* ── Columna izquierda: Información de contacto ── */}
          <div>
            <Reveal>
              <p
                className="text-xs font-medium tracking-widest uppercase mb-4"
                style={{ color: '#C8A349', letterSpacing: '0.25em', fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Get In Touch
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="font-black uppercase mb-6"
                style={{
                  fontFamily: 'var(--font-archivo), sans-serif',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  color: '#F5F5F3',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.1',
                }}
              >
                Start a
                <br />
                <span style={{ color: '#C8A349' }}>Confidential</span>
                <br />
                Conversation.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="font-light leading-relaxed mb-10"
                style={{
                  color: '#8A9099',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '0.95rem',
                  maxWidth: '400px',
                }}
              >
                Every inquiry is handled with absolute discretion. Our team will respond
                within 24 hours to qualified requests.
              </p>
            </Reveal>

            {/* Información de contacto */}
            <div className="flex flex-col gap-6">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                return (
                  <Reveal key={item.label} delay={0.3 + i * 0.1}>
                    <a
                      href={item.href}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0"
                        style={{ backgroundColor: 'rgba(62, 74, 63, 0.3)', border: '1px solid rgba(200,163,73,0.15)' }}
                      >
                        <Icon size={16} style={{ color: '#C8A349' }} />
                      </div>
                      <div>
                        <p
                          className="text-xs tracking-widest uppercase mb-0.5"
                          style={{ color: '#5A6B4D', fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.15em' }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="font-medium text-sm group-hover:underline"
                          style={{ color: '#F5F5F3', fontFamily: 'var(--font-inter), sans-serif' }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </Reveal>
                )
              })}
            </div>
          </div>

          {/* ── Columna derecha: Formulario ── */}
          <Reveal delay={0.2}>
            <div
              className="p-8 rounded-xl"
              style={{
                backgroundColor: 'rgba(21, 24, 30, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(200, 163, 73, 0.15)',
              }}
            >
              {submitted ? (
                /* Estado de éxito */
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'rgba(200, 163, 73, 0.15)', border: '1px solid rgba(200,163,73,0.4)' }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                      <path d="M 6 14 L 12 20 L 22 9" stroke="#C8A349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3
                    className="font-bold text-xl mb-3"
                    style={{ color: '#F5F5F3', fontFamily: 'var(--font-archivo), sans-serif' }}
                  >
                    Message Received
                  </h3>
                  <p
                    className="font-light"
                    style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.9rem' }}
                  >
                    Thank you. Our team will contact you within 24 hours with complete discretion.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.15em' }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(200,163,73,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(200,163,73,0.2)')}
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email y teléfono en fila */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs tracking-widest uppercase mb-2"
                        style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.15em' }}
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(200,163,73,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(200,163,73,0.2)')}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs tracking-widest uppercase mb-2"
                        style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.15em' }}
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(200,163,73,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(200,163,73,0.2)')}
                        placeholder="+1 (000) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Servicio de interés */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.15em' }}
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(200,163,73,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(200,163,73,0.2)')}
                    >
                      <option value="" style={{ backgroundColor: '#15181E' }}>Select a service...</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option} style={{ backgroundColor: '#15181E' }}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.15em' }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(200,163,73,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(200,163,73,0.2)')}
                      placeholder="Briefly describe your security needs..."
                    />
                  </div>

                  {/* Botón de envío */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer disabled:opacity-70"
                    style={{
                      backgroundColor: '#C8A349',
                      color: '#0F1115',
                      fontFamily: 'var(--font-inter), sans-serif',
                      letterSpacing: '0.1em',
                      fontSize: '0.875rem',
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) e.currentTarget.style.backgroundColor = '#d4b05a'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#C8A349'
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Confidential Request'}
                  </button>

                  <p
                    className="text-xs text-center"
                    style={{ color: '#5A6B4D', fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    All information is treated with strict confidentiality.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
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
