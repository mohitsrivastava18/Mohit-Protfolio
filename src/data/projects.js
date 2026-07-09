import ue from "../assets/project/ue.png";
import netflix from "../assets/project/netflix.png"
import bmi from "../assets/project/bmi.png"
import pg from "../assets/project/pg.png"
import cc from "../assets/project/cc.png"
import qr from "../assets/project/qr.png"
import todo from "../assets/project/todo.png"
import website from "../assets/project/website.png"
import hospital from "../assets/project/hospital.png"
import cms from "../assets/project/protfolio.png"
const projects = [
  {
    id: 1,
    title: "AI-Powered Website Builder",
    description:
      "AI-powered website builder that generates website layouts and content from user prompts using Gemini AI.",
    image: website,

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Gemini AI",
      "Tailwind CSS",
    ],

    github: "https://github.com/mohitsrivastava18/site-builder-Major-Project",
    live: "https://yet-to-be-hosted.vercel.app/",

    featured: true,
  },

  {
    id: 2,
    title: "Full Stack Portfolio CMS",
    description:
      "Dynamic portfolio website with an admin dashboard to manage projects, skills, education, and personal information.",

    image: cms,

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],

    github: "https://github.com/mohitsrivastava18/EazyByts",
    live: "https://yet-to-be-hosted.vercel.app/",

    featured: true,
  },

  {
    id: 3,
    title: "Hospital Management System",
    description:
      "Hospital Management System featuring appointment booking, doctor management, and SQL database integration.",

    image: hospital,

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "SQL",
    ],

    github: "https://github.com/mohitsrivastava18/Hospital-Management-System",
    live: "https://yet-to-be-hosted.vercel.app/",

    featured: true,
  },

  {
    id: 4,
    title: "Todo List",
    description:
      "Task management application with CRUD operations, Context API, and Local Storage for persistent data.",

    image: todo,

    tech: [
      "React",
      "JavaScript",
      "Context API",
      "Local Storage",
      "CSS",
    ],

    github: "https://github.com/mohitsrivastava18/To-Do-List",
    live: "https://to-do-list-hsrubm4xw-mohit-srivastavas-projects-98c756b8.vercel.app/",
  },

  {
    id: 5,
    title: "Currency Converter",
    description:
      "Real-time currency converter using React Hooks and exchange rate API.",

    image: cc,

    tech: [
      "React",
      "JavaScript",
      "API",
      "Tailwind CSS",
    ],

    github: "https://github.com/mohitsrivastava18/Currency-Convertor",
    live: "https://currency-convertor-self-pi.vercel.app/",
  },

  {
    id: 6,
    title: "QR Code Generator",
    description:
      "Generate customizable QR codes instantly from text or URLs using JavaScript.",

    image: qr,

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "QR Code API",
    ],

    github: "https://github.com/mohitsrivastava18/QR-Code-Generator",
    live: "https://genrateq.netlify.app/",
  },

  {
    id: 7,
    title: "Password Generator",
    description:
      "React application for generating secure random passwords with customizable options.",

    image: pg,

    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],

    github: "https://github.com/mohitsrivastava18/Password-Generator",
    live: "https://password-generator-pi-two-37.vercel.app/",
  },

  {
    id: 8,
    title: "Netflix UI Clone",
    description:
      "Responsive Netflix landing page clone with modern UI and mobile-first design.",

    image: netflix,

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    github: "https://github.com/mohitsrivastava18/NetflixUIUX",
    live: "https://uiuxnetfli.netlify.app/",
  },

  {
    id: 9,
    title: "UltraEdit Clone",
    description:
      "Pixel-perfect UltraEdit website clone developed using HTML and CSS.",

    image: ue,

    tech: [
      "HTML",
      "CSS",
    ],

    github: "https://github.com/mohitsrivastava18/UltraEditUIClone",
    live: "https://ultraedituiux.netlify.app/",
  },

  {
    id: 10,
    title: "BMI Calculator",
    description:
      "Interactive BMI calculator with instant health analysis.",

    image: bmi,

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    github: "https://github.com/mohitsrivastava18/BMI_Calculator",
    live: "https://aboutbmi.netlify.app/",
  },
];

export default projects;