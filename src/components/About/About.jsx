import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
} from "lucide-react";

const stats = [
  {
    number: "10+",
    title: "Projects",
  },
  {
    number: "1+",
    title: "Internship",
  },
  {
    number: "2+",
    title: "Years Learning",
  },
  {
   number: "MCA",
   title: "Graduate 2026",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-28 px-8"
    >
      <div className="max-w-[1450px] mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center"
        >
          About Me
        </motion.h2>

        <p className="text-center text-slate-400 mt-5 max-w-2xl mx-auto">
          Passionate Full Stack Developer focused on building
          modern web applications with beautiful user experiences.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-10"
          >

            <h3 className="text-3xl font-bold mb-6">
              Who am I?
            </h3>

            <p className="text-slate-400 leading-9">
              I am a recent MCA graduate with a passion for developing scalable,
              responsive, and user-friendly web applications.
              I enjoy transforming ideas into engaging digital experiences using
              React, JavaScript, and modern web technologies, 
              while continuously learning and improving my development skills.

            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">

                <MapPin className="text-violet-400"/>

                <span>Bangalore, India</span>

              </div>

              <div className="flex items-center gap-4">

                <GraduationCap className="text-cyan-400"/>

                <span>MCA Graduate</span>

              </div>

              <div className="flex items-center gap-4">

                <Briefcase className="text-green-400"/>

                <span>Open for Internship & Full-Time</span>

              </div>

              <div className="flex items-center gap-4">

                <Code2 className="text-yellow-400"/>

                <span>Full-Stack Developer</span>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >

            {stats.map((item) => (

              <motion.div

                whileHover={{
                  y: -10,
                }}

                key={item.title}

                className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-center items-center p-10"

              >

                <h2 className="text-5xl font-black text-violet-400">

                  {item.number}

                </h2>

                <p className="mt-4 text-slate-400">

                  {item.title}

                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}
