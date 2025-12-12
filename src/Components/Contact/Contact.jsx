import React from 'react'
import './Contact.css'
import { useState } from 'react';
const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "f07d4a0e-6d6d-4ae5-adb8-39175515c92b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    console.log(data);
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };



  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>Let’s connect and bring your ideas to life.
I’m always open to discussing new projects, collaborations, or job opportunities.
Whether you need a frontend developer or just want to say hello, feel free to reach out.
I’ll get back to you as soon as possible.
Let’s build something amazing together.</p>
            <div className="contact-details">
            <div className="contact-detail">
             <i class="ri-message-3-line"></i>
<p>nayabmubashar0@gmail.com</p>
            </div>
               <div className="contact-detail">
                <i class="ri-phone-line"></i>
<p>03474927950</p>
            </div>
               <div className="contact-detail">
                <i class="ri-map-pin-line"></i>
<p>CA ,United state</p>
            </div>

            </div>
            
            </div>

            <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor=''>Your Name</label>
      <input type='text' placeholder='Enter your name ' name='name'/>
        <label htmlFor=''>Your Email</label>
        <input type='email' placeholder='Enter your email'/>
         <label htmlFor=''>Write your message here</label>
         <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
  <button type='submit' className='contact-submit'>Submit Now</button>
        <span>{result}</span>

  </form>
        </div>
      
    </div>
  )
}

export default Contact
