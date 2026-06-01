import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {

  const education = [

    {
      degree: "Bachelor of Engineering (B.E)",
      specialization: "Computer Science Engineering",
      institution: "ACS College of Engineering, Bengaluru",
      duration: "2023 - 2026",
      score: "CGPA: 7.75"
    },

    {
      degree: "Diploma",
      specialization: "Information Science & Technology",
      institution: "P.V.P Polytechnic, Bengaluru",
      duration: "2020 - 2023",
      score: "CGPA: 7.83"
    },

    {
      degree: "Secondary Education (Class X)",
      specialization: "General Education",
      institution: "Annie Besant Convent & High School, Bengaluru",
      duration: "2008 - 2020",
      score: "76.96%"
    }

  ];

  return (

    <section
      id="education"
      className="bg-[#05010f] text-white py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-purple-400 uppercase tracking-[4px]">
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Academic Journey
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            Building a strong foundation in Computer Science,
            Artificial Intelligence, Full Stack Development,
            Cloud Computing and Software Engineering.
          </p>

        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-purple-600 ml-5">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 ml-8"
            >

              {/* Dot */}
              <div
                className="
                  absolute
                  -left-5
                  w-10
                  h-10
                  rounded-full
                  bg-purple-500
                  flex
                  items-center
                  justify-center
                "
              >
                <FaGraduationCap />
              </div>

              <div
                className="
                  bg-[#140b22]/70
                  backdrop-blur-xl
                  border border-purple-900
                  rounded-3xl
                  p-6
                  hover:border-purple-500
                  transition-all
                  duration-300
                "
              >

                <h3 className="text-2xl font-bold">
                  {item.degree}
                </h3>

                <p className="text-purple-400 mt-2">
                  {item.specialization}
                </p>

                <p className="text-gray-300 mt-3">
                  {item.institution}
                </p>

                <div className="flex flex-wrap gap-4 mt-5">

                  <span
                    className="
                      bg-purple-500/20
                      text-purple-300
                      px-4 py-2
                      rounded-xl
                    "
                  >
                    {item.duration}
                  </span>

                  <span
                    className="
                      bg-green-500/20
                      text-green-300
                      px-4 py-2
                      rounded-xl
                    "
                  >
                    {item.score}
                  </span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}