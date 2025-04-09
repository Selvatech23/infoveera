import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section style={{ backgroundColor: '#f0fdf4', padding: '80px 20px' }}>
      {/* 🔽 This is the target div for smooth scroll */}
      <div id="about">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '36px', color: '#166534', marginBottom: '20px' }}>
            About Infoveera
          </h2>

          <p style={{ fontSize: '18px', color: '#334155', lineHeight: '1.8' }}>
            <strong>Infoveera</strong> is a data intelligence and analytics solutions provider
            committed to delivering accurate, tailored datasets that power business growth,
            market research, and strategic decision-making.
            <br /><br />
            We help startups, enterprises, and agencies access the right data — whether it's for
            lead generation, competitor research, or targeted outreach. With a global outlook and
            client-first approach, Infoveera enables smarter business outcomes through smarter data.
          </p>

          <motion.img
            src="https://cdni.iconscout.com/illustration/premium/thumb/data-analytics-6016652-4972499.png"
            alt="About Infoveera"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              width: '100%',
              maxWidth: '500px',
              marginTop: '40px',
              borderRadius: '12px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;


