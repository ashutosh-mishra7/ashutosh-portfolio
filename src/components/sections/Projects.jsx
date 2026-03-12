import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { liveProjects, upcomingProjects } from "../../data/projects"

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-5 bg-white overflow-hidden"
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 space-y-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Projects
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Selected work showcasing real-world problem solving
          </p>
        </div>

        {/* LIVE PROJECTS */}
        <ProjectSection title="Live Projects" data={liveProjects} />

        {/* UPCOMING PROJECTS */}
        <UpcomingSection />

      </div>
    </section>
  )
}

/* ================= LIVE PROJECTS ================= */

function ProjectSection({ title, data }) {
  const ref = useRef(null)

  const scroll = (dir) => {
    ref.current.scrollBy({
      left: dir === "left" ? -360 : 360,
      behavior: "smooth",
    })
  }

  return (
    <div>

      {/* SECTION TITLE */}
      <div className="mb-8 flex items-center gap-3">
        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>
        <div className="h-[2px] w-10 bg-blue-600 rounded-full" />
      </div>

      <div className="relative">

        {/* LEFT ARROW */}
        <button
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-xl shadow"
        >
          <FiChevronLeft />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scroll("right")}
          className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-xl shadow"
        >
          <FiChevronRight />
        </button>

        {/* CAROUSEL */}
        <div
          ref={ref}
          className="flex gap-10 overflow-x-auto scrollbar-hide scroll-smooth pb-6"
        >
          {data.map((project) => (
            <FlipCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </div>
  )
}

/* ================= PROJECT CARD ================= */

function FlipCard({ project }) {

  const [flip, setFlip] = useState(false)

  return (
    <div
      className="relative min-w-[340px] h-[390px] cursor-pointer"
      onClick={() => setFlip(!flip)}
    >

      {/* SUBTLE GLOW */}
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_65%)] pointer-events-none" />

      <motion.div
        animate={{ rotateY: flip ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >

        {/* FRONT */}
        <div
          className="
            absolute inset-0 rounded-2xl
            bg-white/60 backdrop-blur-2xl backdrop-saturate-150
            border border-white/60
            shadow-[0_30px_70px_rgba(0,0,0,0.18)]
            p-8
            flex flex-col justify-center
            [backface-visibility:hidden]
          "
        >

          <h4 className="text-xl font-semibold text-slate-900">
            {project.name}
          </h4>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            {project.short}
          </p>

          <span className="mt-8 text-xs text-slate-500">
            Tap to flip 👆
          </span>

        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0 rounded-2xl
            bg-white/65 backdrop-blur-2xl backdrop-saturate-150
            border border-white/60
            shadow-[0_30px_70px_rgba(0,0,0,0.18)]
            p-6
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
            flex flex-col
          "
        >

          {/* FIXED IMAGE */}
          <div className="w-full h-[160px] overflow-hidden rounded-lg">
            <img
              src={project.thumbnail}
              alt={project.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <h5 className="mt-4 font-semibold text-slate-900">
            {project.name}
          </h5>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-grow">
            {project.description}
          </p>

          {/* FIXED BUTTONS */}
          <div className="mt-4 flex gap-3">

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow"
            >
              LIVE
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow"
            >
              GitHub
            </a>

          </div>

        </div>

      </motion.div>

    </div>
  )
}

/* ================= UPCOMING PROJECTS ================= */

function UpcomingSection() {
  return (
    <div>

      <div className="mb-8 flex items-center gap-3">
        <h3 className="text-2xl font-bold text-slate-900">
          Upcoming Projects
        </h3>
        <div className="h-[2px] w-10 bg-yellow-400 rounded-full" />
      </div>

      <div className="flex gap-10 overflow-x-auto scrollbar-hide pb-6">

        {upcomingProjects.map((project) => (
          <motion.div
            key={project.id}
            animate={{ opacity: [0.45, 0.7, 0.45] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="
              min-w-[300px]
              rounded-2xl
              bg-white/35 backdrop-blur-2xl
              border border-white/50
              shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              p-6
            "
          >

            <h4 className="text-lg font-semibold text-slate-800">
              {project.name}
            </h4>

            <p className="mt-2 text-sm text-slate-600">
              In progress — launching soon
            </p>

          </motion.div>
        ))}

      </div>

    </div>
  )
}