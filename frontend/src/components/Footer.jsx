import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaArrowUp
} from "react-icons/fa";

export default function Footer() {

  /* Scroll To Top */
  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <footer className="
      bg-black
      border-t border-purple-900/40
      text-white
      py-12
      px-6
      relative
      overflow-hidden
    ">

      {/* Glow */}
      <div className="
        absolute left-0 top-0
        w-72 h-72
        bg-purple-500/10
        blur-3xl
        rounded-full
      "></div>

      <div className="
        max-w-7xl mx-auto
        relative z-10
      ">

        {/* Top */}
        <div className="
          flex flex-col md:flex-row
          items-center justify-between
          gap-8
        ">

          {/* Brand */}
          <div>

            <h2 className="
              text-3xl font-bold
              bg-gradient-to-r
              from-white
              to-purple-400
              bg-clip-text
              text-transparent
            ">
              Kishore Kumar DC
            </h2>

            <p className="
              text-gray-400
              mt-3
              max-w-md
            ">
              Full Stack Developer specializing in
              AI-powered web applications, cloud systems,
              and modern UI/UX experiences.
            </p>

          </div>

          {/* Social */}
          <div className="flex gap-5">

            {/* GitHub */}
            <motion.a
              whileHover={{
                y: -5,
                scale: 1.1
              }}
              whileTap={{
                scale: 0.9
              }}
              href="https://github.com/KishoreKumarDC"
              target="_blank"
              className="
                w-14 h-14
                rounded-2xl
                bg-[#140b22]
                border border-purple-900
                flex items-center justify-center
                text-2xl
                hover:text-purple-400
                hover:border-purple-500
                transition duration-300
              "
            >

              <FaGithub />

            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{
                y: -5,
                scale: 1.1
              }}
              whileTap={{
                scale: 0.9
              }}
              href="http://www.linkedin.com/in/kishore-kumar-dc"
              target="_blank"
              className="
                w-14 h-14
                rounded-2xl
                bg-[#140b22]
                border border-purple-900
                flex items-center justify-center
                text-2xl
                hover:text-purple-400
                hover:border-purple-500
                transition duration-300
              "
            >

              <FaLinkedin />

            </motion.a>

          </div>

        </div>

        {/* Divider */}
        <div className="
          border-t border-purple-900/30
          my-10
        "></div>

        {/* Bottom */}
        <div className="
          flex flex-col md:flex-row
          items-center justify-between
          gap-5
        ">

          <p className="text-gray-500 text-sm">

            © 2026 Kishore Kumar DC.
            All rights reserved.

          </p>

          {/* Scroll Top */}
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow:
                "0 0 25px rgba(168,85,247,0.4)"
            }}
            whileTap={{
              scale: 0.9
            }}
            onClick={scrollTop}
            className="
              flex items-center gap-3
              bg-purple-500
              hover:bg-purple-600
              px-6 py-3
              rounded-2xl
              font-medium
              shadow-lg shadow-purple-500/20
              transition duration-300
            "
          >

            <FaArrowUp />

            Back To Top

          </motion.button>

        </div>

      </div>

    </footer>
  );
}