import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { NAV_LINKS } from '../../constants/navLinks'
import ThemeToggle from '../common/ThemeToggle'
import LangToggle from '../common/LangToggle'

import logo from "../../assets/favicon.png"

export default function Navbar() {
  const { t } = useTranslation()
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 h-14">
        <Link to="/" className=" flex items-center gap-3">
          <div>
            <img src={logo} alt="Logo" className="h-10 w-10" />
          </div>
          <span className="leading-none font-mono tracking-widest font-extralight">Ruhan <br /> Hossain</span>
        </Link>
        <ul className="hidden md:flex gap-6 text-sm">
          {NAV_LINKS.map((l) => (
            <li key={l.to}><Link to={l.to}>{t(l.key)}</Link></li>
          ))}
        </ul>
        <div className="flex gap-2">
          <LangToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}