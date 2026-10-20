import React, { useState } from 'react';
import './Contact.css';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const formData = new FormData(event.target);

    formData.append(
      'access_key',
      'f07d4a0e-6d6d-4ae5-adb8-39175515c92b'
    );

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully! ✓');
        event.target.reset();
      } else {
        setResult('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setResult('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact">

      {/* Heading */}
      <div className="contact-title">
        <span>GET IN TOUCH</span>

        <h1>
          Let's <strong>Talk</strong>
        </h1>

        <p>
          Have a project in mind or want to discuss an opportunity?
          I'd love to hear from you.
        </p>

        <div className="contact-line"></div>
      </div>

      {/* Contact Content */}
      <div className="contact-section">

        {/* Left Side */}
        <div className="contact-left">

          <div className="contact-intro">
            <span className="contact-small-title">
              HAVE AN IDEA?
            </span>

            <h2>
              Let's build something
              <span> amazing together.</span>
            </h2>

            <p>
              I'm always open to discussing new projects, creative ideas,
              collaborations, or job opportunities. Feel free to reach out
              and I'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Details */}
          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>Email</span>
                <a className="contact-value-link" href="mailto:nayabmubashar0@gmail.com">nayabmubashar0@gmail.com</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <span>Phone</span>
                <p>03474927950</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>Location</span>
                <p>CA, United States</p>
              </div>
            </div>

            <a className="contact-detail contact-social-link" href="https://github.com/NayyabMubashar" target="_blank" rel="noreferrer" aria-label="Visit Nayab Mubashar on GitHub">
              <div className="contact-icon" aria-hidden="true"><FaGithub /></div>
              <div><span>GitHub</span><p>NayyabMubashar</p></div>
            </a>

            <a className="contact-detail contact-social-link" href="https://www.linkedin.com/in/nayab-mubashar-67882925b/" target="_blank" rel="noreferrer" aria-label="Visit Nayab Mubashar on LinkedIn">
              <div className="contact-icon" aria-hidden="true"><FaLinkedinIn /></div>
              <div><span>LinkedIn</span><p>Nayab Mubashar</p></div>
            </a>

          </div>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={onSubmit}
          className="contact-right"
        >

          <div className="form-heading">
            <h2>Send me a message</h2>
            <p>
              Fill out the form below and I'll get back to you shortly.
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="contact-name">Your Name</label>

            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Your Email</label>

            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Your Message</label>

            <textarea
              name="message"
              id="contact-message"
              rows="6"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="contact-submit"
          >
            <span>Send Message</span>
            <FaPaperPlane />
          </button>

          {result && (
            <p className="form-result">
              {result}
            </p>
          )}

        </form>

      </div>
    </section>
  );
};

export default Contact;
