'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { REVIEWS } from '../data/reviews'

const INITIAL_COUNT = 6

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-[#d8429d]" viewBox="0 0 20 20">
          <path d="M10 1l2.4 6.8H20l-5.7 4.1 2.2 6.8L10 14.7l-6.5 4 2.2-6.8L0 7.8h7.6z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ name, text, date, verified }: { name: string; text: string; date: string; verified: boolean }) {
  const { t } = useTranslation()
  return (
    <div className="group bg-[#fdf6f9] rounded-3xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <Stars />
        <span className="text-xs font-medium text-gray-400 bg-white px-2.5 py-1 rounded-full border border-gray-100">
          {date}
        </span>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed italic mb-6">&ldquo;{text}&rdquo;</p>

      <div className="flex items-center gap-3 pt-4 border-t border-[#d8429d]/10">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d8429d] to-[#f9a8d4] flex items-center justify-center text-white text-xs font-black shrink-0">
          {name[0]}
        </div>
        <div>
          <span className="font-semibold text-gray-800 text-sm block">{name}</span>
          {verified && (
            <span className="text-[10px] text-[#d8429d] font-medium">{t('reviews.verified')}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ReviewsSection() {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? REVIEWS : REVIEWS.slice(0, INITIAL_COUNT)

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d8429d] text-xs font-bold tracking-[0.3em] uppercase">
            {t('reviews.label')}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 mt-3">
            {t('reviews.heading')}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Stars />
            <span className="text-gray-500 text-sm font-medium">{t('reviews.rating')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} {...review} />
          ))}
        </div>

        {!expanded && (
          <div className="text-center mt-10">
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#d8429d]/30 text-[#d8429d] font-semibold text-sm rounded-full hover:border-[#d8429d] hover:bg-[#fdf0f8] transition-all duration-200"
            >
              {t('reviews.showMore')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {expanded && (
          <div className="text-center mt-10">
            <button
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gray-200 text-gray-500 font-semibold text-sm rounded-full hover:border-gray-300 transition-all duration-200"
            >
              {t('reviews.showLess')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
