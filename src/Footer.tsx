import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaWhatsapp />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaXTwitter />
        </a>
        <a href="mailto:contato@isoexpress.com" className="icon-link">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
