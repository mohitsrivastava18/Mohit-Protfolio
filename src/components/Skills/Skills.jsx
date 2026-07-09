import { motion } from "framer-motion";
import skills from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-8 bg-slate-950">
      <div className="max-w-[1450px] mx-auto">

        <h2 className="text-5xl font-black text-center">
          Skills
        </h2>

        <div className="mt-20 space-y-10">

          {skills.map((category) => (

            <div
              key={category.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8"
            >

              <h3 className={`text-2xl font-bold mb-8 ${category.color}`}>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-5">

                {category.skills.map((skill) => {

                  const Icon = skill.icon;

                  return (

                    <motion.div
                      key={skill.name}
                      whileHover={{
                        y: -8,
                        scale: 1.05,
                      }}
                      className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-6 py-4"
                    >
                      <Icon
                        size={26}
                        className="text-violet-400"
                      />

                      <span>{skill.name}</span>

                    </motion.div>

                  );
                })}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}