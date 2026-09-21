import React from 'react';
import './Footer.css';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
  FaPaperPlane,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Gradient Line */}
      <div className="footer-gradient-line"></div>

      <div className="footer-container">

        {/* Footer Top */}
        <div className="footer-top">

          {/* Left */}
          <div className="footer-top-left">
            <span className="footer-label">LET'S CONNECT</span>

            <h1>
              Nayab <span>Mubashar</span>
            </h1>

            <p>
              I’m Nayab, an entry-level Frontend Developer with hands-on
              experience in creating interactive, modern, and user-friendly UIs.
            </p>

            {/* Social Icons */}
            <div className="footer-socials">
              <a href="#" aria-label="GitHub">
                <FaGithub />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="footer-top-right">

            <div className="footer-subscribe-heading">
              <h2>Stay Connected</h2>
              <p>Get updates about my latest projects and work.</p>
            </div>

            <div className="footer-email-input">
              <FaPaperPlane />

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button>
                Subscribe
              </button>
            </div>

          </div>

        </div>

        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p className="footer-bottom-left">
            © 2025 Nayab Mubashar. All rights reserved.
          </p>

          <div className="footer-bottom-right">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#contact">Connect With Me</a>

            <a href="#home" className="footer-up">
              <FaArrowUp />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
