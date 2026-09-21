
import React, { useRef, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  const handleMenuClick = (item) => {
    setMenu(item);
    closeMenu();
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <h2 className="navbar-logo">
        Nayab <span>Mubashar</span>
      </h2>

      {/* Mobile Open Icon */}
      <i
        className="fa-solid fa-bars open-icon"
        onClick={openMenu}
      ></i>

      {/* Navigation */}
      <ul ref={menuRef} className="nav-menu">

        {/* Mobile Close Icon */}
        <i
          className="fa-solid fa-xmark close-icon"
          onClick={closeMenu}
        ></i>

        <li className={menu === 'home' ? 'active' : ''}>
          <AnchorLink
            className="anchor-link"
            href="#home"
            onClick={() => handleMenuClick('home')}
          >
            Home
          </AnchorLink>
        </li>

        <li className={menu === 'about' ? 'active' : ''}>
          <AnchorLink
            className="anchor-link"
            offset="50"
            href="#about"
            onClick={() => handleMenuClick('about')}
          >
            About Me
          </AnchorLink>
        </li>

        <li className={menu === 'services' ? 'active' : ''}>
          <AnchorLink
            className="anchor-link"
            offset="50"
            href="#services"
            onClick={() => handleMenuClick('services')}
          >
            Services
          </AnchorLink>
        </li>

        <li className={menu === 'portfolio' ? 'active' : ''}>
          <AnchorLink
            className="anchor-link"
            offset="50"
            href="#work"
            onClick={() => handleMenuClick('portfolio')}
          >
            Portfolio
          </AnchorLink>
        </li>

        <li className={menu === 'contact' ? 'active' : ''}>
          <AnchorLink
            className="anchor-link"
            offset="50"
            href="#contact"
            onClick={() => handleMenuClick('contact')}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>

      {/* Connect Button */}
      <div className="nav-connect">
        <AnchorLink
          className="anchor-link"
          offset="50"
          href="#contact"
        >
          Connect With Me
          <span>↗</span>
        </AnchorLink>
      </div>

    </nav>
  );
};

export default Navbar;


