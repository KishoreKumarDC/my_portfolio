import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

export default function Contact() {

  return (

    <section
      id="contact"
      className="bg-black text-white py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-purple-400 uppercase tracking-[4px]">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Get In Touch
          </h2>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#140b22]/70 backdrop-blur-xl border border-purple-900 rounded-3xl p-10 shadow-2xl"
        >

          <div className="grid md:grid-cols-3 gap-8">

            {/* Email */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03
              }}
              className="bg-black border border-purple-900 rounded-2xl p-8 text-center hover:border-purple-500 transition duration-300"
            >

              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-3xl mb-6">
                <FaEnvelope />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Email
              </h3>

              <p className="text-gray-400 break-all">
                Kishorekumardc2004@gmail.com
              </p>

            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03
              }}
              className="bg-black border border-purple-900 rounded-2xl p-8 text-center hover:border-purple-500 transition duration-300"
            >

              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-3xl mb-6">
                <FaPhoneAlt />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Phone
              </h3>

              <p className="text-gray-400">
                +91 8792104106
              </p>

            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03
              }}
              className="bg-black border border-purple-900 rounded-2xl p-8 text-center hover:border-purple-500 transition duration-300"
            >

              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-3xl mb-6">
                <FaMapMarkerAlt />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Location
              </h3>

              <p className="text-gray-400">
                Bengaluru, India
              </p>

            </motion.div>

          </div>

          {/* Social */}
          <div className="flex justify-center gap-6 mt-12">

            <motion.a
              whileHover={{
                y: -5,
                scale: 1.1
              }}
              href="https://github.com/KishoreKumarDC"
              target="_blank"
              className="w-16 h-16 rounded-2xl bg-black border border-purple-900 flex items-center justify-center text-3xl hover:text-purple-400 hover:border-purple-500 transition duration-300"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{
                y: -5,
                scale: 1.1
              }}
              href="http://www.linkedin.com/in/kishore-kumar-dc"
              target="_blank"
              className="w-16 h-16 rounded-2xl bg-black border border-purple-900 flex items-center justify-center text-3xl hover:text-purple-400 hover:border-purple-500 transition duration-300"
            >
              <FaLinkedin />
            </motion.a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}