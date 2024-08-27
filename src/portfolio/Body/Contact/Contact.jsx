import React, { useRef } from "react";
import "./static/contact.css";
import emailjs from "emailjs-com";
import { IoMdMail } from "react-icons/io";
import { FaPhone,FaLocationDot } from "react-icons/fa6";
function Contact({ MenuData }) {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5n6mbwh",
        "template_f8jpf0h",
        form.current,
        "CcjPbY0XI5n_I7CpB"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div class="cpm mb-10" id="contact">
        {/* <!-- contactpageManagement --> */}

        <div className="contactPage mt-20 ">
          <div class="contactMsg">
            <h3 className="text-blue-950 text-2xl font-semibold mb-12">
              Contact Us
            </h3>

            <ul>
              <li className="flex mx-4 my-4">
                <div className=" ">
                  <IoMdMail
                    className="bg-blue-200 text-blue-950 px-1 py-1 rounded-md "
                    size={40}
                  />
                </div>
                <div className="text-gray-600 px-4">
                  <p className="text-gray-600 ">Email</p>
                  <a className="text-black" href="">
                    atitkunwar2015@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex mx-4 my-4">
                {" "}
                <div className=" ">
                  <FaPhone 
                    className="bg-blue-200 text-blue-950 px-1 py-1 rounded-md"
                    size={40}
                  />
                </div>
                <div className="text-gray-600 px-4">
                  <p className="text-gray-600 ">Phone</p>
                  <a className="text-black" href="">
                    9842803777
                  </a>
                </div>
              </li>  <li className="flex mx-4 my-4">
                {" "}
                <div className=" ">
                  <FaLocationDot
                    className="bg-blue-200 text-blue-950 px-1 py-1 rounded-md "
                    size={40}
                  />
                </div>
                <div className="text-gray-600 px-4">
                  <p className="text-gray-600 ">Address</p>
                  <a className="text-black" href="">
                    Chandragiri-14, Kathmandu
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="contact-container bg-white">
            <h1 className="text-blue-950  text-center font-bold text-2xl mb-12">
              Send Us a Message
            </h1>
            <form ref={form} onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" name="from_name" placeholder="Your Name"  className="border border-black "/>
              <label htmlFor="name">Email</label><input type="email" name="from_email" placeholder="Email" className="border border-black "/>
              <label htmlFor="name">Message</label><textarea placeholder="Message" name="message" className="border border-black "></textarea>
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
