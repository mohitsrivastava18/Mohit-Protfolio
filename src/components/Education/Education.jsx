import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import education from "../../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 py-28 px-8"
    >
      <div className="max-w-[1400px] mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black">
            Education
          </h2>

          <p className="mt-5 text-slate-400">
            Academic background and qualifications.
          </p>

        </div>

        <div className="space-y-10">

          {education.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8 transition"
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                <div className="flex gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-violet-600/20 flex items-center justify-center">

                    <GraduationCap
                      className="text-violet-400"
                      size={30}
                    />

                  </div>

                  <div>

                    <h3 className="text-3xl font-bold">

                      {item.degree}

                    </h3>

                    <p className="mt-2 text-violet-400">

                      {item.institute}

                    </p>

                    <p className="mt-5 text-slate-400 leading-8">

                      {item.description}

                    </p>

                  </div>

                </div>

                <div className="flex flex-col gap-4">

                  <div className="flex items-center gap-3">

                    <Calendar size={20} />

                    <span>{item.duration}</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <Award
                      size={20}
                      className="text-yellow-400"
                    />

                    <span>{item.score}</span>

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