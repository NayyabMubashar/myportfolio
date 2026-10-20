import React from 'react';
import './Service.css';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaCloudUploadAlt,
} from 'react-icons/fa';

const services = [
  {
    name: 'Frontend Development',
    description: 'Responsive, accessible interfaces built with modern JavaScript frameworks and thoughtful interaction design.',
    icon: FaCode,
  },
  {
    name: 'Backend & API Development',
    description: 'Reliable server-side features and REST APIs that connect user experiences to application data.',
    icon: FaServer,
  },
  {
    name: 'Database Design',
    description: 'Structured data models and database integrations designed to support maintainable applications.',
    icon: FaDatabase,
  },
  {
    name: 'Authentication & Security',
    description: 'Account access and application security foundations that protect user data and key workflows.',
    icon: FaShieldAlt,
  },
  {
    name: 'Deployment & Version Control',
    description: 'Deployment workflows and Git based collaboration to keep projects organized and ready to ship.',
    icon: FaCloudUploadAlt,
  },
];

const Service = () => (
  <section id="services" className="services">
    <div className="services-title">
      <span>WHAT I DO</span>
      <h1>My <strong>Services</strong></h1>
      <p>I build complete, responsive web applications from the interface through the backend.</p>
      <div className="services-line" aria-hidden="true"></div>
    </div>

    <div className="services-container">
      {services.map(({ name, description, icon }, index) => (
        <article key={name} className="service-format">
          <div className="service-top">
            <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
            <div className="service-icon" aria-hidden="true">{React.createElement(icon)}</div>
          </div>
          <h2>{name}</h2>
          <p>{description}</p>
          <div className="service-bg-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
        </article>
      ))}
    </div>
  </section>
);

export default Service;
