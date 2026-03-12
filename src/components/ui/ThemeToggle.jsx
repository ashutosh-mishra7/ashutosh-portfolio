import { useEffect, useState } from "react"
import { FiSun, FiMoon } from "react-icons/fi"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "dark") {
      document.documentElement.classList.add("dark")
      setDark(true)
    }
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    const isDark = document.documentElement.classList.contains("dark")
    localStorage.setItem("theme", isDark ? "dark" : "light")
    setDark(isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        h-10 w-10 flex items-center justify-center rounded-full
        glass
        text-slate-700 hover:text-blue-600
        transition
        dark:text-yellow-400 dark:hover:text-yellow-300
      "
    >
      {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )
}
