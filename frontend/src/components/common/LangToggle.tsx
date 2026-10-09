import { useTranslation } from 'react-i18next'

export default function LangToggle() {
  const { i18n } = useTranslation()
  const isBn = i18n.language === 'bn'
  return (
    <button
      onClick={() => i18n.changeLanguage(isBn ? 'en' : 'bn')}
      className="px-3 py-1 text-sm rounded-md border border-gray-300 dark:border-gray-700"
    >
      {isBn ? 'EN' : 'বাং'}
    </button>
  )
}