import React from 'react';
import { motion } from 'framer-motion';
import './Section2.css';

const Section2 = () => {
  return (
    <div className="section2">
      <motion.div
        className="left"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <img src="./images/section1.png" alt="Visual" />
      </motion.div>

      <motion.div
        className="right"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="typewriter">Charting New Territories</h2>
        <p className="section2-text">
          Embark on a journey through immersive visuals and clean code.<br />
          This project isn’t just a website — it’s an experience.<br />
          We blend animations, interactivity, and responsive design.<br />
          Every section tells a story, guided by light and layered by thought.<br />
          Dive deep, explore more, and sail into innovation.
        </p>
      </motion.div>
    </div>
  );
};

export default Section2;
