
import React from 'react';
import './About.css';

const skills = [
  { name: 'HTML & CSS', level: '90%' },
  { name: 'JavaScript', level: '80%' },
  { name: 'Bootstrap', level: '75%' },
  { name: 'React JS', level: '85%' },
];

const About = () => {
  return (
    <section id="about" className="about">

      {/* Heading */}
      <div className="about-title">
        <span>GET TO KNOW ME</span>
        <h1>About <span>Me</span></h1>
        <div className="title-line"></div>
      </div>

      <div className="about-section">

        {/* Left Intro */}
        <div className="about-intro">

          <h2>
            Turning ideas into
            <span> beautiful digital experiences.</span>
          </h2>

          <p>
            I'm a passionate Frontend Developer focused on creating
            modern, responsive, and user-friendly web experiences.
            I enjoy transforming ideas and designs into clean,
            functional interfaces that people love to use.
          </p>

          <p>
            With a strong background in Computer Science, I have
            experience working with modern frontend technologies
            and continuously learning new tools to improve my skills.
          </p>

          <div className="about-availability">
            <span className="availability-dot"></span>
            Open to new opportunities
          </div>

        </div>

        {/* Right Skills */}
        <div className="about-right">

          <div className="skills-card">

            <div className="card-heading">
              <span>MY EXPERTISE</span>
              <h3>Skills & Technologies</h3>
            </div>

            {skills.map((skill, index) => (
              <div className="about-skill" key={skill.name}>

                <div className="skill-info">
                  <p>{skill.name}</p>
                  <span>{skill.level}</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: skill.level,
                      animationDelay: `${index * 0.15}s`,
                    }}
                  ></div>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Stats */}
      <div className="about-achievements">

        <div className="achievement">
          <h2>2<span>+</span></h2>
          <p>Years Experience</p>
        </div>

        <div className="achievement">
          <h2>10<span>+</span></h2>
          <p>Projects Completed</p>
        </div>

        <div className="achievement">
          <h2>6<span>+</span></h2>
          <p>Happy Clients</p>
        </div>

        <div className="achievement">
          <h2>100<span>%</span></h2>
          <p>Dedication</p>
        </div>

      </div>

    </section>
  );
};

export default About;


