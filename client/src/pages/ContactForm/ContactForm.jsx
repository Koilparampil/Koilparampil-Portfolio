import "./contactform.css"
import React, {useRef, useState} from 'react'
import Phone from "..//../img//phone.png"
import Email from "../../img/email.png"
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
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

  return (
    <div className="c">
      <div className="c-bg"> </div> 
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title"> Contact me !</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +1 718 673 0458
              </div>
              <div className="c-info-item">
                <img src={Email} alt="" className="c-icon" />
                <a href="mailto:koilparampil0126@gmail.com">koilparampil0126@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b> What's up?</b> Get in touch with me. I am always willing to lend an ear!
            </p>
            <form ref={formRef}  onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="text" placeholder="Email" name="user_email" />
              <textarea name="message" placeholder="Message" rows="10"></textarea>
              <button type="Submit">Submit</button>
              {done && "Thank you for your Message"}
            </form>
          </div>
        </div>
      
    </div>
  )
}
export default ContactForm