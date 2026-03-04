'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { useTranslation } from 'react-i18next'
import loc1 from '../../public/images/location/location-1.jpg'
import loc2 from '../../public/images/location/location-2.jpg'
import loc3 from '../../public/images/location/location-3.jpg'
import loc4 from '../../public/images/location/location-4.jpg'
import loc5 from '../../public/images/location/location-5.jpg'
import loc6 from '../../public/images/location/location-6.jpg'
import loc7 from '../../public/images/location/location-7.jpg'

interface LocationImage {
  src: StaticImageData
  alt: string
}

const LOCATION_IMAGES: LocationImage[] = [
  { src: loc1, alt: 'Studio view 1' },
  { src: loc2, alt: 'Studio view 2' },
  { src: loc3, alt: 'Studio view 3' },
  { src: loc4, alt: 'Studio view 4' },
  { src: loc5, alt: 'Studio view 5' },
  { src: loc6, alt: 'Studio view 6' },
  { src: loc7, alt: 'Studio view 7' },
]

export default function LocationSection() {
  const { t } = useTranslation()
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d8429d] text-xs font-bold tracking-[0.3em] uppercase">
            {t('location.label')}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 mt-3">
            {t('location.heading')}
          </h2>
          <p className="text-gray-400 mt-4 text-base max-w-md mx-auto">
            {t('location.description')}
          </p>
        </div>

        {/* Top row: 3 equal images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {LOCATION_IMAGES.slice(0, 3).map((img, idx) => (
            <div
              key={idx}
              className="relative h-[220px] sm:h-[260px] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setLightbox(idx)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom row: 4 equal images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {LOCATION_IMAGES.slice(3).map((img, idx) => (
            <div
              key={idx + 3}
              className="relative h-[160px] sm:h-[190px] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setLightbox(idx + 3)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 mb-20 h-px bg-gradient-to-r from-transparent via-[#f9a8d4] to-transparent" />

        {/* Map + address — centered */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden h-72 shadow-sm">
            <iframe
              title="Ilknur Brows location"
              src="https://maps.google.com/maps?q=Bulevardul+Eroilor+11,+Voluntari,+077190&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '288px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#d8429d]/10 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#d8429d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#d8429d] mb-1">{t('location.addressLabel')}</p>
                <p className="text-gray-800 font-medium">{t('location.address')}</p>
                <p className="text-gray-500 text-sm mt-0.5">{t('location.parkingNote')}</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Bulevardul+Eroilor+11,Voluntari,077190"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 shrink-0 px-6 py-3 bg-[#d8429d] text-white text-sm font-semibold rounded-full hover:bg-[#b8358a] transition-colors"
            >
              {t('location.openMaps')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-white text-3xl leading-none hover:text-[#d8429d] transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="absolute left-4 text-white text-3xl hover:text-[#d8429d] transition-colors px-2"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + LOCATION_IMAGES.length) % LOCATION_IMAGES.length) }}
            aria-label="Previous"
          >
            ‹
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[85vh] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={LOCATION_IMAGES[lightbox].src}
              alt={LOCATION_IMAGES[lightbox].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            className="absolute right-4 text-white text-3xl hover:text-[#d8429d] transition-colors px-2"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % LOCATION_IMAGES.length) }}
            aria-label="Next"
          >
            ›
          </button>
          <div className="absolute bottom-5 text-white/60 text-sm">
            {lightbox + 1} / {LOCATION_IMAGES.length}
          </div>
        </div>
      )}
    </section>
  )
}
