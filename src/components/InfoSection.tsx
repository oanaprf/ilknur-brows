'use client'

import { useTranslation } from 'react-i18next'

interface ScheduleDay {
  day: string
  hours: string
  closed?: boolean
}

export default function InfoSection() {
  const { t } = useTranslation()

  const schedule: ScheduleDay[] = [
    { day: t('info.schedule.days.monday'), hours: t('info.schedule.hours.weekday') },
    { day: t('info.schedule.days.tuesday'), hours: t('info.schedule.hours.weekday') },
    { day: t('info.schedule.days.wednesday'), hours: t('info.schedule.hours.weekday') },
    { day: t('info.schedule.days.thursday'), hours: t('info.schedule.hours.weekday') },
    { day: t('info.schedule.days.friday'), hours: t('info.schedule.hours.friday') },
    { day: t('info.schedule.days.saturday'), hours: t('info.schedule.hours.closed'), closed: true },
    { day: t('info.schedule.days.sunday'), hours: t('info.schedule.hours.closed'), closed: true },
  ]

  return (
    <section id="info" className="py-24 bg-[#fdf6f9]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d8429d] text-xs font-bold tracking-[0.3em] uppercase">
            {t('info.label')}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 mt-3">
            {t('info.schedule.title')}
          </h2>
        </div>

        <div className="flex justify-center">
          <ul className="w-full max-w-sm">
            {schedule.map(({ day, hours, closed }) => (
              <li
                key={day}
                className="flex items-center justify-between py-3 border-b border-gray-200/60 last:border-0"
              >
                <span className={`text-sm ${closed ? 'text-gray-400' : 'text-gray-700'}`}>
                  {day}
                </span>
                <span className={`text-sm font-medium ${closed ? 'text-gray-400' : 'text-gray-900'}`}>
                  {hours}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
