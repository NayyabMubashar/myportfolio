import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                    <h1> <span>Nayab Mubashar</span>  </h1>
                <p>I’m Nayab, an entry-level Frontend Developer with hands-on experience in creating interactive UIs.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">

                    <input type='email' placeholder='Enter your email'/>
</div>

<div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left"> 2025 Nayyab Mubashar.All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy </p>
            <p>Connect With me</p>
            
            
            
            </div>
        
        </div>
      
    </div>
  )
}

export default Footer
