import React from 'react';
import './About.css';
import { FaCode, FaServer } from 'react-icons/fa';
import TechnicalExpertise from '../TechnicalExpertise/TechnicalExpertise';

const About = () => (
  <section id="about" className="about">
    <div className="about-title">
      <span>GET TO KNOW ME</span>
      <h1>About <span>Me</span></h1>
      <div className="title-line" aria-hidden="true"></div>
    </div>

    <div className="about-section">
      <div className="about-intro">
        <h2>Turning ideas into <span>beautiful digital experiences.</span></h2>
        <p>
          I'm a Full Stack Developer focused on building modern, responsive web
          experiences and the backend systems behind them. I enjoy turning ideas
          into polished interfaces connected to reliable APIs and data.
        </p>
        <p>
          With a strong background in Computer Science, I work across frontend
          and backend technologies, including databases, authentication, and
          deployment. I'm continuously learning new tools to improve my skills.
        </p>
        <div className="about-availability">
          <span className="availability-dot" aria-hidden="true"></span>
          Open to new opportunities
        </div>
      </div>

      <div className="about-highlights" aria-label="Development highlights">
        <article className="about-highlight">
          <div className="about-highlight-icon" aria-hidden="true"><FaCode /></div>
          <div>
            <h3>Frontend</h3>
            <p>Responsive interfaces with React, modern CSS, and accessible interactions.</p>
          </div>
        </article>
        <article className="about-highlight">
          <div className="about-highlight-icon" aria-hidden="true"><FaServer /></div>
          <div>
            <h3>Backend</h3>
            <p>APIs, databases, authentication, and deployment for complete web applications.</p>
          </div>
        </article>
      </div>
    </div>

    <div className="about-achievements">
      <div className="achievement"><h2>2<span>+</span></h2><p>Years Experience</p></div>
      <div className="achievement"><h2>10<span>+</span></h2><p>Projects Completed</p></div>
      <div className="achievement"><h2>6<span>+</span></h2><p>Happy Clients</p></div>
      <div className="achievement"><h2>100<span>%</span></h2><p>Dedication</p></div>
    </div>

    <TechnicalExpertise />
  </section>
);

export default About;
