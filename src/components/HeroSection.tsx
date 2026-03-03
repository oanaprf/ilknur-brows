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
        className="text-white/60 hover:text-white transition-colors"
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
    <section id="hero" className="relative pt-24 overflow-visible">
      {/* Local orb behind hero text */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-[-5%] w-[500px] h-[500px] rounded-full bg-[#d8429d]/20 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="py-12 pb-16 lg:max-w-[55%]">
          {/* Glass label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d8429d]/15 border border-[#d8429d]/30 backdrop-blur-sm mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d8429d] inline-block" />
            <span className="text-[#f9a8d4] text-xs font-semibold tracking-[0.15em] uppercase">Premium Brow Studio</span>
          </div>

          <h1 className="font-black text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.15] text-white mb-7">
            {t('hero.headline')}
          </h1>

          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-[420px]">
            {t('hero.subtitle')}
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="https://www.notino.ro/saloane/ilknur-brows/?gad_source=1&gad_campaignid=22770392632&gbraid=0AAAAAqJ-m9AolaIzTWeUETUGaFnYojKXh&gclid=CjwKCAiAqprNBhB6EiwAMe3yhpDcNJLm1EVMRAPfXm3MdMfBfA1wZ3TG7_d8kKN3vyrCGoYhAqy8PhoC5WQQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-[#d8429d] text-white text-xs font-bold rounded-full hover:bg-[#c2357f] transition-colors duration-200 tracking-[0.12em] whitespace-nowrap shadow-lg shadow-[#d8429d]/30"
            >
              {t('hero.cta')}
            </a>
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* Image — glass frame, positioned to overflow below the section */}
      <div className="hidden lg:block absolute right-[8%] top-14 z-10">
        <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/50">
          {/* Glass ring overlay */}
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 z-10 pointer-events-none" />
          <Image
            src="/ilknur-hero.png"
            alt="Ilknur — Professional Brow Artist"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Glow behind the image */}
        <div className="absolute inset-0 -z-10 rounded-full bg-[#d8429d]/20 blur-3xl scale-110" />
      </div>
    </section>
  )
}
