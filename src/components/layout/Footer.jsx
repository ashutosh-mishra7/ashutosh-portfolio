import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6"
import { SiGeeksforgeeks } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3 items-center">
          {/* LEFT */}
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Ashutosh.
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Frontend Developer • Building modern web experiences
            </p>
          </div>

          {/* CENTER */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
            {["Home", "Skills", "Projects", "Education", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-slate-900 transition"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end gap-5 text-slate-600">
            <a
              href="https://github.com/ashutosh-mishra7"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://x.com/kyabolu_"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <FaXTwitter size={20} />
            </a>

            <a
              href="https://linkedin.com/infoashutosh/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://www.geeksforgeeks.org/profile/infoashutosh"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <SiGeeksforgeeks size={20} />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-slate-200" />

        {/* COPYRIGHT */}
        <p className="text-center text-xs text-slate-500">
          © 2026 Ashutosh Mishra. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
