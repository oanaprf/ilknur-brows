'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'

function SocialIcons() {
  return (
    <div className="flex items-center gap-5">
      <a
        href="https://www.instagram.com/ilknur_brows?igsh=MXV6cmY5OW1raTBubA=="
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-white/70 transition-colors"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
              {t('hero.cta')}
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
