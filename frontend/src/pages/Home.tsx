import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl font-bold font-sans">{t('home.name')}</h1>
      <p className="mt-3 text-gray-500 dark:text-gray-400">{t('home.intro')}</p>

      <h2 className="mt-10 text-2xl font-semibold">{t('home.interestsTitle')}</h2>
      <p className="mt-3 text-gray-500 dark:text-gray-400">{t('home.interests')}</p>

      <h2 className="mt-10 text-2xl font-semibold">{t('home.connectTitle')}</h2>
      <ul className="mt-3 space-y-2">
        <li>
          <a
            href="https://github.com/RUHAN-HOSSAIN"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ruhan-hossain-61a8572b9"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://x.com/RuhanHossain795"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            X
          </a>
        </li>
      </ul>
    </section>
  )
}