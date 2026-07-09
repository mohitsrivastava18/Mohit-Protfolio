import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

import contact from "../../data/contact";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-[1450px] mx-auto px-8 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold text-violet-400">
              Mohit.
            </h2>

            <p className="mt-3 text-slate-400 max-w-md">
              Building modern, responsive and scalable web
              applications using React, Node.js and the MERN Stack.
            </p>

          </div>

          {/* Right */}

          <div className="flex gap-5">

            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-violet-600 transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-cyan-600 transition"
            >
              <FaLinkedin size={20} />
            </a>

          </div>

        </div>

        <hr className="border-slate-800 my-10" />

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">

          <p className="text-slate-500">

            © {new Date().getFullYear()} Mohit Srivastava.
            All Rights Reserved.

          </p>


        </div>

      </div>

    </footer>
  );
}