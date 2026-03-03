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
        <svg key={i} className="w-3.5 h-3.5 fill-[#d8429d]" viewBox="0 0 20 20">
          <path d="M10 1l2.4 6.8H20l-5.7 4.1 2.2 6.8L10 14.7l-6.5 4 2.2-6.8L0 7.8h7.6z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  const { t } = useTranslation()

  return (
    <section id="reviews" className="py-24 relative">
      {/* Section orb */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 -translate-y-1/2 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#7e1b60]/20 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d8429d] text-sm font-semibold tracking-[0.2em] uppercase">
            {t('reviews.label')}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3">
            {t('reviews.heading')}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Stars count={5} />
            <span className="text-white/40 text-sm font-medium">{t('reviews.rating')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map(({ name, rating, text, service }) => (
            <div
              key={name}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-[#d8429d]/25 hover:shadow-lg hover:shadow-[#d8429d]/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Top row: stars + service badge */}
              <div className="flex items-center justify-between mb-4">
                <Stars count={rating} />
                <span className="text-xs font-medium text-[#f9a8d4] bg-[#d8429d]/15 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#d8429d]/20">
                  {service}
                </span>
              </div>

              {/* Review text */}
              <p className="text-white/55 text-sm leading-relaxed italic mb-6">
                &ldquo;{text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d8429d] to-[#f9a8d4] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {name[0]}
                </div>
                <span className="font-semibold text-white/80 text-sm">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
