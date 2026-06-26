import type { MetadataRoute } from 'next'

// Configuración robots — permite todos los crawlers
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://goea.com.ar/sitemap.xml',
  }
}
