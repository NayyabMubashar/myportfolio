import React from 'react';
import './TechnicalExpertise.css';
import { FaCode, FaServer, FaPalette } from 'react-icons/fa';

const expertiseGroups = [
  {
    title: 'Languages & Frameworks',
    tone: 'teal',
    icon: FaCode,
    skills: ['JavaScript', 'TypeScript', 'Python', 'React', 'Next.js',],
  },
  {
    title: 'Backend & Databases',
    tone: 'teal',
    icon: FaServer,
    skills: ['Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'MongoDB', 'SQL'],
  },
  {
    title: 'Tools & Design',
    tone: 'purple',
    icon: FaPalette,
    skills: ['Tailwind CSS', 'REST APIs', 'Git & GitHub',],
  },
];

const TechnicalExpertise = () => (
  <div id="expertise" className="expertise-section">
    <div className="expertise-heading" id="expertise-heading">
      <span>MY TOOLKIT</span>
      <h2>Technical <strong>Expertise</strong></h2>
      <div className="expertise-line" aria-hidden="true"></div>
    </div>

    <div className="expertise-grid">
      {expertiseGroups.map(({ title, tone, icon, skills }) => (
        <article className={`expertise-card expertise-${tone}`} key={title}>
          <div className="expertise-icon" aria-hidden="true">{React.createElement(icon)}</div>
          <h3>{title}</h3>
          <div className="expertise-divider" aria-hidden="true"></div>
          <ul className="expertise-tags" aria-label={`${title} technologies`}>
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </article>
      ))}
    </div>
  </div>
);

export default TechnicalExpertise;
