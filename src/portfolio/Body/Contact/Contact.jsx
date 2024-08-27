import React,{useRef} from "react";
import "./static/contact.css";
import emailjs from "emailjs-com";
function Contact({ MenuData }) {
  const form = useRef();

  const handleSubmit = (e) => {

      e.preventDefault();
  
      emailjs
        .sendForm('service_5n6mbwh', 'template_f8jpf0h', form.current, 
         'CcjPbY0XI5n_I7CpB'
        )
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },

        );
        e.target.reset();
    };
  return (
    <>
      <div class="cpm mb-10" id="contact">
        {/* <!-- contactpageManagement --> */}
        <h1 className="mt-10 text-center font-bold text-2xl">Get In Touch</h1>

        <div className="contactPage " >
          <div class="contactMsg">
            <h3>Contact for more info</h3>
            <h4>To Contact with us </h4>
            <span>
              Provide your detail information and the explain the subject matter
              briefly and contact
              <ul>
                <li>contact to our mail id </li>
                <li>contact to our contact number</li>
                <li>or Directly visit to our office</li>
                <li>
                  <a href="">9842803777</a>
                </li>
                <li>
                  <a href="">atit.191508@ncit.edu.np</a>
                </li>
              </ul>
            </span>
          </div>
          <div class="contact-container">
            <h1 className="text-white text-center font-bold text-2xl">Contact Us</h1>
            <form  ref={form}  onSubmit={handleSubmit}>
              <input type="text" name='from_name' placeholder="Your Name" />
              <input type="email" name='from_email' placeholder="Email" />
              <textarea placeholder="Message" name='message'></textarea>
              <button type="submit">Send Message</button>
              {/* <input type="submit" value='Send Message' /> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
