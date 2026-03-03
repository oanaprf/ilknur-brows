'use client'

import { useTranslation } from 'react-i18next'

const REVIEWS = [
  {
    name: 'Ana M.',
    rating: 5,
    text: "Absolutely obsessed with my brows! Ilknur is a true artist — she listened to exactly what I wanted and delivered beyond my expectations. My microblading looks completely natural.",
    service: 'Microblading',
  },
  {
    name: 'Laura D.',
    rating: 5,
    text: "The brow lamination was life-changing. I used to spend 20 minutes every morning trying to fill in my brows, now I wake up and they're perfect. 10/10 recommend!",
    service: 'Brow Lamination',
  },
  {
    name: 'Ioana P.',
    rating: 5,
    text: "I was nervous about powder brows but Ilknur walked me through everything and the result is stunning. So soft and natural-looking. I've had so many compliments.",
    service: 'Powder Brows',
  },
  {
    name: 'Mihaela T.',
    rating: 5,
    text: "Professional, clean studio and an incredibly talented brow artist. The combo brows she did for me have given me so much confidence. Truly permanent makeup done right.",
    service: 'Combo Brows',
  },
  {
    name: 'Cristina B.',
    rating: 5,
    text: "Best money I've ever spent on beauty. Ilknur has incredible attention to detail and really takes the time to understand your face shape. My brows are perfect.",
    service: 'Microblading',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-[#d8429d]" viewBox="0 0 20 20">
          <path d="M10 1l2.4 6.8H20l-5.7 4.1 2.2 6.8L10 14.7l-6.5 4 2.2-6.8L0 7.8h7.6z" />
        </svg>
      ))}
    </div>
  )
}

function QuoteIcon() {
  return (
    <svg className="w-8 h-8 text-[#d8429d] opacity-25" viewBox="0 0 32 32" fill="currentColor">
      <path d="M6 20c0-4.4 2.8-8.4 8.4-12L16 10c-3.6 2-5.4 4.2-5.6 6.6.4-.2.9-.2 1.6-.2 2.2 0 4 1.8 4 4S14.2 24 12 24s-6-1.8-6-4zm14 0c0-4.4 2.8-8.4 8.4-12L30 10c-3.6 2-5.4 4.2-5.6 6.6.4-.2.9-.2 1.6-.2 2.2 0 4 1.8 4 4S28.2 24 26 24s-6-1.8-6-4z" />
    </svg>
  )
}

export default function ReviewsSection() {
  const { t } = useTranslation()

  return (
    <section id="reviews" className="py-24 bg-[#fdf0f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d8429d] text-sm font-semibold tracking-[0.2em] uppercase">
            {t('reviews.label')}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            {t('reviews.heading')}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Stars count={5} />
            <span className="text-gray-500 text-sm font-medium">{t('reviews.rating')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map(({ name, rating, text, service }) => (
            <div
              key={name}
              className="bg-surface rounded-3xl p-7 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <QuoteIcon />
                <span className="text-xs font-semibold text-[#d8429d] bg-[#fdf0f8] px-3 py-1 rounded-full">
                  {service}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">&ldquo;{text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#d8429d] to-[#f9a8d4] flex items-center justify-center text-white text-sm font-bold">
                    {name[0]}
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">{name}</span>
                </div>
                <Stars count={rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
