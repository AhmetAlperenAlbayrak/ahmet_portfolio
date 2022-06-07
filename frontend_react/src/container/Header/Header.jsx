import React from 'react'
import './Header.scss'
import { AppWrap } from '../../wrapper';

import { motion } from 'framer-motion';
import { images } from '../../constants';

const scaleVariants = {
    whileInView: {
        scale: [0,1],
        opacity: [0,1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        },
    },
};

const Header = () => (
    <header className='app__header app__flex' >
      <motion.div
       whileInView={{ x: [-100 , 0], opacity: [0, 1] }}
       transition={{ duration: 0.5 }}
       className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span><img className='badge-cmp-img' src={images.hello} /></span>
            <div style={{marginLeft: 20}}>
              <p className="p-text">HELLO, I AM</p>
              <h1 className="head-text">A. Ahmet Albayrak</h1>
            </div>
          </div>

          <div className="tag-cmp app-flex">
            <p className="p-text">Sales Development Rep. by Cloudtalk</p>
            <p className="p-text">Web Developer by myself</p>
          </div>

          <div className="tag-cmp app-flex">
            <p className="p-text">Welcome to the website of the first SDR in the world who created his own website.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle} 
          alt="profile_circle"
          className='overlay_circle'
          />
         </motion.div>
        
        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='app__header-circles'
        >
          {[images.LinkedinMessage_Logo,images.email_logo,images.call_logo].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          ))}
        </motion.div>
    </header>
  )

export default AppWrap(Header, 'home')