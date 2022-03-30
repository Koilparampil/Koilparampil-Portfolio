import React from 'react'
import "./about.css"
import Me from "..//..//img//inASuit.jpg"
import C from "..//..//img//Columbia.png"
import MC from "..//..//img//MC.jpg"
 const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className='a-img'/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        "All we wanna know, is where the stars came from, but do we ever stop, ever stop to watch them shine? 
Or are we staring with, staring with ungrateful eyes?"-Jon Bellion 
        </p>
        <p className="a-desc">
           As a resident new yorker, I can very usually be found in one of three places, in traffic, on the Subway, or behind my computer typing away at my latest project.
           After successfully completing my Bachelor's Degree in Electrical Engineering at the esteemed Manhattan College, I went to the renowned Columbia University to get certified for Web Development. 
           I look forward to any projects on which we may work together. 
        </p>
        <div className="a-colleges">
          <img src={MC} alt="" className="a-college-imgMC" />
          <img src={C} alt="" className="a-college-imgC" />
        </div>
      </div>
    </div>
  )
}

export default About