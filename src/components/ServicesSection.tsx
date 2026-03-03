'use client'

import { useTranslation } from 'react-i18next'

const SERVICES = [
  {
    num: '01',
    key: 'PENSAT',
    subtitles: ['Formă', 'Întreținere'],
  },
  {
    num: '02',
    key: 'LAMINARE',
    subtitles: ['Gene', 'Sprâncene'],
  },
  {
    num: '03',
    key: 'MICRO PIGMENTARE',
    subtitles: ['Powder'],
  },
]

export default function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section id="services" className="relative bg-surface pt-28 pb-24 lg:pt-52">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#d8429d] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            {t('services.label')}
          </p>
          <h2 className="font-black text-4xl lg:text-5xl text-gray-900 mb-5">
            {t('services.heading')}
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            {t('services.description')}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {SERVICES.map(({ num, key, subtitles }) => (
            <div
              key={key}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#d8429d]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d8429d] to-[#f9a8d4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="text-[#d8429d]/20 font-black text-6xl leading-none block mb-6 group-hover:text-[#d8429d]/40 transition-colors duration-300">
                {num}
              </span>
              <h3 className="font-black text-xl text-gray-900 tracking-wide leading-tight mb-4">
                {key}
              </h3>
              <div className="flex flex-col gap-2">
                {subtitles.map((sub) => (
                  <span key={sub} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d8429d] inline-block shrink-0" />
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
