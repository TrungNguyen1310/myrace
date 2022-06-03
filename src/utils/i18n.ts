import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import language
import common_en from 'locale/en/lang.json'
import common_de from 'locale/de/lang.json'

// Add resource
export const defaultNS = 'common'
export const resources = {
  en: {
    common: common_en
  },
  de: {
    common: common_de
  }
} as const

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    ns: ['common'],
    defaultNS,
    resources,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
