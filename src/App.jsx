import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Hero from './components/Hero';
import Contact from './components/Contact';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const introDuration = 7000;

  useEffect(() => {
    setShowIntro(true);
    const timer = setTimeout(() => {
      setShowIntro(false);
      setIsIntroComplete(true);
    }, introDuration);

    return () => clearTimeout(timer);
  }, [introDuration]);

  return (
    <div className="w-full min-h-screen bg-gray-100 text-black overflow-x-hidden">
      {showIntro && (
        <div className="fixed inset-0 z-50">
          <IntroAnimation setIsIntroComplete={setIsIntroComplete} />
        </div>
      )}
      <div className={`relative ${showIntro ? 'hidden' : 'block'}`}>
        <Navbar isIntroComplete={isIntroComplete} />
        <main className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-16 z-10 pt-24">
          <Hero />
          <Tech />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
