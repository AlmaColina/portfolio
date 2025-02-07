import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./particles.css";
import { s } from "framer-motion/client";

export default function Hero() {
  const words = ["• Web Development •", "• Game Design •", "• Game Development •", "• Java Programmer •"];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[index];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  // Paleta de colores: naranja, rosa y gris
  const colors = ["#FF8C00", "#FF1493", "#A9A9A9"];

  // Generar partículas con animaciones aleatorias
  const particles = Array.from({ length: 30 }, (_, i) => {
    const size = Math.random() * 5 + 2; // Tamaño entre 2px y 7px
    const left = Math.random() * 100; // Posición inicial aleatoria
    const top = Math.random() * 100; // Posición inicial aleatoria
    const duration = Math.random() * 4 + 4; ; 
    const delay = 0; // Retraso aleatorio
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <div
        key={i}
        className="particle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}vw`,
          top: `${top}vh`,
          animationDuration: `${duration}s`, 
          animationDelay: `${delay}s`,
          backgroundColor: color,
        }}
      />
    );
  });

  return (
    <section id="home" className="hero flex flex-col justify-center items-center min-h-screen text-center px-4 sm:px-6 md:px-8">
      {/* Particles */}
      {particles}

      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        Alma Colina
      </motion.h1>

      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl text-gray-600 mt-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        I am a <span className="relative inline-block"> Developer
          <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-orange-600 to-pink-500 opacity-50"></span>
        </span>
      </motion.h2>

      <motion.h3
        className="relative text-lg sm:text-xl md:text-2xl text-gray-700 mt-2 inline-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {displayedText}
        <span className="animate-blink">|</span>
      </motion.h3>
    </section>
  );
}