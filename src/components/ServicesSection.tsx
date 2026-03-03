'use client'

import { useTranslation } from 'react-i18next'

const SERVICES = [
  {
    key: 'PENSAT',
    subtitles: ['Formă', 'Întreținere'],
  },
  {
    key: 'LAMINARE',
    subtitles: ['Gene', 'Sprâncene'],
  },
  {
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

        {/* Service circles */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {SERVICES.map(({ key, subtitles }) => (
            <div key={key} className="flex flex-col items-center">
              <div className="w-56 h-56 rounded-full bg-[#e8d5de] flex flex-col items-center justify-center text-center px-6 hover:bg-[#dfc8d4] transition-colors duration-300 cursor-pointer shadow-md hover:shadow-lg">
                <span className="font-black text-lg text-gray-800 tracking-wide leading-tight mb-2">
                  {key}
                </span>
                <div className="flex flex-col items-center gap-0.5">
                  {subtitles.map((sub) => (
                    <span key={sub} className="text-gray-500 text-sm">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
