import "./home.css"
import Me from "..//..//img//pfp.png"
const Home =() => {
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Chris Koilparampil</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Full-Stack Developer</div>
                            <div className="i-title-item">Technical Consultant</div>
                            <div className="i-title-item">Software Engineer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I am coming out of a course at Columbia University. I specialize in the back-end, and love creating a more functional approach to problems I face.
                    </p>
                </div>
            </div> 
            <div className="i-right">
                <img src={Me} alt="profile avatar of me" className="i-img" />
            </div>
        </div>
    )
}

export default Home