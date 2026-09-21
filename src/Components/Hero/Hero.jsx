
import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

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
        Frontend Developer
      </h1>

      {/* Description */}
      <p>
        I build beautiful, fast, and intuitive web experiences.
        <br className="desktop-break" />
        I love creating modern interfaces that feel smooth,
        clean, and enjoyable to use.
      </p>

      {/* Buttons */}
      <div className="hero-action">

        <AnchorLink
          className="hero-connect"
          offset="50"
          href="#contact"
        >
          Connect With Me
          <span>↗</span>
        </AnchorLink>

        <a
          className="hero-resume"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          My Resume
          <span>↓</span>
        </a>

      </div>

      {/* Tech Stack */}
      <div className="hero-tech">

  <div className="tech-item">
    <FaReact className="tech-icon react-icon" />
    <span>React</span>
  </div>

  <div className="tech-item">
    <SiNextdotjs className="tech-icon next-icon" />
    <span>Next.js</span>
  </div>

  <div className="tech-item">
    <SiTypescript className="tech-icon typescript-icon" />
    <span>TypeScript</span>
  </div>

  <div className="tech-item">
    <SiTailwindcss className="tech-icon tailwind-icon" />
    <span>Tailwind CSS</span>
  </div>

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
            role: <span className="yellow">'Frontend Developer'</span>,
          </p>

          <p className="indent">
            passion: <span className="yellow">'UI/UX'</span>,
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

