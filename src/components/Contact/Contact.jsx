import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import contact from "../../data/contact";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_gpsumqt",
        "template_teh6f63",
        form.current,
        "UpqMaTonzON6vrbfX"
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-slate-950 py-28 px-8">
      <div className="max-w-[1450px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black">Contact Me</h2>

          <p className="mt-5 text-slate-400">
            Have a project or opportunity? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-10"
          >
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p>{contact.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-cyan-600 flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <p>{contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p>{contact.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-5 mt-10">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center hover:bg-cyan-600 transition"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-10 space-y-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-5 py-4 outline-none focus:border-violet-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-5 py-4 outline-none focus:border-violet-500"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-5 py-4 outline-none focus:border-violet-500"
            />

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-5 py-4 outline-none resize-none focus:border-violet-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-violet-600 py-4 font-semibold hover:bg-violet-700 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
