
import React from 'react';
import './Mywork.css';
import myworkData from '../../assets/mywork_Data';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

const Mywork = () => {
  return (
    <section id="work" className="mywork">

      {/* Section Heading */}
      <div className="mywork-title">
        <span>MY PORTFOLIO</span>

        <h1>
          My Latest <strong>Work</strong>
        </h1>

        <p>
          A collection of projects I've designed and developed
          using modern web technologies.
        </p>

        <div className="work-line"></div>
      </div>

      {/* Projects */}
      <div className="mywork-container">
        {myworkData.map((work, index) => (
          <div className="work-card" key={index}>

            {/* Image */}
            <div className="work-image">
              <img
                src={work.w_img}
                alt={`Project ${index + 1}`}
              />

              {/* Hover Overlay */}
              <div className="work-overlay">
                <div className="work-view">
                  <FaExternalLinkAlt />
                </div>

                <span>View Project</span>
              </div>

              {/* Number */}
              <div className="work-number">
                0{index + 1}
              </div>
            </div>

            {/* Project Info */}
            <div className="work-info">
              <div>
                <span className="work-label">
                  PROJECT 0{index + 1}
                </span>

                <h2>
                  {work.w_name || `Creative Project ${index + 1}`}
                </h2>
              </div>

              <div className="work-arrow">
                <FaArrowRight />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Show More */}
      <button className="mywork-showmore">
        <span>Show More</span>
        <FaArrowRight />
      </button>

    </section>
  );
};

export default Mywork;

