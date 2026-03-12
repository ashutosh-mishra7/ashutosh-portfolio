import { useState } from "react"
import { motion } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
// import ThemeToggle from "../ui/ThemeToggle"


const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 pt-3"
    >
      <div className="mx-auto max-w-7xl">
        {/* GLASS CONTAINER */}
        <div
          className="
            relative overflow-hidden
            rounded-xl sm:rounded-2xl

            bg-white/35
            backdrop-blur-2xl
            backdrop-saturate-150

            border border-white/40
            shadow-[0_10px_35px_rgba(0,0,0,0.10)]
          "
        >
          {/* iOS highlight */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />

          {/* MAIN BAR */}
          <div className="relative flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
            {/* LOGO */}
            <div className="text-lg sm:text-xl font-extrabold text-slate-900">
              Ashutosh<span className="text-blue-600">.</span>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-blue-600 transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* RIGHT */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Resume (desktop only) */}
              <a
                href="/resume.pdf"
                className="
                  hidden md:inline-flex
                  items-center justify-center
                  rounded-lg
                  bg-blue-600
                  px-4 py-2
                  text-sm font-semibold text-white
                  hover:bg-blue-700
                  transition
                "
              >
                Resume
              </a>

              {/*Download feature */}

              {/* <a
                href="/resume.pdf"
                download
                className="
                    hidden md:inline-flex
                    items-center justify-center
                    rounded-lg
                    bg-blue-600
                    px-4 py-2
                    text-sm font-semibold text-white
                    hover:bg-blue-700
                    transition
                    "
              >
                Resume
              </a> */}

              {/* MOBILE MENU TOGGLE */}
              <button
                onClick={() => setOpen(!open)}
                className="
                  md:hidden
                  flex items-center justify-center
                  rounded-lg
                  p-2
                  text-2xl
                  text-slate-800
                  hover:bg-white/40
                  transition
                "
              >
                {open ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-white/30"
            >
              <div className="flex flex-col gap-4 px-4 sm:px-6 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-slate-700 hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                ))}

                {/* Resume (mobile) */}
                <a
                  href="/resume.pdf"
                  className="
                    mt-2 rounded-lg bg-blue-600
                    px-4 py-2 text-center
                    text-sm font-semibold text-white
                  "
                >
                  Resume
                </a>

                {/*Download feature */}

                {/* <a
                  href="/resume.pdf"
                  download
                  className="
                  mt-2 rounded-lg bg-blue-600
                    px-4 py-2 text-center
                   text-sm font-semibold text-white
                   "
                   >
                   Resume
                  </a> */}

              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  )
}
