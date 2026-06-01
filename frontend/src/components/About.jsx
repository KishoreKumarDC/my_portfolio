import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaGithub,
  FaLaptopCode
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
  SiPython,
  SiTensorflow
} from "react-icons/si";

export default function About() {

  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Python", icon: <SiPython /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section
      id="about"
      className="bg-black text-white py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >

          <p className="text-purple-400 uppercase tracking-[4px]">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Passionate Full Stack Developer
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#140b22]/70 backdrop-blur-xl border border-purple-900 rounded-3xl p-8 shadow-2xl"
          >

            <div className="flex items-center gap-4 mb-6">

              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-3xl">
                <FaLaptopCode />
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  Kishore Kumar DC
                </h3>

                <p className="text-purple-400">
                    Full Stack Developer
                </p>
              </div>

            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              Proactive and goal-oriented Computer Science Engineering
              student with experience in AI, Machine Learning,
              Full Stack Web Development, and IoT systems.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Passionate about building AI-powered modern applications
              using React, Spring Boot, MySQL, cloud technologies,
              and intelligent automation systems.
            </p>

          </motion.div>

          {/* Right */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            {skills.map((skill, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#140b22]/70 border border-purple-900 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-purple-500 transition duration-300"
              >

                <div className="text-5xl text-purple-400 mb-4">
                  {skill.icon}
                </div>

                <h4 className="font-semibold">
                  {skill.name}
                </h4>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}