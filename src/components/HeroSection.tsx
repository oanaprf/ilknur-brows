'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import ilknurHero from '../../public/images/ilknur-hero.png'

function HeroDecorations() {
  return (
    <>
      {/* 4-point sparkle — top center */}
      <svg
        className="absolute -top-5 left-1/2 -translate-x-1/2 text-[#d8429d] animate-spin-slow"
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10 0L11.8 8.2L20 10L11.8 11.8L10 20L8.2 11.8L0 10L8.2 8.2Z" />
      </svg>

      {/* Diamond — top right */}
      <div
        className="absolute top-8 -right-3 w-4 h-4 bg-[#f9a8d4] rotate-45 animate-float"
        style={{ animationDelay: '0.5s' }}
      />

      {/* Small circle — upper left */}
      <div
        className="absolute top-10 left-4 w-3 h-3 rounded-full bg-[#d8429d] animate-float"
        style={{ animationDelay: '0s' }}
      />

      {/* 4-point sparkle — right middle */}
      <svg
        className="absolute top-1/3 -right-5 text-[#f9a8d4] animate-pulse-soft"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="currentColor"
        style={{ animationDelay: '0.7s' }}
      >
        <path d="M7 0L8.4 5.6L14 7L8.4 8.4L7 14L5.6 8.4L0 7L5.6 5.6Z" />
      </svg>

      {/* Diamond — left middle */}
      <div
        className="absolute top-1/2 -left-4 w-4 h-4 bg-[#e879a8] rotate-45 animate-float"
        style={{ animationDelay: '1s' }}
      />

      {/* Tiny circle — right lower */}
      <div
        className="absolute bottom-16 right-4 w-2 h-2 rounded-full bg-[#fce7f3] animate-float"
        style={{ animationDelay: '1.3s' }}
      />

      {/* Diamond — bottom left */}
      <div
        className="absolute bottom-8 left-8 w-3 h-3 bg-[#f9a8d4] rotate-45 animate-float"
        style={{ animationDelay: '2s' }}
      />

      {/* Small sparkle — bottom right */}
      <svg
        className="absolute bottom-4 right-10 text-[#d8429d] animate-pulse-soft"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="currentColor"
        style={{ animationDelay: '1.8s' }}
      >
        <path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8Z" />
      </svg>

      {/* Tiny circle — top right area */}
      <div
        className="absolute top-16 right-8 w-2 h-2 rounded-full bg-[#d8429d] animate-pulse-soft"
        style={{ animationDelay: '0.3s' }}
      />

      {/* Diamond — upper left edge */}
      <div
        className="absolute top-1/4 -left-2 w-3 h-3 bg-[#fce7f3] rotate-45 animate-float"
        style={{ animationDelay: '1.6s' }}
      />
    </>
  )
}

const STATS = [
  { valueKey: 'hero.stats.clients.value', labelKey: 'hero.stats.clients.label' },
  { valueKey: 'hero.stats.sessions.value', labelKey: 'hero.stats.sessions.label' },
  { valueKey: 'hero.stats.reviews.value', labelKey: 'hero.stats.reviews.label' },
]

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative bg-white overflow-hidden pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center min-h-[88vh] gap-8 py-12">
          {/* ── Left: text content ── */}
          <div className="flex-1 max-w-xl animate-slide-left">
            <p className="text-[#d8429d] font-semibold text-base mb-4">
              {t('hero.greeting')}
              &nbsp;
              <span className="font-black">Ilknur</span>
            </p>

            <h1 className="font-display font-black text-[2.6rem] sm:text-5xl lg:text-[3.25rem] leading-[1.12] text-gray-900 mb-6">
              {t('hero.headline')}
            </h1>

            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-[420px]">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.notino.ro/saloane/ilknur-brows/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 bg-[#d8429d] text-white font-bold text-sm rounded-full hover:bg-[#c2357f] transition-all duration-200 shadow-lg shadow-[#d8429d]/30 uppercase tracking-[0.12em]"
              >
                {t('hero.cta')}
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold text-sm rounded-full hover:border-[#d8429d] hover:text-[#d8429d] transition-all duration-200"
              >
                <span className="w-5 h-5 rounded-full bg-[#fdf0f8] flex items-center justify-center shrink-0">
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 2L9.5 6L2.5 10V2Z" fill="#d8429d" />
                  </svg>
                </span>
                {t('hero.viewGallery')}
              </a>
            </div>
          </div>

          {/* ── Right: circular portrait + floating dots ── */}
          <div className="flex-1 flex items-center justify-center relative animate-slide-right order-first lg:order-last">
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[460px] lg:h-[460px]">
              {/* Portrait image (already circular with pink bg) */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src={ilknurHero}
                  alt="Ilknur — Professional Brow Artist"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating decorative elements */}
              <HeroDecorations />
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-[#fce7f3] rounded-2xl shadow-md shadow-[#d8429d]/10 py-8 px-6 flex divide-x divide-[#d8429d]/15">
          {STATS.map(({ valueKey, labelKey }) => (
            <div key={labelKey} className="flex-1 text-center px-4">
              <div className="font-display text-3xl sm:text-4xl font-black text-[#d8429d] mb-1">
                {t(valueKey)}
              </div>
              <div className="text-gray-500 text-sm">{t(labelKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
