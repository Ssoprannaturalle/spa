import React  from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  return (
    <div className={`footer ${darkMode ? 'dark' : ''}`}>
      <div className="social-buttons">
        <a href="https://www.facebook.com/nala.apbt.16" target="_blank" rel="noopener noreferrer" className="social-button">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.linkedin.com/in/tamar-okropiridze-914a81258" target="_blank" rel="noopener noreferrer" className="social-button">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.instagram.com/okropiridzetamar" target="_blank" rel="noopener noreferrer" className="social-button">
          <FaInstagram size={30} />
        </a>
      </div>

      <p>Created By Tamar Okropiridze</p>
    </div>
  );
};

export default Footer;