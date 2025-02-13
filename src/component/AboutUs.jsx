import React from 'react'
import img from "../assets/Screenshot 2025-02-06 222844.png"
import "../assets/aboutus.css"
export const AboutUs = () => {
  return (
    <div class="aboutus">
        {/* <iframe src={img} frameborder="0" width="50px" height="50px"></iframe> */}
        
        <p style={{width:"500px",color:"red"}}>Hello I AM ROYAL STUDENT.</p>
        <img src={img} alt="" id="img" />
    </div>
  )
}