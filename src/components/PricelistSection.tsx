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
    <section id="pricelist" className="py-24 relative">
      {/* Section orb */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#d8429d]/8 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d8429d] text-sm font-semibold tracking-[0.2em] uppercase">
            {t('pricelist.label')}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3">
            {t('pricelist.heading')}
          </h2>
          <p className="text-white/40 mt-4 text-lg">{t('pricelist.description')}</p>
        </div>

        <div className="space-y-3">
          {PRICES.map(({ name, duration, price, popular }) => (
            <div
              key={name}
              className={`relative flex items-center justify-between p-5 sm:p-6 rounded-2xl transition-all duration-200 ${
                popular
                  ? 'bg-[#d8429d]/20 backdrop-blur-xl border border-[#d8429d]/40 shadow-xl shadow-[#d8429d]/15'
                  : 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/8 hover:border-white/20'
              }`}
            >
              {popular && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#d8429d] text-white shadow-lg shadow-[#d8429d]/40">
                  {t('pricelist.mostPopular')}
                </div>
              )}

              <div className="flex-1">
                <span className={`font-display text-lg font-semibold ${popular ? 'text-white' : 'text-white/90'}`}>
                  {name}
                </span>
                <span className={`ml-3 text-sm ${popular ? 'text-white/60' : 'text-white/40'}`}>
                  {duration}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className={`font-display text-2xl font-bold ${popular ? 'text-white' : 'text-[#d8429d]'}`}>
                  {price}
                </span>
                <a
                  href="https://www.notino.ro/saloane/ilknur-brows/?gad_source=1&gad_campaignid=22770392632&gbraid=0AAAAAqJ-m9AolaIzTWeUETUGaFnYojKXh&gclid=CjwKCAiAqprNBhB6EiwAMe3yhpDcNJLm1EVMRAPfXm3MdMfBfA1wZ3TG7_d8kKN3vyrCGoYhAqy8PhoC5WQQAvD_BwE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    popular
                      ? 'bg-white text-[#d8429d] hover:bg-white/90'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/15'
                  }`}
                >
                  {t('pricelist.book')}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-8">{t('pricelist.footnote')}</p>
      </div>
    </section>
  )
}
