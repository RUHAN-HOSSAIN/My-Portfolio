import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()
  return <div className="min-h-screen grid place-items-center">{t('common.notFound')}</div>
}