import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../assets/finallogo.png'; // Make sure the path is correct

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: '#fff',
        padding: '15px 30px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {/* 🔰 Logo on the left */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="Infoveera Logo"
          style={{ height: '45px', 
          transform: 'scale(5)', // Visually enlarges the logo
          transformOrigin: 'left center',  }}
          
        />
      </div>

      {/* 🔗 Navigation Links */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link
          to="about"
          smooth={true}
          duration={700}
          style={{
            textDecoration: 'none',
            color: '#1e3a8a',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          About
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={700}
          style={{
            textDecoration: 'none',
            color: '#1e3a8a',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          Services
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={700}
          style={{
            textDecoration: 'none',
            color: '#1e3a8a',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          Contact
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
