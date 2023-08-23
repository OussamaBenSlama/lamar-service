import React , {useState,useEffect} from 'react';
import aboutImg from '../images/aboutImg.jpg';
import './Style/Section.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useGlobalContext } from './GlobalProvider';
import enData from './Labels/en.json';
import frData from './Labels/fr.json'

const AboutContainer = () => {

  const { lang, setLang } = useGlobalContext();
  const [data, setData] = useState({});
  
  useEffect(() => {
    if (lang === 'en') {
      setData(enData);
    } else {
      setData(frData);
    }
  }, [lang]);

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
            <h2>{data.about?.header}</h2>
            <p>
            {data.about?.content}
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
