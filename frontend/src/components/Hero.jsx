import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#05010f] text-white px-6">

      {/* Glow Effects */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-purple-400 tracking-[4px] uppercase mb-4">
            Hello I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Kishore Kumar DC
          </h1>

          <h2 className="mt-6 text-2xl md:text-3xl text-gray-300 font-semibold">
                Full Stack Developer
            <span className="text-purple-400"> | AI Enthusiast</span>
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
            I build AI-powered modern web applications using
            Python, java, javascript, HTML, CSS, Firebase,
            React, Spring Boot, MySQL, cloud technologies,
            and intelligent automation systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <motion.a
  whileHover={{
    scale: 1.05,
    boxShadow: "0 0 25px rgba(168,85,247,0.5)"
  }}
  whileTap={{ scale: 0.9 }}
  href="/KISHORE-KUMAR-RESUME.pdf"
  download="KISHORE-KUMAR-RESUME.pdf"
  className="
    flex items-center gap-3
    bg-purple-500 hover:bg-purple-600
    px-7 py-4 rounded-2xl
    font-semibold transition duration-300
    shadow-lg shadow-purple-500/20
  "
>
  <FaDownload />
  Download Resume
</motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
                borderColor: "#c084fc"
              }}
              whileTap={{ scale: 0.9 }}
              href="#projects"
              className="flex items-center gap-3 border border-purple-700 hover:bg-purple-500/10 px-7 py-4 rounded-2xl font-semibold transition duration-300"
            >
              View Projects
              <FaArrowRight />
            </motion.a>

          </div>

          {/* Social */}
          <div className="flex gap-6 mt-10">

            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              href="https://github.com/KishoreKumarDC"
              target="_blank"
              className="w-14 h-14 rounded-2xl bg-[#140b22] border border-purple-900 flex items-center justify-center text-2xl hover:text-purple-400 hover:border-purple-500 transition duration-300"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              href="http://www.linkedin.com/in/kishore-kumar-dc"
              target="_blank"
              className="w-14 h-14 rounded-2xl bg-[#140b22] border border-purple-900 flex items-center justify-center text-2xl hover:text-purple-400 hover:border-purple-500 transition duration-300"
            >
              <FaLinkedin />
            </motion.a>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="bg-[#140b22]/70 backdrop-blur-xl border border-purple-900 rounded-3xl p-6 shadow-2xl"
          >

            <img
              src="/nanu.jpeg"
              alt="Developer"
              className="w-72 md:w-96"
            />

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}