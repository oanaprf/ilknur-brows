'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import ilknurHero from '../../public/images/ilknur-hero.png'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  )
}

function HeroDecorations() {
  return (
    <>
      {/* 4-point sparkle — top center */}
      <svg
        className="absolute -top-5 left-1/2 -translate-x-1/2 text-[#d8429d] animate-spin-slow"
        width="18" height="18" viewBox="0 0 20 20" fill="currentColor"
      >
        <path d="M10 0L11.8 8.2L20 10L11.8 11.8L10 20L8.2 11.8L0 10L8.2 8.2Z" />
      </svg>
      <div className="absolute top-8 -right-3 w-4 h-4 bg-[#f9a8d4] rotate-45 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-10 left-4 w-3 h-3 rounded-full bg-[#d8429d] animate-float" style={{ animationDelay: '0s' }} />
      <svg className="absolute top-1/3 -right-5 text-[#f9a8d4] animate-pulse-soft" width="14" height="14" viewBox="0 0 14 14" fill="currentColor" style={{ animationDelay: '0.7s' }}>
        <path d="M7 0L8.4 5.6L14 7L8.4 8.4L7 14L5.6 8.4L0 7L5.6 5.6Z" />
      </svg>
      <div className="absolute top-1/2 -left-4 w-4 h-4 bg-[#e879a8] rotate-45 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-16 right-4 w-2 h-2 rounded-full bg-[#fce7f3] animate-float" style={{ animationDelay: '1.3s' }} />
      <div className="absolute bottom-8 left-8 w-3 h-3 bg-[#f9a8d4] rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      <svg className="absolute bottom-4 right-10 text-[#d8429d] animate-pulse-soft" width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{ animationDelay: '1.8s' }}>
        <path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8Z" />
      </svg>
      <div className="absolute top-16 right-8 w-2 h-2 rounded-full bg-[#d8429d] animate-pulse-soft" style={{ animationDelay: '0.3s' }} />
      <div className="absolute top-1/4 -left-2 w-3 h-3 bg-[#fce7f3] rotate-45 animate-float" style={{ animationDelay: '1.6s' }} />
    </>
  )
}


export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative bg-white overflow-hidden pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center min-h-[88vh] gap-8 py-12">
          {/* ── Left: text content ── */}
          <div className="flex-1 max-w-xl animate-slide-left">
            <p className="text-[#d8429d] font-semibold text-base mb-4">
              {t('hero.greeting')}&nbsp;<span className="font-black">Ilknur!</span>
            </p>

            <h1 className="font-display font-black text-[2.6rem] sm:text-5xl lg:text-[3.25rem] leading-[1.12] text-gray-900 mb-6">
              {t('hero.headline')}
            </h1>

            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-[420px]">
              {t('hero.subtitle')}
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.notino.ro/saloane/ilknur-brows/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 bg-[#d8429d] text-white font-bold text-sm rounded-full hover:bg-[#c2357f] transition-all duration-200 shadow-lg shadow-[#d8429d]/30 uppercase tracking-[0.12em]"
              >
                {t('hero.cta')}
              </a>

              <a
                href="https://www.instagram.com/ilknur_brows"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#d8429d] hover:text-[#c2357f] transition-colors duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.tiktok.com/@ilknur_brows"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-[#d8429d] hover:text-[#c2357f] transition-colors duration-200"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://www.facebook.com/browtistailknur/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#d8429d] hover:text-[#c2357f] transition-colors duration-200"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* ── Right: circular portrait + floating dots ── */}
          <div className="flex-1 flex items-center justify-center relative animate-slide-right order-first lg:order-last">
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[460px] lg:h-[460px]">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src={ilknurHero}
                  alt="Ilknur — Professional Brow Artist"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <HeroDecorations />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
