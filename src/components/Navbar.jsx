import { useState, useEffect } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedNav, setSelectedNav] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setSelectedNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={`fixed top-0 z-10 w-full px-16 py-6 text-black backdrop-blur-md flex justify-between items-center ${scrollY > 50 ? 'bg-white shadow-md' : 'bg-transparent'} transition-all duration-300`}>
      <ul className="hidden md:flex gap-10 items-center">
        {["home", "tech", "projects", "contact"].map((item) => (
          <li key={item} onClick={() => handleNavClick(item)} className={`cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 relative ${selectedNav === item ? 'opacity-100' : ''}`}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
            {selectedNav === item && <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-orange-600 to-pink-500 opacity-50"></span>}
          </li>
        ))}
        {[{ icon: BsLinkedin, link: "https://www.linkedin.com" }, { icon: BsGithub, link: "https://www.github.com" }].map((social, index) => (
          <li key={index} className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:text-gray-600">
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <social.icon size={24} />
            </a>
          </li>
        ))}
      </ul>
      {isMobile && (isOpen ? <BiX className="block md:hidden text-4xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} /> : <BiMenu className="block md:hidden text-4xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />)}
      {isOpen && isMobile && (
        <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed top-0 right-0 flex flex-col h-screen w-1/2 bg-white text-black p-8 gap-8 border-l border-gray-800 md:hidden">
          <ul className="flex flex-col gap-8">
            {["home", "tech", "projects", "contact"].map((item) => (
              <li key={item} onClick={() => handleNavClick(item)} className={`cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 relative ${selectedNav === item ? 'opacity-100' : ''}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {selectedNav === item && <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-orange-600 to-pink-500 opacity-50"></span>}
              </li>
            ))}
          </ul>
          <ul className="flex gap-5 mt-auto">
            {[{ icon: BsLinkedin, link: "https://www.linkedin.com" }, { icon: BsGithub, link: "https://www.github.com" }].map((social, index) => (
              <li key={index} className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:text-gray-600">
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <social.icon size={24} />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
