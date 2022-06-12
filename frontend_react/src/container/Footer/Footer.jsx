import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
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
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-badge">
          <div className="tag-cmp app-flex">
            <h3 className='title-text'>Personal Reasons</h3>
            <p className="p-text">Just want to get to know you 🫂</p>
            <br />
            <p className="p-text">Mutual experience exchange 🤝</p>
            <br />
            <p className="p-text">Want to be share my experience 🤓</p>
            <br />
            <p className="p-text">Need to get out of my comfort zone 🧐</p>
            <br />
            <p className="p-text">Something else 😐</p>
          </div>

          <div className="tag-cmp app-flex">
          <h3 className='title-text'>Business Related</h3>
            <p className="p-text">Setup customized customer support center 🦸‍♂️</p>
            <br />
            <p className="p-text">Increasing productivity of my Sales team 🤌</p>
            <br />
            <p className="p-text">Interconnect my global business 🤗</p>
            <br />
            <p className="p-text">180+ International Numbers, I am in. 🤯</p>
            <br />
            <p className="p-text">Have/Had bad experience, convince me 😲</p>
          </div>
       </div>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:ahmet.albayrak@cloudtalk.io" className="p-text">ahmet.albayrak@cloudtalk.io</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex">
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
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
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

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);