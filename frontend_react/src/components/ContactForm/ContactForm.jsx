import React from 'react';
import './ContactForm.scss';

const ContactForm = () => {

  return (
    <form name="contact" method="post" className="app__footer-form app__flex">
        <input type="hidden" name="form-name" value="contact" />
            <div className="app__flex">
                <input className="p-text" type="text" id="name" name="name" placeholder='Your Name' pattern="[a-zA-Z'-'\s]*" title="Your Name doesn't match the criteria" required />
            </div>
            <div className="app__flex">
                <input className="p-text" type="text" id="company" name="company" placeholder='Your Company' required />
            </div>
            <div className="app__flex">
                <input className="p-text" type="email" id="email" name="email" placeholder='Your Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please Enter Valid Email Id" required />
            </div>
            <div>
                <textarea className="p-text" id="message" name="message" placeholder='Your Message' required></textarea>
            </div>
            <p>
                <input className="p-text btn-submit" type="submit" value="Submit message" />
            </p>
    </form>
  );
};

export default ContactForm;