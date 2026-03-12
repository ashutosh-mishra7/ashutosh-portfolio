import Header from "./components/layout/Header"
import Hero from "./components/sections/Hero"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import Education from "./components/sections/Education"
import Certificates from "./components/sections/Certificates"
import GitHubStats from "./components/sections/GitHubStats"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <GitHubStats />
      <Contact />
      <Footer />
    </>
  )
}
