import "./portfolio.css"
import React from 'react'
import { Link } from 'react-router-dom';
import Project from "../../components/Project/Project.jsx"
const Portfolio = () => {
  return (
    <div className="port">
        <div className="port-texts">
            <h1 className="port-title">Innovate & Systemize, It's all Koilparampil</h1>
            <p className="port-desc">
                Here we can find a subset of the proejcts I have worked on. These include projects from the Columbia Full-Stack Web Development program.
                This is, of course, a showcase of part of my skill, as I plan to become better, day by day, every day.
                If there are any questions or concerns, please do not hesitate to <Link to="/ContactMe">contact me</Link>.
            </p>
        </div>
        <div className="port-list">
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </div>
    </div>
  )
}

export default Portfolio