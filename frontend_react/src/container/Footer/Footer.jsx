import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { ContactForm } from '../../components';
import './Footer.scss';

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-badge">
          <div className="tag-cmp app-flex">
            <h3 className='title-text'>Personal Reasons</h3>
            <p className="p-text">Just want to get to know you π«</p>
            <br />
            <p className="p-text">Mutual experience exchange π€</p>
            <br />
            <p className="p-text">Want to be share my experience π€</p>
            <br />
            <p className="p-text">Need to get out of my comfort zone π§</p>
            <br />
            <p className="p-text">Something else π</p>
          </div>

          <div className="tag-cmp app-flex">
          <h3 className='title-text'>Business Related</h3>
            <p className="p-text">Setup customized customer support center π¦ΈββοΈ</p>
            <br />
            <p className="p-text">Increasing productivity of my Sales team π€</p>
            <br />
            <p className="p-text">Interconnect my global business π€</p>
            <br />
            <p className="p-text">180+ International Numbers, I am in. π€―</p>
            <br />
            <p className="p-text">Have/Had bad experience, convince me π²</p>
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
      <ContactForm/>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);