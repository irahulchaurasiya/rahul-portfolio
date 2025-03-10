import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaJava,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import { BiLogoSpringBoot, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import {
  SiMysql,
  SiChakraui,
  SiMui,
  SiExpress,
  SiPostman,
} from "react-icons/si";

const skillIcons = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3Alt size={140} />, label: "CSS" },
  { icon: <FaReact size={140} />, label: "React" },
  { icon: <FaJsSquare size={140} />, label: "JavaScript" },
  { icon: <FaJava size={140} />, label: "Java" },
  { icon: <BiLogoSpringBoot size={140} />, label: "SpringBoot" },
  { icon: <TbBrandNextjs size={140} />, label: "Next.js" },
  { icon: <DiNodejs size={140} />, label: "Node.js" },
  { icon: <SiMysql size={140} />, label: "mySql" },
  { icon: <SiChakraui size={140} />, label: "Chakra UI" },
  { icon: <SiMui size={140} />, label: "Material UI" },
  { icon: <FaGitAlt size={140} />, label: "Git" },
  { icon: <BiLogoTailwindCss size={140} />, label: "Tailwind CSS" },
  { icon: <SiExpress size={140} />, label: "Express Js" },
  { icon: <FaLinux size={140} />, label: "Linux" },
  { icon: <SiPostman size={140} />, label: "Postman" },
];

const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
      <div
        className="text-white w-[400px] md:min-w-[950px] mx-auto
        p-8 text-center"
      >
        <h2 className="text-6xl font-bold mb-4">What I Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
            >
              {skill.icon}
              <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
