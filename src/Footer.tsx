import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Redes Sociais Menores à Esquerda/Centro */}
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="X (Twitter)">
            <FaXTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        {/* Botão de WhatsApp em Destaque à Direita */}
        <div className="whatsapp-highlight">
          <a 
            href="https://wa.me/5585992712043?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento%20de%20placas%20de%20EPS." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-button"
          >
            <FaWhatsapp className="whatsapp-icon" />
            <div className="whatsapp-text">
              <span className="whatsapp-label">Atendimento Rápido</span>
              <span className="whatsapp-number">85 9927-12043</span>
            </div>
          </a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
