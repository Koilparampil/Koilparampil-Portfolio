import "./project.css"

import React from 'react'

const Project = ({img, link, Pname}) => {
  return (
    <div className="p">
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-Pname">{Pname}</div>
        </div>
        <a href={link} target="_blank" rel="noreferrer"> 
        <img src={img} alt="List of Completed Works" className="p-img" />
        </a>
    </div>
  )
}

export default Project