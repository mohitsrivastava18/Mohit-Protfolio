import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaCode,
  FaPython,
} from "react-icons/fa";

import { TbBrandCSharp } from "react-icons/tb";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    color: "text-orange-400",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React.js", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    title: "Backend",
    color: "text-green-400",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
    ],
  },

  {
    title: "Database",
    color: "text-cyan-400",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
  title: "Programming",
  color: "text-purple-400",
  skills: [
    { name: "Java", icon: FaJava },
    { name: "Python", icon: FaPython },
    { name: "C#", icon: TbBrandCSharp },,
    { name: "C++", icon: FaCode },
    { name: "C", icon: FaCode },
  ],
},

  {
    title: "Tools",
    color: "text-yellow-400",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaCode },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

export default skills;