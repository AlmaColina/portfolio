import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState({});

  const projects = [
    {
      name: "Hollywood Nightmare",
      description:"This is a collaborative project between three developers and three 3D artists. The aim of the project is to create an interactive experience that allows players to explore the cinematic world while seeking to represent the work of women in the audiovisual industry. It is developed with Unity, inspired by arcade game style. It offers 3 different game mechanics (Shoot 'em up, Beat 'em Up, and Shooter Gallery), two female characters (mother and daughter), and the possibility of immersing players in the film sets of iconic movies.",
      link: "https://example.com/project1",
      tech: ["Unity", "C#", "C++","Fmod", "3Ds Max"],
      category: "VideoGame",
      date: "Des 2023 - May 2024",
      image: "/VG1.png",
      hoverImages: ["/VG1.1.png", "/VG1.2.png", "/VG1.3.png"],
    },
    {
      name: "The Explorer",
      description: "An adventure game developed using Unity.",
      link: "https://example.com/TheExplorer",
      tech: ["Unity", "C#", "Fmod", "3Ds Max"],
      category: "VideoGame",
      date: "Sep 2023 - Nov 2023",
      image: "/VG2.png",
      hoverImages: ["/VG2.1.png", "/VG2.2.png", "/VG2.3.png", "/VG2.4.png"],
    },
    {
      name: "Ratatouille Tiny Run",
      description: "This is a 3D platform game of endless runner genre. The player controls Remy, who automatically moves forward through three different platforms and  has to avoid some enemies on the way in order to arrive to the end.",
      link: "https://example.com/TheExplorer",
      tech: ["Unity", "C#"],
      category: "VideoGame",
      date: "Apr 2023 - Jun 2023",
      image: "/VG3.jpg",
      hoverImages: ["/VG3.1.png", "/VG3.2.png"],
    },
    {
      name: "Magic Forest",
      description: "This is a 2D platform game that features a classic action similar to “VVVVVV”. The gameplay is characterized by the inability of the player to jump, instead opting on controlling the direction of gravity, causing the player to fall upwards or downwards. In the game, the player controls a Wizard who must collect 10 gems lost in the forest in order to open the final portal. ",
      link: "https://example.com/TheExplorer",
      tech: ["Unity", "C#"],
      date: "Jan 2023",
      category: "VideoGame",
      image: "/VG4.1.jpg",
      hoverImages: ["/VG4.jpg","/VG4.2.png","/VG4.4.png"],
    },
    {
      name: "Dalia App",
      description: "Dalia is a mobile application designed to combat online gender-based violence using artificial intelligence. It detects patterns of verbal violence in social media conversations through a predefined database and offers behavioral analysis tests to help users reflect on their communication. The project was presented at the III Edition of the FP Knowledge Transfer Awards 2024, developed by Amani Fadli Dokkali, Clàudia Martín, and Emma Casadevall Hernández, under the guidance of Laura Carillo at Institut Pedralbes.",
      link: "https://example.com/TheExplorer",
      tech: ["Java", "JSON", "VisualStudio"],
      category: "App",
      date: " ",
      image: "/daliaApp.png",
      hoverImages: ["/daliaApp.1.png","/daliaApp.2.png"],
    },
    {
      name: "Alma Colina Portfolio",
      description: "This website is made to show my work and my experience in the different areas of programming.",
      tech: ["React.js", "CSS", "HTML"],
      category: "WebPage",
      date: "Jan 2025",
      image: "/webPage.png",
      hoverImages: ["/webPage.png"],
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    if (hoveredProject !== null) {
      const interval = setInterval(() => {
        setHoveredImageIndex((prev) => {
          const currentIndex = prev[hoveredProject] || 0;
          return {
            ...prev,
            [hoveredProject]:
              (currentIndex + 1) % projects[hoveredProject].hoverImages.length,
          };
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [hoveredProject]);

  return (
    <section id="projects" className="bg-gray-100 py-16 px-10">
      <motion.h1
        className="text-6xl font-semibold text-gray-800 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        Projects
      </motion.h1>

      <div className="flex justify-center space-x-4 mt-6">
        {["All", "VideoGame", "App", "WebPage"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              filter === category
                ? "bg-gray-600 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
          >
            <div
              className="relative"
              onMouseEnter={() => {
                setHoveredProject(index);
                setHoveredImageIndex((prev) => ({ ...prev, [index]: 0 }));
              }}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img
                src={
                  hoveredProject === index && project.hoverImages
                    ? project.hoverImages[hoveredImageIndex[index] || 0]
                    : project.image
                }
                alt={project.name}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">
              {project.name}
            </h3>
            <p className="text-sm text-bold text-gray-500 mt-2">{project.category}</p>
            <p className="text-sm text-gray-500 mt-2">
              <span className="inline-block bg-orange-200 text-orange-800 px-2 py-1 rounded-md">
                {project.tech.join(" / ")}
              </span>
            </p>
            <button
              onClick={() => setSelectedProject(project)}
              className="mt-4 inline-block text-orange-600 hover:text-pink-600 transition duration-300"
            >
              More Info
            </button>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-9 rounded-lg w-3/4 max-w-4xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="cursor: pointer absolute top-1 right-4 text-2xl text-gray-800"
              >
                x
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-64 object-cover rounded-md"
              />
              <h3 className="text-3xl font-semibold text-gray-800 mt-4">
                {selectedProject.name}
              </h3>
              <p className="text-gray-500 mt-2 text-sm text-bold"> {selectedProject.date}</p>
              <p className="text-sm text-gray-500 mt-2">
              <span className="inline-block bg-orange-200 text-orange-800 px-2 py-1 rounded-md">
                {selectedProject.tech.join(" / ")}
              </span>
              </p>
              <p className="text-gray-600 mt-2">{selectedProject.description}</p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-orange-600 hover:text-orange-800 transition duration-300"
              >
                View More
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}