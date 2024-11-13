// src/Pages/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = ({ footerVisible }) => {
  return (
    <footer className={`bg-purple-800 text-white p-6 w-full transition-transform duration-300 ${footerVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex justify-center space-x-6 mb-4">
        <Link to="https://github.com/teemahlwittyswiffyfwarry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaGithub size={24} />
        </Link>
        <Link to="https://linkedin.com/in/oluwayemisi-oladosu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaLinkedin size={24} />
        </Link>
        <Link 
          to="https://wa.me/+2348029958684" // Update with your WhatsApp number
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white"
        >
          <FaWhatsapp size={24} />
        </Link>
        <Link to="mailto:oladosuoluwayemisi@gmail.com" className="text-gray-400 hover:text-white">
          <FaEnvelope size={24} />
        </Link>
      </div>
      <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} TeemahLwittySwiffyFwarry. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
