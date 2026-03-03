'use client'

import { useTranslation } from 'react-i18next'

const REVIEWS = [
  {
    name: 'Ana M.',
    rating: 5,
    text: 'Absolut îndrăgostită de sprâncenele mele! Ilknur este o adevărată artistă — a ascultat exact ce îmi doream și a depășit toate așteptările. Microbladingul arată complet natural.',
    service: 'Microblading',
  },
  {
    name: 'Laura D.',
    rating: 5,
    text: 'Laminarea sprâncenelor mi-a schimbat viața. Înainte petreceam 20 de minute dimineața, acum mă trezesc și sunt perfecte. 10/10 recomand!',
    service: 'Brow Lamination',
  },
  {
    name: 'Ioana P.',
    rating: 5,
    text: 'Eram nervoasă în privința powder brows, dar Ilknur mi-a explicat totul și rezultatul este uimitor. Atât de natural și delicat. Am primit atâtea complimente.',
    service: 'Powder Brows',
  },
  {
    name: 'Mihaela T.',
    rating: 5,
    text: 'Studio profesionist și o artistă incredibil de talentată. Combo brows mi-au dat atâta încredere. Machiaj semipermanent făcut cu adevărat bine.',
    service: 'Combo Brows',
  },
  {
    name: 'Cristina B.',
    rating: 5,
    text: 'Cei mai bine cheltuiți bani pe frumusețe. Ilknur are o atenție incredibilă la detalii și ia timp să înțeleagă forma feței tale. Sprâncenele mele sunt perfecte.',
    service: 'Microblading',
  },
  {
    name: 'Diana R.',
    rating: 5,
    text: 'Am făcut cursul de microblading cu Ilknur și am învățat mai mult decât mă așteptam. Acum am propria mea afacere. Îi mulțumesc din suflet!',
    service: 'Curs',
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
            <Stars count={5} />
            <span className="text-gray-500 text-sm font-medium">{t('reviews.rating')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map(({ name, rating, text, service }) => (
            <div
              key={name}
              className="group bg-[#fdf6f9] rounded-3xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Stars count={rating} />
                <span className="text-xs font-medium text-[#d8429d] bg-white px-2.5 py-1 rounded-full border border-[#d8429d]/15">
                  {service}
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic mb-6">&ldquo;{text}&rdquo;</p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#d8429d]/10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d8429d] to-[#f9a8d4] flex items-center justify-center text-white text-xs font-black shrink-0">
                  {name[0]}
                </div>
                <span className="font-semibold text-gray-800 text-sm">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
