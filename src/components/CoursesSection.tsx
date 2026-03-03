'use client'

import { useTranslation } from 'react-i18next'

const COURSES = [
  {
    title: 'Basic Brow Shaping',
    subtitle: 'Foundation Course',
    duration: '1 Day · 8 hours',
    price: '1.200 RON',
    badge: null,
    includes: [
      'Brow anatomy & face mapping',
      'Shaping, waxing & threading',
      'Tinting techniques',
      'Client consultation practice',
      'Certificate of completion',
    ],
  },
  {
    title: 'Advanced Microblading',
    subtitle: 'Masterclass',
    duration: '3 Days · 24 hours',
    price: '3.500 RON',
    badge: 'bestSeller',
    includes: [
      'Advanced color theory',
      'Full microblading technique',
      'Powder & ombre methods',
      'Live model practice sessions',
      'Business starter kit',
      'Lifetime support & certificate',
    ],
  },
  {
    title: 'Brow Business Bootcamp',
    subtitle: 'Pro Business Course',
    duration: '2 Days · 16 hours',
    price: '2.200 RON',
    badge: null,
    includes: [
      'Building your brand & portfolio',
      'Social media for brow artists',
      'Pricing strategy & consultation',
      'Client retention & marketing',
      'Legal & hygiene compliance',
    ],
  },
]

export default function CoursesSection() {
  const { t } = useTranslation()

  return (
    <section id="courses" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d8429d] text-sm font-semibold tracking-[0.2em] uppercase">
            {t('courses.label')}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            {t('courses.heading')}
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-lg mx-auto">{t('courses.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COURSES.map(({ title, subtitle, duration, price, badge, includes }, idx) => (
            <div
              key={title}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                idx === 1
                  ? 'bg-gradient-to-b from-[#d8429d] to-[#b8358a] text-white shadow-2xl shadow-[#d8429d]/30'
                  : 'bg-surface shadow-md hover:shadow-xl'
              }`}
            >
              {badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-[#d8429d] text-xs font-bold rounded-full shadow-md tracking-widest uppercase whitespace-nowrap">
                  {t(`courses.${badge}`)}
                </div>
              )}

              <div className="mb-6">
                <div className={`text-xs font-semibold tracking-[0.2em] uppercase mb-1 ${idx === 1 ? 'text-white/60' : 'text-[#d8429d]'}`}>
                  {subtitle}
                </div>
                <h3 className={`font-display text-2xl font-bold ${idx === 1 ? 'text-white' : 'text-gray-900'}`}>
                  {title}
                </h3>
                <div className={`text-sm mt-1.5 ${idx === 1 ? 'text-white/70' : 'text-gray-400'}`}>{duration}</div>
              </div>

              <ul className="space-y-2.5 flex-1 mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className={`w-4 h-4 mt-0.5 shrink-0 ${idx === 1 ? 'text-white/80' : 'text-[#d8429d]'}`} viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`text-sm ${idx === 1 ? 'text-white/85' : 'text-gray-600'}`}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={`pt-6 border-t ${idx === 1 ? 'border-white/20' : 'border-[#f9a8d4]/30'}`}>
                <div className={`font-display text-3xl font-bold mb-4 ${idx === 1 ? 'text-white' : 'text-[#d8429d]'}`}>
                  {price}
                </div>
                <a
                  href="#contact"
                  className={`block text-center px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                    idx === 1
                      ? 'bg-white text-[#d8429d] hover:bg-white/90'
                      : 'bg-[#d8429d] text-white hover:bg-[#c2357f]'
                  }`}
                >
                  {t('courses.enroll')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
