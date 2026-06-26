import type { MetadataRoute } from 'next'

// Sitemap estándar de Next.js — solo homepage por ahora
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://goea.com.ar',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
