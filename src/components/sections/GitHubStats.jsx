import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { fetchGitHubStats } from "../../utils/api"
import { FaGithub } from "react-icons/fa"

export default function GitHubStats() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    fetchGitHubStats("ashutosh-mishra7")
      .then(setStats)
      .catch(console.error)
  }, [])

  return (
    <section
      id="github"
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

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900">
            GitHub Activity
          </h2>
          <p className="mt-3 text-slate-600">
            Open-source contributions and coding consistency
          </p>
        </div>

        {/* STATS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Repositories" value={stats?.repos} />
          <StatCard title="GitHub Streak" value={stats?.streak ? `${stats.streak} Days` : "—"} />
          <StatCard title="Followers" value={stats?.followers} />
          <StatCard title="Consistency" value="Active" />
        </div>

        {/* FOOTER */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/ashutosh-mishra7"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow"
          >
            <FaGithub />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}

/* ================= STAT CARD ================= */

function StatCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
        rounded-2xl
        bg-white/60 backdrop-blur-2xl
        border border-white/60
        shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        p-6
        text-center
      "
    >
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-2 text-3xl font-bold text-slate-900">
        {value ?? "—"}
      </p>
    </motion.div>
  )
}