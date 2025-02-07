import { motion } from 'framer-motion';
import { useEffect } from 'react';

const pathData = `M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 
                  C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 
                  C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 
                  C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 
                  C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 
                  C 273 286.5 296.5 253 296.5 218.5`;

export default function IntroAnimation({ setIsIntroComplete }) {

  useEffect(() => {
    // Bloqueamos el scroll agregando la clase al body
    document.body.style.overflow = 'hidden';

    // Limpiamos el efecto al desmontar el componente
    return () => {
      document.body.style.overflow = 'auto'; // Restauramos el scroll al finalizar
    };
  }, []);

  return (
    <motion.div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black', // Fondo negro
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1000,
        overflow: 'hidden', // Esto es para asegurarnos de que no se pueda hacer scroll
      }}
      initial={{ opacity: 1 }}  // Inicia visible
      animate={{ opacity: 0 }}  // Finaliza con opacidad 0
      transition={{ duration: 1, delay: 6 }}  // Lo desvanece después de la duración de la animación
      onAnimationComplete={() => {
        setIsIntroComplete(true); // Marca la intro como completa
      }}  // Cuando termine la animación
    >
      {/* Animación del path */}
      <motion.svg
        viewBox="0 0 500 500"
        style={{ width: '100%', height: '100%' }}
      >
        <motion.path
          d={pathData} // Path de la animación
          stroke="white" // Color del path blanco
          fill="transparent"
          strokeWidth="2" // Un grosor más pequeño para el path
          animate={{
            pathLength: [0, 1], // El path se recorrerá desde 0 a 1
          }}
          transition={{
            duration: 4,  // Duración de la animación
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      {/* Animación de las iniciales AC */}
      <motion.div
        style={{
          position: 'absolute',
          fontSize: '5rem',
          color: 'white',
          fontFamily: 'Poppins',  // Cambia la fuente a lo que prefieras
          zIndex: 1100,  // Aseguramos que "AC" esté encima de todo
          top: '40%', // Ajusta la posición un poco más arriba
          left: '48%',
          transform: 'translate(-50%, -50%)', // Centrado exacto en la pantalla
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5 }}  // Retraso para que aparezca más tarde
      >
       ac
      </motion.div>
    </motion.div>
  );
}
