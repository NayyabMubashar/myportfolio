import React from 'react'
import './Mywork.css'
import myworkData from '../../assets/mywork_Data'
import download from '../../assets/download.png';
const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
        </div>
        <div className="mywork-container">
       {myworkData.map((work,index)=>{
        return<img key ={index} src={work.w_img} alt='' style={{height:'400px',width:'400px'}}/>

    
       })}

        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
           <i class="ri-arrow-right-line"></i>

        </div>

      
    </div>
  )
}

export default Mywork
