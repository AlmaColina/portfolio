import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Hero from './components/Hero';
import Contact from './components/Contact';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);  // Siempre mostrar la intro
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const introDuration = 7000;  // Duración de la animación en milisegundos
  
  useEffect(() => {
    setShowIntro(true);

    const timer = setTimeout(() => {
      setShowIntro(false);
      setIsIntroComplete(true); // La animación terminó
    }, introDuration);

    return () => clearTimeout(timer);
  }, [introDuration]);

  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        {showIntro && <IntroAnimation setIsIntroComplete={setIsIntroComplete} />}
      </div>
      <div className="relative min-h-screen w-full bg-gray-100 text-black">
        <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 z-10 pt-24">
          <Navbar isIntroComplete={isIntroComplete} />
          <Hero />
          <Tech />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
