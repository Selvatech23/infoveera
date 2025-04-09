import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section style={{ background: '#e0f2fe', padding: '100px 20px', textAlign: 'center' }}>
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '48px', color: '#0c4a6e', marginBottom: '20px' }}
      >
        Infoveera – Smart Data Solutions for Smarter Business
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', color: '#334155' }}
      >
        “Empowering Startups, Enterprises, and Agencies with the Data That Drives Success.”
      </motion.p>

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        src="https://cdn.dribbble.com/users/2352056/screenshots/14548643/media/33429c8e4ef1bfcf03b92a67a3bc7b40.gif"
        alt="Data Animation"
        style={{
          width: '100%',
          maxWidth: '600px',
          marginTop: '40px',
          borderRadius: '12px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }}
      />
    </section>
  );
};

export default Hero;
