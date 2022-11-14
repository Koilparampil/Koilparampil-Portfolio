import "./home.css"
import Me from "..//..//img//pfp.png"
import React ,{useContext} from 'react'
import { ThemeContext } from '..//../context.js';
const Home =() => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return(
        <div className="i" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
            <div className="i-left" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
                <div className="i-left-wrapper" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
                    <h2 className="i-intro" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>Hello, My name is</h2>
                    <h1 className="i-name" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>Chris Koilparampil</h1>
                    <div className="i-title" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
                        <div className="i-title-wrapper" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
                            <div className="i-title-item" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>Web Developer</div>
                            <div className="i-title-item" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>Full-Stack Developer</div>
                            <div className="i-title-item" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>Technical Consultant</div>
                            <div className="i-title-item" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>Software Engineer</div>
                        </div>
                    </div>
                    <p className="i-desc" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
                        I am coming out of a course from Southern Methodist University in conjunction with Cognizant and 2U. I specialize in the back-end, and love creating a more functional approach to problems I face.
                    </p>
                </div>
            </div> 
            <div className="i-right" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
                <img src={Me} alt="profile avatar of me" className="i-img" />
            </div>
        </div>
    )
}

export default Home