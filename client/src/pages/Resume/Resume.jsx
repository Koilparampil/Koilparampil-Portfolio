import "./resume.css"
import React ,{useContext} from 'react'
import { ThemeContext } from '..//../context.js';
const Resume = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  const handleClick = () => {
    window.open("https://drive.google.com/drive/folders/1mKf_cxse5st5FpO1pyYwKc_VDyeA3RAA?usp=sharing", "_blank")
  }
  return (
    <div className="r" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
      <div className="r-button" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
        <button onClick={handleClick} style= {{backgroundColor: darkMode ? "#D66A90" : "#0C2D51" }}>Find my resume here</button>
      </div>
    </div>
  )
}
export default Resume