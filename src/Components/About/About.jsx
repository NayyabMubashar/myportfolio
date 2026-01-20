import React from 'react'
import './About.css'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        
        </div>
        <div className="about-section">
            
            <div className="about-right">
                <div className="about-para">
                    <p>I’m Nayab, an entry-level Frontend Developer with hands-on experience in creating interactive UIs.
I have a solid understanding of HTML, CSS, JavaScript, and React.
I learn quickly, adapt easily, and love solving problems.
I’m actively seeking a junior role to apply my skills and grow in the industry.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS </p><hr style={{width:'70%'}}/></div>
                     <div className="about-skill"><p>JavaScript </p><hr style={{width:'67%'}}/></div>
                      <div className="about-skill"><p>Bootstrap </p><hr style={{width:'50%'}}/></div>
                       <div className="about-skill"><p> React JS</p><hr style={{width:'80%'}}/></div>
                </div>

                <div className="about-achievments">
                    <div className="about-achievment">
                        <h1>2+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr/>
                     <div className="about-achievment">
                        <h1>10+</h1>
                        <p>PROJECT COMPLETED</p>
                    </div>
                    <hr/>
                     <div className="about-achievment">
                        <h1>6+</h1>
                        <p>HAPPY CLIENTS</p>
                    </div>
                    <hr/>
                </div>
               
            </div>
        </div>
      
    </div>
  )
}

export default About
