import "./portfolio.css"
import React ,{useContext} from 'react'
import { Link } from 'react-router-dom';
import Project from "../../components/Project/Project.jsx"
import {projectlist} from "../../data.js"

import { ThemeContext } from '..//../context.js';

const Portfolio = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="port" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
        <div className="port-texts" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
            <h1 className="port-title" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>Innovate & Systemize, It's all Koilparampil</h1>
            <p className="port-desc" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
                Here we can find a subset of the projects I have worked on. These include projects from the Columbia Full-Stack Web Development program.
                This is, of course, a showcase of part of my skill, as I plan to become better, day by day, every day.
                If there are any questions or concerns, please do not hesitate to <Link to="/ContactMe">contact me</Link>.
            </p>
        </div>
        <div className="port-list" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
            {
              projectlist.map((item)=>(<Project key={item.id} img ={item.img} link={item.link} Pname={item.Pname} />))
            }
            
        </div>
    </div>
  )
}

export default Portfolio