import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold font-sans">{t('home.greeting')}</h1>
      <p className="mt-3 text-gray-500 dark:text-gray-400">{t('home.subtitle')}</p>
    </section>
  )
}