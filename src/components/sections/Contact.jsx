import { motion } from "framer-motion"
import { Mail, Linkedin, Twitter } from "lucide-react"

export default function Contact() {

  const twitterMessage = encodeURIComponent(
    "Hi Ashutosh! I visited your portfolio and would love to connect with you."
  )

  const emailSubject = encodeURIComponent("Opportunity / Collaboration")
  const emailBody = encodeURIComponent(
    "Hi Ashutosh,\n\nI came across your portfolio and would love to connect with you regarding an opportunity or collaboration.\n\nBest regards,"
  )

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 lg:py-10 bg-white overflow-hidden"
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


      {/* CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-md sm:max-w-xl lg:max-w-2xl xl:max-w-3xl px-6">

        {/* HEADER */}
        <div className="text-center mb-5 sm:mb-14">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Let's Connect
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-yellow-400" />

          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Open to internships, freelance, and collaborations.
          </p>

        </div>



        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            rounded-2xl sm:rounded-3xl
            bg-white/70 backdrop-blur-2xl
            border border-white/60
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            p-6 sm:p-8 lg:p-12
            flex flex-col items-center text-center
          "
        >

          {/* IMAGE */}
          <img
            src="/profile.png"
            alt="Ashutosh Mishra"
            className="
              w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32
              object-cover
              rounded-xl
              shadow-md
              ring-2 ring-yellow-400
            "
          />


          {/* NAME */}
          <h3 className="mt-4 text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">
            Ashutosh Mishra
          </h3>


          {/* ROLE */}
          <p className="mt-1 text-sm sm:text-base text-slate-600">
            Frontend Developer • React • Firebase
          </p>



          {/* CTA TEXT */}
          <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
            I'm always open to exciting opportunities and meaningful collaborations.
            <br />
            <span className="font-semibold text-slate-800">
              For fastest response, DM me on Twitter or connect on LinkedIn.
            </span>
          </p>



          {/* BUTTONS */}
          <div className="
            mt-7
            flex flex-col sm:flex-row
            gap-3 sm:gap-4
            w-full sm:w-auto
          ">

            {/* TWITTER */}
            <a
              href={`https://twitter.com/intent/tweet?text=${twitterMessage}&via=kyabolu_`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2
                px-5 py-3
                rounded-xl
                bg-black text-white text-sm sm:text-base
                hover:scale-105 hover:shadow-lg
                transition-all duration-300
              "
            >
              <Twitter size={18} />
              DM on Twitter
            </a>



            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/infoashutosh"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2
                px-5 py-3
                rounded-xl
                bg-blue-600 text-white text-sm sm:text-base
                hover:scale-105 hover:shadow-lg
                transition-all duration-300
              "
            >
              <Linkedin size={18} />
              LinkedIn
            </a>



            {/* EMAIL */}
            <a
              href={`mailto:ashutoshmishra6620@gmail.com?subject=${emailSubject}&body=${emailBody}`}
              className="
                flex items-center justify-center gap-2
                px-5 py-3
                rounded-xl
                bg-slate-800 text-white text-sm sm:text-base
                hover:scale-105 hover:shadow-lg
                transition-all duration-300
              "
            >
              <Mail size={18} />
              Email
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  )
}