'use client'

import { useTranslation } from 'react-i18next'

const COURSES = [
  {
    subtitle: 'Foundation',
    titleKey: 'courses.items.basic.title',
    duration: '1 Zi · 8 ore',
    price: '1.200 RON',
    badge: null,
    includes: [
      'Anatomia sprâncenei & cartografierea feței',
      'Tehnici de conturare, ceruire & epilare cu ață',
      'Tehnici de vopsire',
      'Practică consultații clienți',
      'Certificat de absolvire',
    ],
  },
  {
    subtitle: 'Masterclass',
    titleKey: 'courses.items.advanced.title',
    duration: '3 Zile · 24 ore',
    price: '3.500 RON',
    badge: 'bestSeller',
    includes: [
      'Teoria avansată a culorii',
      'Tehnica completă de microblading',
      'Metode powder & ombre',
      'Sesiuni de practică pe model real',
      'Kit starter pentru afacere',
      'Suport permanent & certificat',
    ],
  },
  {
    subtitle: 'Pro Business',
    titleKey: 'courses.items.business.title',
    duration: '2 Zile · 16 ore',
    price: '2.200 RON',
    badge: null,
    includes: [
      'Construirea brandului & portofoliului',
      'Social media pentru artiști brow',
      'Strategie de prețuri & consultații',
      'Fidelizarea clienților & marketing',
      'Conformitate legală & igienă',
    ],
  },
]

export default function CoursesSection() {
  const { t } = useTranslation()

  return (
    <section id="courses" className="py-24 bg-[#fdf6f9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d8429d] text-xs font-bold tracking-[0.3em] uppercase">
            {t('courses.label')}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 mt-3">
            {t('courses.heading')}
          </h2>
          <p className="text-gray-400 mt-4 text-base max-w-lg mx-auto">
            {t('courses.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COURSES.map(({ subtitle, titleKey, duration, price, badge, includes }, idx) => (
            <div
              key={titleKey}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
                idx === 1
                  ? 'bg-gradient-to-b from-[#d8429d] to-[#b8358a] text-white shadow-2xl shadow-[#d8429d]/30'
                  : 'bg-white shadow-md hover:shadow-xl'
              }`}
            >
              {badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-[#d8429d] text-xs font-black rounded-full shadow-md tracking-widest uppercase whitespace-nowrap border border-[#d8429d]/10">
                  {t(`courses.${badge}`)}
                </div>
              )}

              <div className="mb-6">
                <div
                  className={`text-xs font-bold tracking-[0.25em] uppercase mb-1 ${idx === 1 ? 'text-white/60' : 'text-[#d8429d]'}`}
                >
                  {subtitle}
                </div>
                <h3
                  className={`font-display text-2xl font-black ${idx === 1 ? 'text-white' : 'text-gray-900'}`}
                >
                  {t(titleKey)}
                </h3>
                <div className={`text-sm mt-1.5 ${idx === 1 ? 'text-white/70' : 'text-gray-400'}`}>
                  {duration}
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${idx === 1 ? 'text-white/80' : 'text-[#d8429d]'}`}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={`text-sm ${idx === 1 ? 'text-white/85' : 'text-gray-600'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`pt-6 border-t ${idx === 1 ? 'border-white/20' : 'border-gray-100'}`}
              >
                <div
                  className={`font-display text-3xl font-black mb-4 ${idx === 1 ? 'text-white' : 'text-[#d8429d]'}`}
                >
                  {price}
                </div>
                <a
                  href="tel:0787778505"
                  className={`block text-center px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-200 ${
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
