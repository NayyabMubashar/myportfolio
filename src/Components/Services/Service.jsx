
import React from 'react';
import './Service.css';
import ServiceData from '../../assets/Service_Data';

import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaArrowRight,
} from 'react-icons/fa';

const icons = [
  <FaCode />,
  <FaPalette />,
  <FaMobileAlt />,
  <FaCode />,
];




const Service = () => {
  const ServiceData = [
  {
    s_no: "01",
    s_name: "Frontend Development",
    s_desc:
      "I build modern, fast, and interactive websites using HTML, CSS, JavaScript, and modern frontend technologies."
  },

  {
    s_no: "02",
    s_name: "Responsive Web Design",
    s_desc:
      "I create responsive layouts that work smoothly across desktops, tablets, and mobile devices."
  },

  {
    s_no: "03",
    s_name: "React.js Development",
    s_desc:
      "I develop dynamic and reusable React.js interfaces with clean components, smooth interactions, and modern UI."
  },

  {
    s_no: "04",
    s_name: "UI/UX Implementation",
    s_desc:
      "I transform design ideas into clean, attractive, and user-friendly web interfaces with attention to detail."
  }
];

  return (
    <section id="services" className="services">

      {/* Section Heading */}
      <div className="services-title">
        <span>WHAT I DO</span>

        <h1>
          My <strong>Services</strong>
        </h1>

        <p>
          I create modern, responsive and user-friendly
          digital experiences that help ideas come to life.
        </p>

        <div className="services-line"></div>
      </div>

      {/* Services */}
      <div className="services-container">

        {ServiceData.map((service, index) => (
          <div
            key={index}
            className="service-format"
          >

            {/* Number + Icon */}
            <div className="service-top">

              <span className="service-number">
                {service.s_no}
              </span>

              <div className="service-icon">
                {icons[index % icons.length]}
              </div>

            </div>

            {/* Content */}
            <h2>{service.s_name}</h2>

            <p>{service.s_desc}</p>

            {/* Read More */}
            <div className="service-readmore">
              <span>Read More</span>

              <FaArrowRight className="readmore-icon" />
            </div>

            {/* Hover Number */}
            <div className="service-bg-number">
              {service.s_no}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Service;


