import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="px-10 py-16 bg-gray-100 text-gray-800">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h1
          className="text-6xl font-semibold text-gray-800 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          Contact
        </motion.h1>
        <motion.p
          className="text-xl text-center mt-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Let's create something amazing together! Reach out, and I'll get back to you soon.
        </motion.p>
      </motion.div>

      <div className="mt-8">
        {/* Contact and Image in Flexbox layout */}
        <div className="flex items-center justify-center space-x-20">
          <div className="flex-shrink-0">
            <img 
              src="/AlmaColina_Image.jpg" 
              alt="Alma Colina" 
              className="w-[250px] md:w-[300px] rounded-full shadow-lg shadow-gray-700 transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-orange-600" />
              <a href="mailto:almacolina2015@gmail.com" className="text-lg hover:text-orange-600 transition duration-300">
                almacolina2015@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <FaPhone className="text-orange-600" />
              <p className="text-lg">+34 644762934</p>
            </div>

            {/* Social Media Links */}
            <div className="flex mt-6 space-x-6">
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-600 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-4">

          <div className="flex items-start space-x-4">
            <img src="/LocationService.png" alt="Production Assistant Logo" className="w-16 h-10" />
            <div>
              <h3 className="text-xl font-semibold">Audiovisual Location scout & Location Assistant</h3>
              <p className="text-gray-600">Location Service  |  2021 - Present</p>
              <p className="text-gray-500 mt-2">
                Assisted in various stages of film production, from pre-production planning to on-set support. Focused on logistics, coordinating schedules, and helping maintain the creative vision.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img src="/almaLogo.png" alt="Game Developer Logo" className="w-16 h-10" />
            <div>
              <h3 className="text-xl font-semibold">Game Developer</h3>
              <p className="text-gray-600">Freelance  |  2024 - Present</p>
              <p className="text-gray-500 mt-2">
                I design and develop video games with a focus on interactive experiences, using Unity and C#. My work includes both 3D games and educational projects.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img src="/247.png" alt="Game Developer Logo" className="w-16 h-10" />
            <div>
              <h3 className="text-xl font-semibold">Audiovisual Location Assistant</h3>
              <p className="text-gray-600">Twenty Four Seven |  May 2022 - June 2022</p>
              <p className="text-gray-500 mt-2">
                
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img src="/fundeps.png" alt="Game Developer Logo" className="w-16 h-10" />
            <div>
              <h3 className="text-xl font-semibold">Community Manager - Digital Product Management</h3>
              <p className="text-gray-600">Fundeps | 2021 - January 2022</p>
              <p className="text-gray-500 mt-2">     
              </p>
            </div>
          </div>
        </div>     
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <div className="flex items-center space-x-5 space-y-5">
          <img src="/insPedralbes.jpg" alt="Institut Pedralbes Logo" className="w-18 h-14 rounded-t-full"/>
          <div>
            <p className="text-xl font-semibold">Higher Degree in Multiplatform Application Development</p>
            <p className="text-gray-600">Institut Pedralbes 2022 | 2024 </p>
            <p className="text-gray-500 mt-2">
              Graduated with honors, specializing in video game development. I learned to create interactive applications and games using a range of programming languages and tools, with a focus on digital entertainment.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-5 space-y-5">
        <img src="/unc.png" alt="Institut Pedralbes Logo" className="w-18 h-14 rounded-t-full" />
          <div>
            <p className="text-xl font-semibold">English Public Translation Course</p>
            <p className="text-gray-600">National University of Córdoba 2020 | 2021</p>
            <p className="text-gray-500 mt-2"> First year </p>
          </div>
        </div>
      </div>

      {/* Press Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Press</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://politiquesdigitals.gencat.cat/ca/ciutadania/donatic/premis-dona-tic/guardonades-edicions-anteriors/Guardonades-edicio-2024/"
            className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-lg text-gray-700 hover:text-orange-600 transition duration-300">
            DonaTic 2024 Award Student Category : Generalitat de Catalunya
            </p>
          </a>
          <a
            href="https://alacarta.radiotarrega.cat/programs/elgotic/radiotarrega_podcast_28080"
            className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-lg text-gray-700 hover:text-orange-600 transition duration-300">
            Interview Radio Tàrrega 2024
            </p>
          </a>
          <a
            href="https://punttic.gencat.cat/article/alma-azul-colina-i-amani-fadli-dokkali-hem-abordat"
            className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-lg text-gray-700 hover:text-orange-600 transition duration-300">
              PuntTic Interview - GenCat 2024
            </p>
          </a>
        </div>
      </div>

      <footer className="mt-20 py-6 bg-gradient-to-r from-orange-600 to-pink-500 opacity-50 text-white text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Alma Colina. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
