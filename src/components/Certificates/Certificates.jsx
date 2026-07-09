import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import certificates from "../../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="bg-slate-950 py-28 px-8">
      <div className="max-w-[1450px] mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black">
            Certifications
          </h2>

          <p className="mt-5 text-slate-400">
            Certifications that strengthened my technical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {certificates.map((certificate) => (

            <motion.div
              key={certificate.id}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl"
            >

              <div className="w-16 h-16 rounded-2xl bg-violet-600/20 flex items-center justify-center">

                <FaAward
                  size={28}
                  className="text-violet-400"
                />

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {certificate.title}
              </h3>

              <p className="mt-3 text-violet-400">
                {certificate.issuer}
              </p>

              <p className="mt-2 text-slate-500">
                {certificate.date}
              </p>

              <a
                href={certificate.credential}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
              >
                View Certificate

                <FaExternalLinkAlt size={14} />

              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}