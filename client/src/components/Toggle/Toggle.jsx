import "./toggle.css"
import React, { useContext } from 'react'
import sun from "../../img/sun.png"
import moon from "../../img/moon.png"
import { ThemeContext } from "../../context"
const Toggle = () =>
{
    const handleClick =() =>{
        theme.dispatch({type:"TOGGLE"})
    }
    const theme =useContext(ThemeContext)
    return (
        <div className="t">
            <img src={sun} alt="sun" className="t-icon" />
            <img src={moon} alt="moon" className="t-icon" />
            <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
}

export default Toggle