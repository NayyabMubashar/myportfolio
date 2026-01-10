import React from 'react'
import './Hero.css'
import pics from '../../assets/pics.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  
  return (
    <div id='home' className='hero'>
        <img src={pics} alt='pic'/>
        <h1> <span>I'm Nayab Mubashar,</span>  Frontend Developer</h1>
        <p>Building beautiful, fast, and intuitive web experiences.
I love designing UI that feels smooth, modern, and enjoyable to use.</p>
        <div className="hero-action">
            <div className="hero-connect">  <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With me </AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
      
    </div>
  )
}

export default Hero
