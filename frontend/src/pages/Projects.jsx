import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

export default function Projects() {

  const projects = [
    {
      title: "AI Chatbot For Social Platforms",
      description:
        "AI-powered chatbot web application developed using FastAPI, Groq API and intelligent automation.",
      tech: ["Python", "FastAPI", "Groq API", "Render"],
      github: "https://github.com/KishoreKumarDC",
      live: "https://ai-socail-chatbot-86on.onrender.com/",
    },

    {
      title: "Digital Marketing Dashboard",
      description:
        "Analytics dashboard for campaign tracking, ROI analysis and simulations.",
      tech: ["React", "Firebase", "Recharts", "Tailwind"],
      github: "https://github.com/KishoreKumarDC",
      live: "https://digital-marketing-analytics-weef.vercel.app/",
    },

    {
      title: "Plant Disease Detection",
      description:
        "AI-based plant disease detection system using TensorFlow and OpenCV.",
      tech: ["TensorFlow", "OpenCV", "Python"],
      github: "https://github.com/KishoreKumarDC",
      live: "#",
    },

    {
      title: "Life Decision Assistant",
      description:
        "AI-powered web and Android application for life roadmap guidance.",
      tech: ["Flask", "Flutter", "Python"],
      github: "https://github.com/KishoreKumarDC",
      live: "https://life-decision-assistant-4wm1.onrender.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#090214] text-white py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-purple-400 uppercase tracking-[4px]">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured Projects
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.02
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#140b22]/70 backdrop-blur-xl border border-purple-900 rounded-3xl p-8 shadow-2xl hover:border-purple-500 transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-4 py-2 rounded-xl text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

              <div className="flex gap-4 mt-8">

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 bg-black hover:bg-[#1d102d] px-5 py-3 rounded-xl transition duration-300"
                >
                  <FaGithub />
                  GitHub
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 px-5 py-3 rounded-xl transition duration-300"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </motion.a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}