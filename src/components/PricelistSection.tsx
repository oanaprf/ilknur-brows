'use client'

import { useTranslation } from 'react-i18next'

const PRICES = [
  { name: 'Microblading', duration: '90 min', price: '800 RON', popular: true },
  { name: 'Powder Brows', duration: '90 min', price: '700 RON', popular: false },
  { name: 'Combo Brows', duration: '120 min', price: '900 RON', popular: false },
  { name: 'Brow Lamination', duration: '60 min', price: '200 RON', popular: false },
  { name: 'Brow Tinting', duration: '30 min', price: '80 RON', popular: false },
  { name: 'Wax & Thread', duration: '20 min', price: '50 RON', popular: false },
  { name: 'Touch-up (6 months)', duration: '60 min', price: '400 RON', popular: false },
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
          {PRICES.map(({ name, duration, price, popular }) => (
            <div
              key={name}
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
                  {name}
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
