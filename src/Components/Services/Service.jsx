import React from 'react'
import './Service.css'
import ServiceData from '../../assets/Service_Data'

const Service = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
        
            </div>
            <div className="services-container">
              {ServiceData.map((service,index)=>{
                 return <div key={index} className='service-format'>
               <h3>{service.s_no}</h3>
                  <h2>{service.s_name}</h2>
                  <p>{service.s_desc}</p>
                  <div className="service-readmore">
                    <p>Read More</p>
                

                  </div>
                 </div>
              })}
            </div>
      
    </div>
  )
}

export default Service
