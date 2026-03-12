import { motion } from "framer-motion"
import { educationData } from "../../data/education"

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-10 bg-white overflow-hidden"
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

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Education & Achievements
          </h2>
          <p className="mt-3 text-slate-600">
            Academic background and key milestones
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-slate-200" />

          <div className="space-y-16">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex gap-10"
              >
                {/* DOT */}
                <div className="relative z-10 mt-2 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold shadow">
                  {index + 1}
                </div>

                {/* CARD */}
                <div
                  className="
                    flex-1 rounded-2xl
                    bg-white/60 backdrop-blur-2xl backdrop-saturate-150
                    border border-white/60
                    shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                    p-8
                  "
                >
                  <span className="text-sm font-medium text-blue-600">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    {item.institution} • {item.place}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc list-inside">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
