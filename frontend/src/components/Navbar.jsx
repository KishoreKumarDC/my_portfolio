import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import {
  FaUserCircle,
  FaHome,
  FaProjectDiagram,
  FaEnvelope
} from "react-icons/fa";

export default function Navbar() {

  return (

    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="
        sticky top-0 z-50
        bg-black/70
        backdrop-blur-xl
        border-b border-purple-900/40
      "
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          whileHover={{
            scale: 1.05
          }}
        >

          <Link
            to="/"
            className="
              text-3xl font-extrabold
              bg-gradient-to-r
              from-white
              to-purple-400
              bg-clip-text
              text-transparent
              tracking-wide
            "
          >
            Portfolio
          </Link>

        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">

          {/* Home */}
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.92 }}
          >

            <Link
              to="/"
              className="
                flex items-center gap-2
                text-gray-300
                hover:text-purple-400
                transition duration-300
                font-medium
              "
            >

              <FaHome />

              Home

            </Link>

          </motion.div>

          {/* Projects */}
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.92 }}
          >

            <Link
              to="/projects"
              className="
                flex items-center gap-2
                text-gray-300
                hover:text-purple-400
                transition duration-300
                font-medium
              "
            >

              <FaProjectDiagram />

              Projects

            </Link>

          </motion.div>

          {/* Contact */}
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.92 }}
          >

            <Link
              to="/contact"
              className="
                flex items-center gap-2
                text-gray-300
                hover:text-purple-400
                transition duration-300
                font-medium
              "
            >

              <FaEnvelope />

              Contact

            </Link>

          </motion.div>

        </div>

      

      </div>

    </motion.nav>
  );
}