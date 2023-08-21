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
                            <div className="i-title-item" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>Graduate Applicant</div>
                        </div>
                    </div>
                    <p className="i-desc" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
                        I am coming out of the Tandon Bridge Program, a course from New York University. I have a Bachelor's in Electrical Engineering and have successfullly
                        taken subsequent courses in Web Development from esteemed institutions such as Southern Methodist University, and Columbia University.
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