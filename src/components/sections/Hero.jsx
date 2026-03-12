import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* GRID BACKGROUND (VISIBLE BUT SUBTLE) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 min-h-screen flex flex-col lg:flex-row items-center lg:items-center">

        {/* LEFT TEXT */}
        <div className="w-full lg:w-1/2 pt-28 lg:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900"
          >
            Hi, I’m{" "}
            <span className="text-blue-600">Ashutosh Mishra</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-xl font-medium text-slate-700"
          >
            <Typewriter
              options={{
                strings: [
                  "Fullstack AI Developer",
                  "Web Developer",
                  "Computer Science Student",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>

          <ul className="mt-6 space-y-2 text-[15px] text-slate-600">
            <li>• Building clean & modern user interfaces</li>
            <li>• Strong React & JavaScript foundation</li>
            <li>• Learning by building real-world projects</li>
          </ul>

          <p className="mt-6 max-w-xl text-slate-600">
            I’m a 3rd year Computer Science student focused on frontend
            development. I enjoy crafting responsive, accessible and
            performance-focused web interfaces.
          </p>

          {/* STATS */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <div className="rounded-xl bg-white/35 backdrop-blur-xl backdrop-saturate-150 border border-white/40 px-6 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <p className="text-2xl font-bold text-slate-900">10+</p>
              <p className="text-sm text-slate-600">Projects</p>
            </div>
            <div className="rounded-xl bg-white/35 backdrop-blur-xl backdrop-saturate-150 border border-white/40 px-6 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <p className="text-2xl font-bold text-slate-900">150+</p>
              <p className="text-sm text-slate-600">GitHub Commits</p>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET IMAGE */}
        <div className="w-full flex justify-center lg:hidden">
          <img
            src="/profile5.png"
            alt="Ashutosh Mishra"
            className="
              w-70 sm:w-76
              object-contain
              drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]
            "
          />
        </div>
      </div>

      {/* DESKTOP HERO IMAGE */}
      <div className="absolute right-0 bottom-0 z-10 hidden lg:block">
        <img
          src="/profile5.png"
          alt="Ashutosh Mishra"
          className="
            h-[86vh]
            w-auto
            object-contain
            drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]
          "
        />
      </div>
    </section>
  )
}
