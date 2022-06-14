import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

import { client } from '../../client';
import './ContactForm.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, company, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      company: formData.company,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    {!isFormSubmitted ? (
        <form 
        className="app__footer-form app__flex" name="contact" action="?" method="POST">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Company" name="company" value={company} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <ReCAPTCHA
          sitekey="6LdArWggAAAAAEQI4wfaODgc7ImRzJaZQS2us4gp"
          onChange={handleSubmit}
          />
          <button type="button" className="p-text" onClick={handleSubmit}  
          data-action='submit'>{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default ContactForm;