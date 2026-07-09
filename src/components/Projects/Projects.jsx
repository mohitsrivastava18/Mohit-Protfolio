import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-28 px-8"
    >
      <div className="max-w-[1450px] mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black">
            Featured Projects
          </h2>

          <p className="mt-5 text-slate-400">
            Some of my best projects built using modern web technologies.
          </p>

        </div>

        {/* Projects */}

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl hover:border-violet-500 transition-all duration-300"
            >

              {/* Image */}

              <div className="h-64 overflow-hidden bg-slate-800">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-3xl font-bold">

                  {project.title}

                </h3>

                <p className="mt-5 text-slate-400 leading-8">

                  {project.description}

                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full border border-slate-700 bg-slate-950 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 hover:border-violet-500 transition"
                  >
                    <FaGithub size={18} />

                    GitHub

                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition"
                  >
                    <HiOutlineExternalLink size={18} />

                    Live Demo

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}