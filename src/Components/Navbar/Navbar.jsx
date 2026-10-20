import React, { useEffect, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Projects' },
  { id: 'learning', label: 'Learning' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let frameId;

    const updateActiveSection = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const marker = 150;
        const currentSection = navItems
          .map(({ id }) => document.getElementById(id))
          .filter((section) => section && section.getBoundingClientRect().top <= marker)
          .at(-1);

        setActiveSection(currentSection?.id ?? 'home');
      });
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  const handleMenuClick = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <h2 className="navbar-logo">
        Nayab <span>Mubashar</span>
      </h2>

      <button
        type="button"
        className="open-icon"
        aria-label="Open navigation menu"
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
      >
        <FaBars aria-hidden="true" />
      </button>

      <ul
        id="primary-navigation"
        className={`nav-menu${isMenuOpen ? ' nav-menu-open' : ''}`}
      >
        <li className="nav-close-item">
          <button
            type="button"
            className="close-icon"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes aria-hidden="true" />
          </button>
        </li>

        {navItems.map(({ id, label }) => (
          <li className={activeSection === id ? 'active' : ''} key={id}>
            <AnchorLink
              className="anchor-link"
              offset={id === 'home' ? undefined : 50}
              href={`#${id}`}
              onClick={() => handleMenuClick(id)}
            >
              {label}
            </AnchorLink>
          </li>
        ))}
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset="50" href="#contact">
          Connect With Me
          <span aria-hidden="true">↗</span>
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
