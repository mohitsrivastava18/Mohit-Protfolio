import { motion } from "framer-motion";
import experience from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-28 px-8"
    >
      <div className="max-w-[1400px] mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black">
            Experience
          </h2>

          <p className="mt-5 text-slate-400">
            My professional journey and internship experience.
          </p>

        </div>

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-slate-700" />

          {experience.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
              className={`mb-16 flex w-full ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              <div className="relative w-full md:w-[46%]">

                {/* Dot */}

                <div className="absolute -left-1 md:left-auto md:right-[-42px] top-8 h-5 w-5 rounded-full bg-violet-500 border-4 border-slate-950" />

                <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8 hover:border-violet-500 transition">

                  <span className="text-sm text-cyan-400">

                    {item.duration}

                  </span>

                  <h3 className="mt-3 text-3xl font-bold">

                    {item.role}

                  </h3>

                  <h4 className="mt-2 text-violet-400">

                    {item.company}

                  </h4>

                  <p className="mt-1 text-slate-500">

                    {item.location}

                  </p>

                  <p className="mt-6 leading-8 text-slate-400">

                    {item.description}

                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {item.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full border border-slate-700 px-4 py-2 text-sm bg-slate-950"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}