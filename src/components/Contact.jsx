import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="px-4 py-16 bg-gray-100 text-gray-800">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          Contact
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mt-6 md:mt-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Let's create something amazing together! Reach out, and I'll get back to you soon.
        </motion.p>
      </motion.div>

      {/* Contact and Image in Flexbox layout */}
      <div className="mt-8 flex flex-col md:flex-row items-center md:items-start md:justify-center md:space-x-10">
        <img 
          src="/AlmaColina_Image.jpg" 
          alt="Alma Colina" 
          className="w-40 md:w-60 rounded-full shadow-lg shadow-gray-700 transition-all duration-300 hover:scale-105"
        />
        
        {/* Contact Info */}
        <div className="mt-6 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
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
          <div className="flex mt-6 space-x-6">
            <a
              href="https://www.linkedin.com/in/almacolina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
            href="https://github.com/AlmaColina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-orange-600 transition duration-300"
          >
            <FaGithub size={20} />
          </a>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">Work Experience</h2>
        <div className="space-y-6">
          {[
            { img: "/LocationService.png", title: "Audiovisual Location scout & Assistant", company: "Location Service", years: "2021 - Present", description: "Assisted in various stages of film production, coordinating logistics and schedules." },
            { img: "/almaLogo.png", title: "Game Developer", company: "Freelance", years: "2024 - Present", description: "Developing interactive experiences using Unity and C#." },
            { img: "/247.png", title: "Audiovisual Location Assistant", company: "Twenty Four Seven", years: "May 2022 - June 2022", description: "" },
            { img: "/fundeps.png", title: "Community Manager - Digital Product Management", company: "Fundeps", years: "2021 - January 2022", description: "" }
          ].map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4">
              <img src={job.img} alt={job.title} className="w-16 h-10" />
              <div className="mt-4 md:mt-0">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.company} | {job.years}</p>
                <p className="text-gray-500 mt-2">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">Education</h2>
        <div className="space-y-6">
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
        <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">Press</h2>
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

      {/* Footer */}
      <footer className="mt-20 py-6 bg-gradient-to-r from-orange-600 to-pink-500 text-white text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Alma Colina. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/almacolina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/AlmaColina"
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
