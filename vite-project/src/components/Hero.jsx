import  { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import Navbar from './Navbar';

const Hero = () => {
  const heroRef = useRef(null);
  const [beamStyle, setBeamStyle] = useState({ width: 0, angle: 0 });
  const beamOrigin = { x: 390, y: 10 };

  

const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const dx = mouseX - beamOrigin.x;
    const dy = mouseY - beamOrigin.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    setBeamStyle({ width: distance, angle });
  };

  return (
    <div className="hero" onMouseMove={handleMouseMove} ref={heroRef}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-bg"
        src="/videos/hero.mp4"
      />

      <div
        className="beam"
        style={{
          width: `${beamStyle.width}px`,
          transform: `translate(${beamOrigin.x}px, ${beamOrigin.y - 20}px) rotate(${beamStyle.angle}deg)`
        }}
      />

      <Navbar />
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Guiding You Through the Dark
        </motion.h1>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          A cinematic code experience by the lighthouse.
        </motion.p>

        <motion.button
        className="hero-button"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}


        >
          Start Exploring
        </motion.button>
      </motion.div>
      <div className="hero-overlay">
        
      </div>
    </div>
  );
};

export default Hero;
