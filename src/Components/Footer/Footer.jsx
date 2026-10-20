import React from 'react';
import './Footer.css';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
  FaPaperPlane,
} from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-gradient-line" aria-hidden="true"></div>
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-left">
          <span className="footer-label">LET'S CONNECT</span>
          <h1>Nayab <span>Mubashar</span></h1>
          <p>
            I’m Nayab, an entry-level Full Stack Developer with hands-on
            experience creating interactive UIs and building modern web
            applications with APIs and databases.
          </p>
          <div className="footer-socials">
            <a href="https://github.com/NayyabMubashar" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/nayab-mubashar-67882925b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>


      </div>

      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Nayab Mubashar. All rights reserved.</p>
        <div className="footer-bottom-right">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#contact">Connect With Me</a>
          <a href="#home" className="footer-up" aria-label="Back to top">
            <FaArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
