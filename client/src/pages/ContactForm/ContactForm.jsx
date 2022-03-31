import "./contactform.css"
import React, {useRef, useState, useContext} from 'react'
import Phone from "..//../img//phone.png"
import Email from "../../img/email.png"
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import { ThemeContext } from '..//../context.js';
init("yp4VQTtDcerWbUJ7Y");
 const ContactForm = () => {
   const formRef = useRef();
   const [done, setDone] = useState(false)
   const handleSubmit = (e) =>{
     e.preventDefault();
     console.log("clicked")
     emailjs.sendForm('service_koilparampilport', 'template_7qcwhll', formRef.current, 'yp4VQTtDcerWbUJ7Y')
     .then((result) => {
         console.log(result.text);
         setDone(true)
     }, (error) => {
         console.log(error.text);
     });
   }
   const theme = useContext(ThemeContext)
   const darkMode = theme.state.darkMode
  return (
    <div className="c" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
      <div className="c-bg" style={{backgroundColor: darkMode ? "#D66A90" : "#0C2D51" }}> </div> 
        <div className="c-wrapper" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
          <div className="c-left" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
            <h1 className="c-title" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}> Contact me !</h1>
            <div className="c-info" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
              <div className="c-info-item" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
                <img src={Phone} alt="" className="c-icon" />
                +1 718 673 0458
              </div>
              <div className="c-info-item" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
                <img src={Email} alt="" className="c-icon" />
                <a href="mailto:koilparampil0126@gmail.com">koilparampil0126@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="c-right" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
            <p className="c-desc" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
              <b style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}> What's up?</b> Get in touch with me. I am always willing to lend an ear!
            </p>
            <form ref={formRef}  onSubmit={handleSubmit} style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
              <input type="text" placeholder="Name" name="user_name"  style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}/>
              <input type="text" placeholder="Subject" name="user_subject" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}/>
              <input type="text" placeholder="Email" name="user_email" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }} />
              <textarea name="message" placeholder="Message" rows="10" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}></textarea>
              <button type="Submit" style= {{backgroundColor: darkMode ? "#D66A90" : "#0C2D51" }}>Submit</button>
              {done && "Thank you for your Message"}
            </form>
          </div>
        </div>
      
    </div>
  )
}
export default ContactForm