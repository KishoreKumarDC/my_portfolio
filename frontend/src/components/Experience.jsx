import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaBriefcase,
  FaCertificate,
  FaAward,
  FaLaptopCode
} from "react-icons/fa";

export default function Experience() {

  /* =========================
      STATE FOR CERTIFICATE VIEW
  ========================= */
  const [selectedCert, setSelectedCert] = useState(null);

  /* =========================
      INTERNSHIPS
  ========================= */

  const internships = [
    {
      company: "MR TechLab",
      role: "AI & Full Stack Development Intern",
      duration: "Jan 2026 – May 2026",
      description:
        "Worked on NextGen AppBots domain creating AI-powered web applications and Android APK systems using modern AI frameworks and full stack technologies.",
    },
    {
      company: "Knowx Beyond Innovations",
      role: "AI, Data Science & ML Intern",
      duration: "Mar 2023 – Jun 2023",
      description:
        "Worked on Machine Learning algorithms, AI systems and real-time industrial problem solving with teamwork and project collaboration.",
    },
  ];

  /* =========================
      CERTIFICATIONS (UPDATED)
  ========================= */

  const certificates = [
    {
      name: "NextGen AppBots - Mr TechLab LLP",
      image: "/certificates/nextgen.png",
    },
    {
      name: "Python, ML & Cloud Training — Knowx Beyond Innovations",
      image: "/certificates/knowx certificate 1.jpg",
    },
    {
      name: "Artificial Intelligence, Machine Learning, TensorFlow & Deep Learning",
      image: "/certificates/knowx certificate 2.jpg",
    },
    {
      name: "Green Skills & Artificial Intelligence — Edunet Foundation (Shell)",
      image: "/certificates/edunet.png",
    },
  ];

  /* =========================
      SKILLS
  ========================= */

  const skills = [
    "Core Java",
    "Python",
    "React.js",
    "Spring Boot",
    "JavaScript",
    "Flutter",
    "TensorFlow",
    "OpenCV",
    "Firebase",
    "MySQL",
    "FastAPI",
    "HTML & CSS",
  ];

  return (
    <section
      id="experience"
      className="
        bg-[#05010f]
        text-white
        py-24
        px-6
        overflow-hidden
        relative
      "
    >

      {/* Glow Effects */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 uppercase tracking-[4px]">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Internship & Certifications
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg text-center">
            Hands-on experience in AI, Machine Learning, Full Stack Development, Cloud Technologies and modern web application development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* =========================
              INTERNSHIPS
          ========================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#140b22]/70 backdrop-blur-xl border border-purple-900 rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-3xl">
                <FaBriefcase />
              </div>
              <h3 className="text-3xl font-bold">Internships</h3>
            </div>

            {internships.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-black/40 border border-purple-900 rounded-2xl p-6 mb-6 hover:border-purple-500 transition duration-300"
              >
                <h4 className="text-2xl font-bold">{item.role}</h4>
                <p className="text-purple-400 mt-2">{item.company}</p>
                <p className="text-gray-500 text-sm mt-1">{item.duration}</p>
                <p className="text-gray-300 mt-5 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* =========================
              CERTIFICATIONS (CLICKABLE)
          ========================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#140b22]/70 backdrop-blur-xl border border-purple-900 rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-3xl">
                <FaCertificate />
              </div>
              <h3 className="text-3xl font-bold">Certifications</h3>
            </div>

            <div className="grid gap-5">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center gap-4 bg-black/40 border border-purple-900 rounded-2xl p-5 hover:border-purple-500 transition duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <FaAward />
                  </div>

                  <p className="text-lg font-medium">{cert.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =========================
            SKILLS
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#140b22]/70 border border-purple-900 rounded-3xl p-8 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-3xl">
              <FaLaptopCode />
            </div>
            <h3 className="text-3xl font-bold">Technical Skills</h3>
          </div>

          <div className="flex flex-wrap gap-5">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black/40 border border-purple-900 hover:border-purple-500 px-6 py-4 rounded-2xl text-lg font-medium transition duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* =========================
          MODAL (CERTIFICATE VIEW)
      ========================= */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-[#140b22] p-4 rounded-2xl max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert.image}
              alt="Certificate"
              className="w-full rounded-xl"
            />

            <button
              onClick={() => setSelectedCert(null)}
              className="mt-4 px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
}