
import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaReact } from "react-icons/fa";
import { SiExpress, SiNodedotjs, SiPostgresql } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="hero">

      {/* Background Glow */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      {/* Small Badge */}
      <div className="hero-badge">
        <span className="status-dot"></span>
        Available for work
      </div>

      {/* Main Heading */}
      <h1>
        I'm <span>Nayab Mubashar</span>
        <br />
        Full Stack Developer
      </h1>

      {/* Description */}
      <p>
        I build modern web applications from responsive interfaces to reliable backends.
        <br className="desktop-break" />
        I enjoy bringing ideas to life with APIs, databases, and thoughtful user experiences.
      </p>

      {/* Buttons */}
      <div className="hero-action">

        <AnchorLink className="hero-projects" href="#work">
          View Projects
          <span aria-hidden="true">↗</span>
        </AnchorLink>

        <AnchorLink
          className="hero-connect"
          offset="50"
          href="#contact"
        >
          Contact Me
          <span>↗</span>
        </AnchorLink>

        <a
          className="hero-resume"
          href="/resume.pdf"
          download="Nayab_Mubashar_Full_Stack_Developer_Resume.pdf"
        >
          My Resume
          <span>↓</span>
        </a>

      </div>

   

      {/* Decorative Code Card */}
      <div className="code-card">

        <div className="code-header">
          <div className="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <small>developer.tsx</small>
        </div>

        <div className="code-content">
          <p>
            <span className="purple">const</span>{' '}
            <span className="green">developer</span> = {'{'}
          </p>

          <p className="indent">
            name: <span className="yellow">'Nayab'</span>,
          </p>

          <p className="indent">
            role: <span className="yellow">'Full Stack Developer'</span>,
          </p>

          <p className="indent">
            passion: <span className="yellow">'Full Stack Apps'</span>,
          </p>

          <p>
            {'}'};
          </p>
        </div>

      </div>

    </section>
  );
};

export default Hero;

