'use client'

import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const change = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <div className="flex items-center gap-1">
      {(['ro', 'en'] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => change(lang)}
          className={`text-xs uppercase font-bold px-3 py-1.5 rounded-full transition-all duration-200 ${
            i18n.language === lang
              ? 'bg-white/20 text-white'
              : 'text-white/50 hover:text-white/80 hover:bg-white/10'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  )
}
