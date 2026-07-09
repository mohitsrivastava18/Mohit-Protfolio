import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const links = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Education",
  "Projects",
  "Certificates",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        {/* Logo */}

        <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
          Mohit<span className="text-white">.</span>
        </h1>

        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              offset={-90}
              duration={500}
              spy={true}
              className="cursor-pointer text-slate-300 hover:text-violet-400 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-slate-900 px-6 pb-5 space-y-4">
          {links.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={() => setOpen(false)}
              className="block cursor-pointer text-slate-300 hover:text-violet-400 transition"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
}