import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#0f172a', color: '#e2e8f0', padding: '30px 20px', textAlign: 'center' }}>
      <p style={{ marginBottom: '10px' }}>© {new Date().getFullYear()} Infoveera. All rights reserved.</p>
      <p style={{ fontSize: '14px' }}>Data Delivered. Decisions Defined</p>
    </footer>
  );
};

export default Footer;
