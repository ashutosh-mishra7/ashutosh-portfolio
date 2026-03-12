import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { skillsData } from "../../data/skills"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

export default function Skills() {
  const scrollRef = useRef(null)
  const [active, setActive] = useState("all")

  const categories =
    active === "all"
      ? skillsData
      : skillsData.filter((c) => c.key === active)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    })
  }

  return (
    <section id="skills" className="relative py-10 bg-white overflow-hidden">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900"
          >
            Skills & Expertise
          </motion.h2>
          <p className="mt-3 text-slate-600">
            Technologies, tools and skills I use to build modern applications
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <FilterTab active={active} setActive={setActive} value="all" label="All" />
          {skillsData.map((cat) => (
            <FilterTab
              key={cat.key}
              active={active}
              setActive={setActive}
              value={cat.key}
              label={cat.title}
            />
          ))}
        </div>

        {/* CAROUSEL */}
        <div className="relative mt-16">
          {/* ARROWS (DESKTOP) */}
          {categories.length > 5 && (
            <>
              <button
                onClick={() => scroll("left")}
                className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/60 backdrop-blur-xl border border-white/40 shadow"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={() => scroll("right")}
                className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/60 backdrop-blur-xl border border-white/40 shadow"
              >
                <FiChevronRight />
              </button>
            </>
          )}

          {/* SCROLL AREA (SCROLLBAR HIDDEN ✅) */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
          >
            {categories.map((category) => (
              <CategoryCard key={category.key} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- COMPONENTS ---------------- */

function CategoryCard({ category }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
        min-w-[280px]
        max-w-[280px]
        rounded-2xl
        bg-white/30
        backdrop-blur-2xl
        backdrop-saturate-150
        border border-white/40
        shadow-[0_12px_35px_rgba(0,0,0,0.10)]
        p-6
      "
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-4">
        {category.title}
      </h3>

      <ul className="space-y-2">
        {category.items.map((item, i) => {
          const Icon = item.icon
          return (
            <li
              key={i}
              className="flex items-center gap-3 text-sm text-slate-700"
            >
              {Icon && <Icon className="text-blue-600" />}
              <span>{item.name}</span>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}

function FilterTab({ active, setActive, value, label }) {
  return (
    <button
      onClick={() => setActive(value)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition
        ${
          active === value
            ? "bg-blue-600 text-white"
            : "bg-white/40 backdrop-blur-xl border border-white/40 text-slate-700"
        }`}
    >
      {label}
    </button>
  )
}
