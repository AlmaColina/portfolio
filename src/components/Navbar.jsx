import { useState, useEffect } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedNav, setSelectedNav] = useState(""); // Estado para almacenar la opción seleccionada

  // Toggle mobile menu
  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect screen size changes for mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(false);
        setIsOpen(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (id) => {
    setSelectedNav(id);  // Actualizamos el estado con el ID del enlace clickeado
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav className={`fixed top-0 z-10 w-full px-16 py-6 text-black backdrop-blur-md flex justify-between items-center ${scrollY > 50 ? 'bg-white shadow-md' : 'bg-transparent'} transition-all duration-300`}>
      <ul className="hidden md:flex gap-10 items-center">
        <li 
          onClick={() => handleNavClick('home')} 
          className={`cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 relative ${selectedNav === 'home' ? 'opacity-100' : ''}`}
        >
          Home
          {selectedNav === 'home' && (
            <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-orange-600 to-pink-500 opacity-50"></span>
          )}
        </li>
        <li 
          onClick={() => handleNavClick('tech')} 
          className={`cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 relative ${selectedNav === 'tech' ? 'opacity-100' : ''}`}
        >
          Skills
          {selectedNav === 'tech' && (
            <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-orange-600 to-pink-500 opacity-50"></span>
          )}
        </li>
        <li 
          onClick={() => handleNavClick('projects')} 
          className={`cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 relative ${selectedNav === 'projects' ? 'opacity-100' : ''}`}
        >
          Projects
          {selectedNav === 'projects' && (
            <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-orange-600 to-pink-500 opacity-50"></span>
          )}
        </li>
        <li 
          onClick={() => handleNavClick('contact')} 
          className={`cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 relative ${selectedNav === 'contact' ? 'opacity-100' : ''}`}
        >
          Contact
          {selectedNav === 'contact' && (
            <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-orange-600 to-pink-500 opacity-50"></span>
          )}
        </li>
        <li className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:text-gray-600">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={24} />
          </a>
        </li>
        <li className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:text-gray-600">
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <BsGithub size={24} />
          </a>
        </li>
      </ul>

      {isMobile && (
        isOpen ? (
          <BiX className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />
        ) : (
          <BiMenu className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />
        )
      )}

      {isOpen && isMobile && (
        <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 flex flex-col h-screen w-1/2 bg-white text-black p-8 gap-8 border-l border-gray-800 md:hidden"
      >
        <ul className="flex flex-col gap-8">
          <li onClick={() => handleNavClick('home')} className={`cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 relative ${selectedNav === 'home' ? 'opacity-100' : ''}`}>
            Home
            {selectedNav === 'home' && (
              <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-orange-600 to-pink-500 opacity-50"></span>
            )}
          </li>
          <li onClick={() => handleNavClick('tech')} className={`cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 relative ${selectedNav === 'tech' ? 'opacity-100' : ''}`}>
            Skills
            {selectedNav === 'tech' && (
              <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-orange-600 to-pink-500 opacity-50"></span>
            )}
          </li>
          <li onClick={() => handleNavClick('projects')} className={`cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 relative ${selectedNav === 'projects' ? 'opacity-100' : ''}`}>
            Projects
            {selectedNav === 'projects' && (
              <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-orange-600 to-pink-500 opacity-50"></span>
            )}
          </li>
          <li onClick={() => handleNavClick('contact')} className={`cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 relative ${selectedNav === 'contact' ? 'opacity-100' : ''}`}>
            Contact
            {selectedNav === 'contact' && (
              <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-orange-600 to-pink-500 opacity-50"></span>
            )}
          </li>
        </ul>
    
        <ul className="flex gap-5 mt-auto">
          <li className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:text-gray-600">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <BsLinkedin size={24} />
            </a>
          </li>
          <li className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:text-gray-600">
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <BsGithub size={24} />
            </a>
          </li>
        </ul>
      </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
