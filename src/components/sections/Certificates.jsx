import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi"
import { certificatesData } from "../../data/certificates"

export default function Certificates() {
  const ref = useRef(null)
  const [active, setActive] = useState(null)

  const scroll = (dir) => {
    ref.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    })
  }

  return (
    <section
      id="certificates"
      className="relative py-10 bg-white overflow-hidden"
    >
      {/* GRID BG */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Certificates
          </h2>
          <p className="mt-3 text-slate-600">
            Courses and certifications validating my skills
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-xl shadow"
          >
            <FiChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-xl shadow"
          >
            <FiChevronRight />
          </button>

          <div
            ref={ref}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-6"
          >
            {certificatesData.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -6 }}
                onClick={() => setActive(cert)}
                className="
                  min-w-[280px]
                  rounded-2xl
                  bg-white/55 backdrop-blur-2xl
                  border border-white/60
                  shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                  p-6
                  cursor-pointer
                "
              >
                <div className="h-36 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
                  <img src={cert.image} />
                </div>

                <h3 className="mt-4 font-semibold text-slate-900">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {cert.issuer}
                </p>
                <span className="mt-2 inline-block text-xs text-slate-500">
                  {cert.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {active && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative max-w-3xl w-full rounded-2xl bg-white p-6 shadow-lg">
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
            >
              <FiX size={22} />
            </button>

            <h3 className="text-xl font-semibold text-slate-900">
              {active.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              {active.issuer} • {active.date}
            </p>

            <div className="mt-6 w-full h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center rounded-lg bg-slate-100 overflow-hidden">
              <img
                src={active.image}
                alt={active.title}
                className="
                 max-w-full
                 max-h-full
                 object-contain
                 select-none
                  "
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
