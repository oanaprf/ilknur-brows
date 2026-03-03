'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const GALLERY_ITEMS = [
  { id: 1, bg: 'bg-pink-100', beforeAfter: true },
  { id: 2, bg: 'bg-rose-100', beforeAfter: false },
  { id: 3, bg: 'bg-pink-200', beforeAfter: true },
  { id: 4, bg: 'bg-fuchsia-100', beforeAfter: false },
  { id: 5, bg: 'bg-pink-50', beforeAfter: true },
  { id: 6, bg: 'bg-rose-200', beforeAfter: false },
  { id: 7, bg: 'bg-pink-100', beforeAfter: true },
  { id: 8, bg: 'bg-fuchsia-50', beforeAfter: false },
  { id: 9, bg: 'bg-rose-100', beforeAfter: true },
]

function ZoomIcon() {
  return (
    <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="none">
      <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21L28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 14H18M14 10V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function GallerySection() {
  const { t } = useTranslation()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d8429d] text-sm font-semibold tracking-[0.2em] uppercase">
            {t('gallery.label')}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            {t('gallery.heading')}
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-md mx-auto">
            {t('gallery.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden cursor-pointer h-[220px] ${item.bg} shadow-sm`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Placeholder brow silhouette */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg viewBox="0 0 120 40" className="w-3/4">
                  <path d="M5 30 Q30 8 60 12 Q90 8 115 30" stroke="#d8429d" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </div>

              {item.beforeAfter && (
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#d8429d] text-white text-xs font-bold rounded-full tracking-wide">
                  {t('gallery.beforeAfter')}
                </div>
              )}

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-[#d8429d]/70 flex items-center justify-center transition-all duration-300 ${
                  hovered === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <ZoomIcon />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#d8429d] text-white font-semibold rounded-full hover:bg-[#c2357f] transition-all duration-200 shadow-md"
          >
            {t('gallery.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
