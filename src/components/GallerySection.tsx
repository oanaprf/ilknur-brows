'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const GALLERY_ITEMS = [
  { id: 1, tag: 'beforeAfter', shade: 'from-pink-50 to-pink-100' },
  { id: 2, tag: null, shade: 'from-rose-50 to-rose-100' },
  { id: 3, tag: 'beforeAfter', shade: 'from-fuchsia-50 to-pink-50' },
  { id: 4, tag: null, shade: 'from-pink-100 to-fuchsia-100' },
  { id: 5, tag: 'beforeAfter', shade: 'from-rose-100 to-pink-50' },
  { id: 6, tag: null, shade: 'from-pink-50 to-rose-50' },
  { id: 7, tag: 'beforeAfter', shade: 'from-fuchsia-100 to-pink-100' },
  { id: 8, tag: null, shade: 'from-pink-50 to-fuchsia-50' },
  { id: 9, tag: 'beforeAfter', shade: 'from-rose-50 to-pink-100' },
]

function BrowPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-20">
      <svg viewBox="0 0 120 30" className="w-3/4">
        <path
          d="M5 22 Q25 4 60 8 Q95 4 115 22"
          stroke="#d8429d"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <svg viewBox="0 0 120 30" className="w-3/4 mt-2">
        <path
          d="M5 22 Q25 4 60 8 Q95 4 115 22"
          stroke="#d8429d"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default function GallerySection() {
  const { t } = useTranslation()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 bg-[#fdf6f9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d8429d] text-xs font-bold tracking-[0.3em] uppercase">
            {t('gallery.label')}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 mt-3">
            {t('gallery.heading')}
          </h2>
          <p className="text-gray-400 mt-4 text-base max-w-md mx-auto">
            {t('gallery.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden cursor-pointer h-[200px] sm:h-[240px] bg-gradient-to-br ${item.shade}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <BrowPlaceholder />

              {item.tag && (
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#d8429d] text-white text-xs font-bold rounded-full tracking-wide z-10">
                  {t('gallery.beforeAfter')}
                </div>
              )}

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-[#d8429d]/75 flex items-center justify-center transition-all duration-300 ${
                  hovered === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-white text-center">
                  <svg
                    className="w-9 h-9 mx-auto mb-2"
                    viewBox="0 0 36 36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="15" cy="15" r="10" />
                    <path d="M23 23L32 32" strokeLinecap="round" />
                    <path d="M11 15H19M15 11V19" strokeLinecap="round" />
                  </svg>
                  <span className="text-xs font-semibold tracking-wide">Ver foto</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/ilknur_brows"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#d8429d] text-white font-semibold text-sm rounded-full hover:bg-[#c2357f] transition-all duration-200 shadow-lg shadow-[#d8429d]/25"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            {t('gallery.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
