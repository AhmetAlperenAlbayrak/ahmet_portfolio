import React, { useState } from 'react';
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss'
import { images } from '../../constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar' >
        <div className='app__navbar-logo'>
            <a href="#home">         
            <img src={images.logo} alt="Logo" />
            </a>
        </div>
        <ul className='app__navbar-links'>
            {['home', 'about', 'testimonials', 'examplify', 'skills', 'contact' ].map((item, index) => {
                return (
                    <li className='app__flex p-text' key={`link-${index}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                        </li>
                        )
                    })}
        </ul>
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)}  />

            {toggle && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <HiOutlineX onClick={() => setToggle(false)} />
                    <ul>
                        {['home', 'about', 'testimonials', 'Examplify', 'skills', 'contact' ].map((item) => (
                                <li key={item}>
                                    <a onClick={() => setToggle(false)} href={`#${item}`}>
                                        {item}
                                        </a>
                                </li>
                                ))}
                    </ul>  
                </motion.div>
            )}
        </div>
    </nav>
  );
}

export default Navbar