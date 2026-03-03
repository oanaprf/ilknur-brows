'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const NAV_LINKS = [
  { key: 'nav.services', href: '#services' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.gallery', href: '#gallery' },
  { key: 'nav.courses', href: '#courses' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#d8429d]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1.5">
          <span className="font-black text-xl text-white tracking-tight uppercase">ILKNUR</span>
          <span className="font-light text-xl text-white tracking-[0.25em] uppercase">Brows</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-xs font-semibold text-white/90 hover:text-white transition-colors duration-200 tracking-[0.12em]"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.notino.ro/saloane/ilknur-brows/?gad_source=1&gad_campaignid=22770392632&gbraid=0AAAAAqJ-m9AolaIzTWeUETUGaFnYojKXh&gclid=CjwKCAiAqprNBhB6EiwAMe3yhpDcNJLm1EVMRAPfXm3MdMfBfA1wZ3TG7_d8kKN3vyrCGoYhAqy8PhoC5WQQAvD_BwE"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-6 py-2.5 bg-white text-[#d8429d] text-xs font-bold rounded-full hover:bg-white/90 transition-colors duration-200 tracking-[0.12em]"
          >
            {t('nav.bookNow')}
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open ? (
                <>
                  <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="5" x2="19" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#d8429d] border-t border-white/20 px-6 pb-5 pt-3 space-y-1">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-xs font-semibold text-white hover:text-white/80 transition-colors tracking-[0.12em]"
            >
              {t(key)}
            </a>
          ))}
          <a
            href="https://www.notino.ro/saloane/ilknur-brows/?gad_source=1&gad_campaignid=22770392632&gbraid=0AAAAAqJ-m9AolaIzTWeUETUGaFnYojKXh&gclid=CjwKCAiAqprNBhB6EiwAMe3yhpDcNJLm1EVMRAPfXm3MdMfBfA1wZ3TG7_d8kKN3vyrCGoYhAqy8PhoC5WQQAvD_BwE"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-center px-6 py-3 bg-white text-[#d8429d] text-xs font-bold rounded-full tracking-[0.12em]"
          >
            {t('nav.bookNow')}
          </a>
        </div>
      )}
    </header>
  )
}
