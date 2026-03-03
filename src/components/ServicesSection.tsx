'use client'

import { useTranslation } from 'react-i18next'

const SERVICES = [
  {
    num: '01',
    nameKey: 'services.items.shaping.name',
    descKey: 'services.items.shaping.desc',
    subtitles: ['Formă', 'Întreținere', 'Contur'],
  },
  {
    num: '02',
    nameKey: 'services.items.lamination.name',
    descKey: 'services.items.lamination.desc',
    subtitles: ['Gene', 'Sprâncene'],
  },
  {
    num: '03',
    nameKey: 'services.items.micropigmentation.name',
    descKey: 'services.items.micropigmentation.desc',
    subtitles: ['Powder Brows', 'Microblading', 'Combo'],
  },
]

export default function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section id="services" className="relative bg-[#fdf6f9] py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-[#d8429d] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            {t('services.label')}
          </p>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-gray-900 mb-5">
            {t('services.heading')}
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">{t('services.description')}</p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {SERVICES.map(({ num, nameKey, descKey, subtitles }) => (
            <div
              key={num}
              className="group relative bg-white rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Top accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d8429d] to-[#f9a8d4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />

              {/* Number watermark */}
              <span className="absolute top-6 right-6 text-[#d8429d]/8 font-black text-5xl leading-none select-none group-hover:text-[#d8429d]/15 transition-colors duration-300">
                {num}
              </span>

              <h3 className="font-display font-bold text-xl text-gray-900 leading-tight mb-2 pr-14">
                {t(nameKey)}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{t(descKey)}</p>

              <div className="flex flex-wrap gap-2">
                {subtitles.map((sub) => (
                  <span
                    key={sub}
                    className="text-xs font-medium text-[#d8429d] bg-[#fdf0f8] px-3 py-1 rounded-full border border-[#d8429d]/10"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
