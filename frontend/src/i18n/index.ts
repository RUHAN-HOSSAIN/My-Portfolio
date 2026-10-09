import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import bn from './locales/bn.json'

const initial = localStorage.getItem('lang') === 'bn' ? 'bn' : 'en' // default: English

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, bn: { translation: bn } },
  lng: initial,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

document.documentElement.lang = initial
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng)
  document.documentElement.lang = lng
})

export default i18n