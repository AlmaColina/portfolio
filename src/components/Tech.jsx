import { useState } from "react";
import { BiLogoUnity } from "react-icons/bi";
import { SiUnrealengine, SiCplusplus, SiMysql, SiReact, SiJavascript, SiNodedotjs, SiAdobephotoshop, SiHtml5, SiMongodb, SiAndroidstudio, SiKotlin } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { motion } from "framer-motion";

const technologies = [
  {
    category: "Video Game Development",
    items: [
      { name: "Unity", icon: <BiLogoUnity className="text-sky-500" /> },
      { name: "Unreal Engine 5", icon: <SiUnrealengine className="text-black" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
      { name: "C#", icon: <TbBrandCSharp className="text-purple-700" /> },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "React.js", icon: <SiReact className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
      { name: "HTML", icon: <SiHtml5 className="text-blue-700" /> },
    ],
  },
  {
    category: "Mobile Development",
    items: [
      { name: "AndroidStudio", icon: <SiAndroidstudio className="text-blue-400" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-yellow-500" /> },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-blue-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-yellow-500" /> },
    
    ],
  },
  {
    category: "Design & Tools",
    items: [
      { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-blue-500" /> },
      { name: "3D Max", icon:  <img src="/3dsmax.png" alt="3ds Max Logo" width="60" height="60" />},
    ],
  },
];

const Tech = () => {
  const [openSections, setOpenSections] = useState({
    "Programming Languages": false,
    "Game Engines": false,
    "Web Development": false,
    "Design & Tools": false,
  });

  const toggleSection = (category) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <div 
      id="tech" 
      className="w-screen min-h-screen flex flex-col justify-center items-center bg-[#e0e0e0] py-16 px-10 relative"
    >
      <motion.h1
        className="text-6xl font-semibold text-gray-800 text-center"
        style={{ paddingTop: "50px" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        SKILLS
      </motion.h1>

      <motion.h2
        className="text-2xl text-gray-600 mt-4 max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        These are the skills I have been developing over these years of learning and dedication.
      </motion.h2>

      <div className="mt-9 w-full max-w-4xl">
        {technologies.map((tech, index) => (
          <div key={index} className="w-full mt-9">
            <div 
              className="flex justify-between items-center cursor-pointer border-b border-black pb-2 mb-4"
              onClick={() => toggleSection(tech.category)}
            >
              <h2 className=" cursor: pointer text-2xl font-semibold text-black">{tech.category}</h2>
              <motion.div
                animate={{ rotate: openSections[tech.category] ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-6xl font-thin"
              >
                {openSections[tech.category] ? '×' : '+'}
              </motion.div>
            </div>
            {openSections[tech.category] && (
              <div className="grid grid-cols-1 gap-4 place-items-start">
                {tech.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="cursor-pointer text-6xl transition-all duration-300">
                      {item.icon}
                    </div>
                    <p className="text-xl font-medium text-black">{item.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
