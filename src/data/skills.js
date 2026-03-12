import {
  FaJava,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,        // ✅ VS Code alternative
} from "react-icons/fa"

import {
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiFigma,
  SiCanva,
} from "react-icons/si"

export const skillsData = [
  {
    key: "languages",
    title: "Programming Languages",
    items: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJs },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    key: "frontend",
    title: "Frontend Technologies",
    items: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Responsive Design" },
      { name: "Web Accessibility" },
    ],
  },
  {
    key: "frameworks",
    title: "Frameworks & Libraries",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Typewriter Effect" },
      { name: "React Router" },
      { name: "Fetch API" },
    ],
  },
  {
    key: "backend",
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js" },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    key: "tools",
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaCode },   // ✅ FIXED
      { name: "Firebase", icon: SiFirebase },
      { name: "Postman", icon: SiPostman },
      { name: "Netlify", icon: SiNetlify },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    key: "uiux",
    title: "UI / UX Tools",
    items: [
      { name: "Figma", icon: SiFigma },
      { name: "Canva", icon: SiCanva },
      { name: "Wireframing" },
      { name: "Design Systems" },
    ],
  },
  {
    key: "soft",
    title: "Soft Skills",
    items: [
      { name: "Problem Solving" },
      { name: "Communication" },
      { name: "Team Collaboration" },
      { name: "Time Management" },
      { name: "Leadership" },
    ],
  },
]
