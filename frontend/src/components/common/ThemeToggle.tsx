import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../providers/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const Icon = theme === 'dark' ? Moon : Sun
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      onClick={toggleTheme}
      type="button"
      title={`Switch to ${nextTheme} theme`}
      aria-label={`Switch to ${nextTheme} theme`}
      className="p-2 rounded-md border border-gray-300 dark:border-gray-700"
    >
      <Icon size={16} />
    </button>
  )
}