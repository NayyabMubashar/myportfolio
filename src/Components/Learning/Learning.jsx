import React, { useEffect, useRef } from 'react';
import './Learning.css';
import { FaBriefcase, FaRobot, FaGlobe, FaDatabase } from 'react-icons/fa';

const achievements = [
  { title: 'Full Stack Development Internship', issuer: 'Devline Solutions', date: '2026', dateTime: '2026', tone: 'teal', icon: FaBriefcase, latest: true },
  { title: 'Generative AI Application Developer', issuer: 'ULEFUSA & iCode Guru', date: 'Mar 2025', dateTime: '2025-03', tone: 'purple', icon: FaRobot },
  { title: 'Web Development Virtual Internship', issuer: 'Digital Empowerment Network', date: 'Aug 2024', dateTime: '2024-08', tone: 'blue', icon: FaGlobe },
  { title: 'SQL — Basic & Advanced', issuer: 'HackerRank', date: '2023', dateTime: '2023', tone: 'orange', icon: FaDatabase },
];

const Learning = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return undefined;

    const items = timeline.querySelectorAll('.learning-item');
    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    timeline.classList.add('is-observing');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="learning" className="learning-section">
      <div className="learning-heading" id="learning-heading">
        <span>ACHIEVEMENTS</span>
        <h1>Certifications &amp; <strong>Learning</strong></h1>
        <div className="learning-line" aria-hidden="true"></div>
      </div>

      <ol className="learning-timeline" ref={timelineRef}>
        {achievements.map(({ title, issuer, date, dateTime, tone, icon, latest }) => (
          <li className={`learning-item learning-${tone}`} key={title}>
            <span className={`learning-dot${latest ? ' learning-dot-latest' : ''}`} aria-hidden="true"></span>
            <article className="learning-card">
              <div className="learning-card-top">
                <div className="learning-icon" aria-hidden="true">{React.createElement(icon)}</div>
                {latest && <span className="learning-latest">Latest</span>}
              </div>
              <h2>{title}</h2>
              <p className="learning-issuer">{issuer}</p>
              <time className="learning-date" dateTime={dateTime}>{date}</time>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Learning;
