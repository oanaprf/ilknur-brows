import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '@/locales/en/common.json'
import ro from '@/locales/ro/common.json'

const i18n = i18next.createInstance()

i18n.use(initReactI18next).init({
  resources: {
    en: { common: en },
    ro: { common: ro },
  },
  lng: 'ro',
  fallbackLng: 'ro',
  defaultNS: 'common',
  interpolation: { escapeValue: false },
})

export default i18n
