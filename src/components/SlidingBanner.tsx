'use client'

const SLIDES = [
  { shade: 'from-pink-100 to-rose-100', brow: '#d8429d' },
  { shade: 'from-fuchsia-50 to-pink-100', brow: '#e879a8' },
  { shade: 'from-rose-100 to-pink-50', brow: '#d8429d' },
  { shade: 'from-pink-50 to-fuchsia-100', brow: '#f472b6' },
  { shade: 'from-rose-50 to-rose-100', brow: '#d8429d' },
  { shade: 'from-fuchsia-100 to-pink-50', brow: '#e879a8' },
  { shade: 'from-pink-100 to-fuchsia-50', brow: '#d8429d' },
]

function BrowSVG({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 120 30" className="w-2/3 opacity-30" fill="none">
      <path
        d="M5 22 Q25 4 60 8 Q95 4 115 22"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Slide({ shade, brow }: { shade: string; brow: string }) {
  return (
    <div
      className={`relative shrink-0 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-[2rem] overflow-hidden bg-gradient-to-br ${shade} flex items-center justify-center`}
    >
      <div className="flex flex-col items-center gap-3">
        <BrowSVG color={brow} />
        <BrowSVG color={brow} />
      </div>
    </div>
  )
}

const ALL_SLIDES = [...SLIDES, ...SLIDES]

export default function SlidingBanner() {
  return (
    <div className="overflow-hidden py-6 pb-14">
      <div className="flex gap-4 animate-marquee w-max">
        {ALL_SLIDES.map((s, i) => (
          <Slide key={i} shade={s.shade} brow={s.brow} />
        ))}
      </div>
    </div>
  )
}
