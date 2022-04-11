import React ,{useContext} from 'react'
import "./about.css"
import Me from "..//..//img//inASuit.jpg"
import C from "..//..//img//Columbia.png"
import MC from "..//..//img//MC.jpg"

import { ThemeContext } from '..//../context.js';

 const About = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="a" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
      <div className="a-left" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
        <div className="a-card bg" style={ {backgroundColor: darkMode ? "#D66A90": "#154983"}}></div>
        <div className="a-card" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
          <img src={Me} alt="" className='a-img'/>
        </div>
      </div>
      <div className="a-right" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
        <h1 className="a-title" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>About Me</h1>
        <p className="a-sub" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
        "All we wanna know, is where the stars came from, but do we ever stop, ever stop to watch them shine? 
Or are we staring with, staring with ungrateful eyes?"-Jon Bellion 
        </p>
        <p className="a-desc" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
           As a resident New Yorker, I can very usually be found in one of three places, in traffic, on the Subway, or behind my computer typing away at my latest project.
           After successfully completing my Bachelor's Degree in Electrical Engineering at the esteemed Manhattan College, I went to the renowned Columbia University to get certified for Web Development. 
           I look forward to any projects on which we may work together. 
        </p>
        <div className="a-colleges" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
          <img src={MC} alt="" className="a-college-imgMC" />
          <img src={C} alt="" className="a-college-imgC" />
        </div>
      </div>
    </div>
  )
}

export default About