import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";

import { SiJavascript, SiMongodb } from "react-icons/si";

import { HiArrowRight } from "react-icons/hi";

import profile from "../../data/profile";
import resumePDF from "../../assets/Mohit Resume.pdf"
import {Link} from "react-scroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7c3aed25,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d425,transparent_35%)]" />

      <div className="relative max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 xl:px-24 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-20 w-full">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-16 lg:pt-20"
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-3 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              <span className="text-slate-300 text-sm">
                Available for Job and Internship
              </span>
            </div>

            {/* Greeting */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-violet-400 text-lg font-medium mb-4"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight"
            >
              {profile.name}
            </motion.h1>

            {/* Typing */}

            <div className="mt-8 h-12">
              <TypeAnimation
                sequence={[
                  "React Developer",

                  1500,

                  "Frontend Developer",

                  1500,

                  "Full Stack Developer",

                  1500,

                  "Problem Solver",

                  1500,
                ]}
                speed={40}
                repeat={Infinity}
                className="text-cyan-400 text-2xl md:text-3xl font-semibold"
              />
            </div>

            {/* Description */}

            <p className="mt-8 max-w-[560px] text-lg leading-9 text-slate-400">
              {profile.description}
            </p>
            <br />

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-6">

              <Link 
              to="projects"
              smooth="true"
              duration={500}
              offset={-90}
               className="group px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 font-semibold shadow-lg shadow-violet-500/30 hover:scale-105 transition-all duration-300">
                View Projects
              </Link>

              <a
              href={resumePDF}
              download={"../../assets/Mohit Resume.pdf"}
              target="_blank"
              rel="noopner noreferrer"
              className="group px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur-md hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300 flex items-center gap-3">
                Download Resume
                <HiArrowRight className="group-hover:translate-x-1 transition" />
              </a>
            </div>

            {/* Social */}
            <br></br>

            <div className="flex gap-5 mt-12">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center hover:bg-violet-600 hover:border-violet-600 transition"
              >
                <FaGithub size={24} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-600 transition"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* Background Glow */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute w-[450px] h-[450px] rounded-full bg-violet-600/20 blur-[120px]"
            />

            {/* Image */}

            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative w-[430px] h-[430px] rounded-full bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-[5px] shadow-2xl"
            >
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src="src\assets\Photo-Placement.png"
                  alt="Profile"
                  className="w-[390px] h-[390px] rounded-full object-cover"
                />
              </div>
            </motion.div>

            {/* React */}

            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-xl px-5 py-3 flex items-center gap-3 shadow-xl"
            >
              <FaReact className="text-cyan-400 text-2xl" />

              <span className="font-medium">React</span>
            </motion.div>

            {/* JavaScript */}

            <motion.div
              animate={{
                y: [8, -8, 8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-16 right-2 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-xl px-5 py-3 flex items-center gap-3 shadow-xl"
            >
              <SiJavascript className="text-yellow-400 text-xl" />

              <span>JavaScript</span>
            </motion.div>

            {/* Node */}

            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-12 left-2 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-xl px-5 py-3 flex items-center gap-3 shadow-xl"
            >
              <FaNodeJs className="text-green-500 text-2xl" />

              <span>Node.js</span>
            </motion.div>

            {/* Mongo */}

            <motion.div
              animate={{
                y: [8, -8, 8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute bottom-2 right-4 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-xl px-5 py-3 flex items-center gap-3 shadow-xl"
            >
              <SiMongodb className="text-green-400 text-xl" />

              <span>MongoDB</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
