'use client'
import { createContext, useContext, useState, type ReactNode } from 'react'
import { type Lang, translations } from '@/lib/translations'

// Use the 'en' shape as the canonical type for the context value.
// All locales share identical structure — only string values differ.
// The cast below is safe because we authored all three locales to match.
type T = typeof translations['en']

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: T
}

const LanguageContext = createContext<LangCtx>({} as LangCtx)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  // Cast through unknown so TypeScript accepts locale-specific literal strings
  // being widened to the canonical 'en' shape.
  const t = translations[lang] as unknown as T
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
