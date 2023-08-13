import React from 'react';
import aboutImg from '../images/aboutImg.jpg';
import './Style/Section.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutContainer = () => {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2,    // Animation starts when 20% of the element is visible
  });

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className='Section'>
      <div className='content-section' ref={contentRef}>
        <motion.div
          initial='hidden'
          animate={contentInView ? 'visible' : 'hidden'}
          variants={contentVariants}
        >
          <div>
            <h2>About Us</h2>
            <p>
              Lamar Service is a pioneering tech company specializing in
              crafting cutting-edge web and mobile applications. With a
              fervent dedication to innovation and an unwavering commitment
              to quality, we harness our expertise to bring your ideas to life.
            </p>
          </div>
        </motion.div>
      </div>
      <div className='images-section'>
        <img src={aboutImg} alt="" style={{ maxWidth: '100%' }} />
      </div>
    </div>
  );
};

export default AboutContainer;
