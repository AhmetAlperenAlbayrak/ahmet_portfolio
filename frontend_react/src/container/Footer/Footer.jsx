import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { ContactForm } from '../../components';
import './Footer.scss';

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Take a <span>coffee & chat</span> with me</h2>
      <div className="app__footer-badge">
          <div className="tag-cmp app-flex">
            <h3 className='title-text'>Personal Reasons</h3>
            <p className="p-text">Just want to get to know you 🫂</p>
            <br />
            <p className="p-text">Mutual experience exchange 🤝</p>
            <br />
            <p className="p-text">I want to have a website like this 🤓</p>
            <br />
            <p className="p-text">Need to get out of my comfort zone 🧐</p>
            <br />
            <p className="p-text">Something else 🧐</p>
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
          <a href="tel:+1 (123) 456-7890" className="p-text">Coming Soon</a>
        </div>
      </div>
      <ContactForm/>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);