import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Custom B2B Contact Data Packs',
    desc: 'Tailored contact lists (emails, phones, company info) based on your exact audience.',
  },
  {
    title: 'Precision Lead Research',
    desc: 'Industry, role, location-specific lead research that fuels your sales.',
  },
  {
    title: 'Competitor & Market Intelligence',
    desc: 'Detailed insights into competitors, industries, and business landscapes.',
  },
  {
    title: 'Data Cleanup & Enrichment',
    desc: 'Remove outdated info and enhance your data for better performance.',
  },
  {
    title: 'LinkedIn-Based Lead Generation',
    desc: 'Targeted outreach and lead building through LinkedIn connections.',
  },
  {
    title: 'Virtual Research Support',
    desc: 'Your dedicated research partner for daily or ad-hoc needs.',
  },
  {
    title: 'Email Outreach Assistance',
    desc: 'Campaign setup, contact sequencing, and analytics tracking.',
  },
  {
    title: 'Market Survey & Consumer Insights',
    desc: 'Customized surveys + analysis to guide product & market decisions.',
  },
];

const Services = () => {
  return (
    <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
      <div id="services">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '36px', color: '#0f172a', marginBottom: '40px' }}>
            Our Services
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '16px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                  textAlign: 'left',
                  height: '100%',
                  borderLeft: '5px solid #16a34a',
                }}
              >
                <h3 style={{ color: '#1e293b', fontSize: '20px', marginBottom: '12px' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '16px' }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
