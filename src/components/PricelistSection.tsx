'use client'

import { useTranslation } from 'react-i18next'

const PRICES = [
  { nameKey: 'pricelist.items.browStyling', duration: '30 min', price: '80 RON', popular: false },
  { nameKey: 'pricelist.items.browStylingThinning', duration: '1h', price: '120 RON', popular: false },
  { nameKey: 'pricelist.items.browStylingDye', duration: '1h', price: '150 RON', popular: false },
  { nameKey: 'pricelist.items.browStylingHenna', duration: '1h', price: '170 RON', popular: false },
  { nameKey: 'pricelist.items.browLaminationStyling', duration: '1h', price: '190 RON', popular: false },
  { nameKey: 'pricelist.items.browLaminationStylingTinting', duration: '1h', price: '210 RON', popular: true },
  { nameKey: 'pricelist.items.browBleachingStyling', duration: '1h', price: '130 RON', popular: false },
  { nameKey: 'pricelist.items.browBleachingStylingToning', duration: '1h', price: '160 RON', popular: false },
  { nameKey: 'pricelist.items.comboLamination', duration: '2h', price: '330 RON', popular: false },
  { nameKey: 'pricelist.items.lashLaminationBrowStyling', duration: '2h 30min', price: '300 RON', popular: false },
]

export default function PricelistSection() {
  const { t } = useTranslation()

  return (
    <section id="pricelist" className="py-24 bg-[#fdf0f8]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d8429d] text-sm font-semibold tracking-[0.2em] uppercase">
            {t('pricelist.label')}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            {t('pricelist.heading')}
          </h2>
          <p className="text-gray-400 mt-4 text-lg">{t('pricelist.description')}</p>
        </div>

        <div className="space-y-3">
          {PRICES.map(({ nameKey, duration, price, popular }) => (
            <div
              key={nameKey}
              className={`relative flex items-center justify-between p-5 sm:p-6 rounded-2xl transition-all duration-200 ${
                popular
                  ? 'bg-[#d8429d] text-white shadow-lg shadow-[#d8429d]/20'
                  : 'bg-surface shadow-md shadow-pink-100/60 hover:shadow-lg hover:shadow-pink-100/80'
              }`}
            >
              {popular && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 bg-white rounded-full text-[#d8429d] text-xs font-bold tracking-widest uppercase shadow-sm">
                  {t('pricelist.mostPopular')}
                </div>
              )}

              <div className="flex-1">
                <span className={`font-display text-lg font-semibold ${popular ? 'text-white' : 'text-gray-900'}`}>
                  {t(nameKey)}
                </span>
                <span className={`ml-3 text-sm ${popular ? 'text-white/70' : 'text-gray-400'}`}>
                  {duration}
                </span>
              </div>

              <span className={`font-display text-2xl font-bold ${popular ? 'text-white' : 'text-[#d8429d]'}`}>
                {price}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">{t('pricelist.footnote')}</p>
      </div>
    </section>
  )
}
