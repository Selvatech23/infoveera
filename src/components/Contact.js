import React from 'react';

const Contact = () => {
  return (
    <section style={{ padding: '80px 20px', background: '#e0f2fe' }}>
      <div id="contact">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', color: '#0f172a', marginBottom: '20px' }}>
            Let's Work Together
          </h2>
          <p style={{ fontSize: '18px', color: '#475569', marginBottom: '40px' }}>
            Ready to grow your business with smart data solutions? Reach out now and let's build something impactful!
          </p>
          <a
            href="mailto:contact@infoveera.com"
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '10px',
              fontSize: '18px',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease-in-out',
            }}
            onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
          >
            📩 Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
