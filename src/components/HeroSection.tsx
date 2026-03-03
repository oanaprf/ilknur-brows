'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'

function SocialIcons() {
  return (
    <div className="flex items-center gap-5">
      <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-white/70 transition-colors">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>
      <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-white/70 transition-colors">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>
      <a href="https://tiktok.com" aria-label="TikTok" className="text-white hover:text-white/70 transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.5a8.16 8.16 0 004.77 1.53V6.59a4.85 4.85 0 01-1-.1z" />
        </svg>
      </a>
    </div>
  )
}

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative bg-[#d8429d] pt-24 overflow-visible">
      <div className="max-w-6xl mx-auto px-6">
        <div className="py-12 pb-16 lg:max-w-[55%]">
          <h1 className="font-black text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.15] text-white mb-7">
            {t('hero.headline')}
          </h1>

          <p className="text-white/85 text-base leading-relaxed mb-10 max-w-[420px]">
            {t('hero.subtitle')}
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="https://www.notino.ro/saloane/ilknur-brows/?gad_source=1&gad_campaignid=22770392632&gbraid=0AAAAAqJ-m9AolaIzTWeUETUGaFnYojKXh&gclid=CjwKCAiAqprNBhB6EiwAMe3yhpDcNJLm1EVMRAPfXm3MdMfBfA1wZ3TG7_d8kKN3vyrCGoYhAqy8PhoC5WQQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-white text-[#d8429d] text-xs font-bold rounded-full hover:bg-white/90 transition-colors duration-200 tracking-[0.12em] whitespace-nowrap"
            >
              {t('nav.bookNow')}
            </a>
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* Image — positioned to overflow below the pink section */}
      <div className="hidden lg:block absolute right-[8%] top-14 z-10">
        <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden">
          <Image
            src="/ilknur-hero.png"
            alt="Ilknur — Professional Brow Artist"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
