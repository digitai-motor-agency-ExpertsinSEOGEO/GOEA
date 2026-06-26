'use client'

// Footer oscuro con logo, columnas de links y créditos
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer
      style={{
        backgroundColor: '#0F1115',
        borderTop: '1px solid rgba(200, 163, 73, 0.2)',
      }}
    >
      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Columna 1: Logo y tagline ── */}
          <div className="lg:col-span-1">
            <div className="mb-4">
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
            </div>
            <p
              className="text-sm font-light leading-relaxed mb-6"
              style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif' }}
            >
              {t.footer.tagline}
            </p>
            {/* Línea decorativa */}
            <div
              className="w-12 h-px"
              style={{ backgroundColor: '#C8A349' }}
              aria-hidden="true"
            />
          </div>

          {/* ── Columna 2: Services ── */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{
                color: '#F5F5F3',
                fontFamily: 'var(--font-archivo), sans-serif',
                letterSpacing: '0.2em',
              }}
            >
              {t.footer.servicesHeading}
            </h4>
            <ul className="flex flex-col gap-3">
              {t.footer.services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm font-light transition-colors"
                    style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C8A349')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8A9099')}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Columna 3: Quick Links ── */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{
                color: '#F5F5F3',
                fontFamily: 'var(--font-archivo), sans-serif',
                letterSpacing: '0.2em',
              }}
            >
              {t.footer.navigationHeading}
            </h4>
            <ul className="flex flex-col gap-3">
              {t.footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light transition-colors"
                    style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C8A349')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8A9099')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Columna 4: Contacto ── */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{
                color: '#F5F5F3',
                fontFamily: 'var(--font-archivo), sans-serif',
                letterSpacing: '0.2em',
              }}
            >
              {t.footer.contactHeading}
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <p
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: '#5A6B4D', fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.15em' }}
                >
                  {t.contact.info.emailLabel}
                </p>
                <a
                  href="mailto:contacto@goea.com.ar"
                  className="text-sm font-light transition-colors"
                  style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C8A349')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8A9099')}
                >
                  {t.contact.info.email}
                </a>
              </li>
              <li>
                <p
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: '#5A6B4D', fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.15em' }}
                >
                  {t.contact.info.phoneLabel}
                </p>
                <span
                  className="text-sm font-light"
                  style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {t.contact.info.phone}
                </span>
              </li>
              <li>
                <p
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: '#5A6B4D', fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.15em' }}
                >
                  {t.contact.info.locationLabel}
                </p>
                <span
                  className="text-sm font-light"
                  style={{ color: '#8A9099', fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {t.contact.info.location}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div
        style={{ borderTop: '1px solid rgba(200, 163, 73, 0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-xs font-light"
              style={{ color: '#5A6B4D', fontFamily: 'var(--font-inter), sans-serif' }}
            >
              © {year} GOEA — Grupo Operaciones Especiales Argentina. {t.footer.rights}
            </p>
            <p
              className="text-xs font-light"
              style={{ color: '#5A6B4D', fontFamily: 'var(--font-inter), sans-serif' }}
            >
              {t.footer.confidentiality}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
