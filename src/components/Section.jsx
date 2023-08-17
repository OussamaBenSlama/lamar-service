import React, { useState, useEffect } from 'react';
import './Style/Section.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useGlobalContext } from './GlobalProvider';
import enData from './Labels/en.json';
import frData from './Labels/fr.json'
import phone4 from '../images/phone4.png';
import phone5 from '../images/phone5.png';


const Section = () => {
  const images = [phone4, phone5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const { lang, setLang } = useGlobalContext();
  const [data, setData] = useState({});
  
  useEffect(() => {
    if (lang === 'en') {
      setData(enData);
    } else {
      setData(frData);
    }
  }, [lang]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const contentControls = useAnimation();
  const imagesControls = useAnimation();

  const [contentRef, contentInView] = useInView();
  const [imagesRef, imagesInView] = useInView();

  useEffect(() => {
    if (contentInView) {
      contentControls.start({ opacity: 1, translateY: 0 });
    }
  }, [contentInView, contentControls]);

  useEffect(() => {
    if (imagesInView) {
      imagesControls.start({ opacity: 1, translateY: 0 });
    }
  }, [imagesInView, imagesControls]);

  useEffect(() => {
    let charIndex = 0;
    let typingInterval;
  
    const typeCharacter = () => {
      setTypedText(data?.targetText?.substring(0, charIndex));
      charIndex = (charIndex + 1) % (data?.targetText?.length + 1);
    };
  
    typingInterval = setInterval(typeCharacter, 400);
  
    return () => clearInterval(typingInterval);
  }, []);
  
  

  return (
    <div className="Section">
      <div className="content-section" ref={contentRef}>
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={contentControls}
          transition={{ duration: 1.5 }}
        >
          <div>
            <h2>
              {data.sectionHeader1}{' '}
              <span style={{ color: '#1AA7EC' }}>Your Partner in {typedText}</span>
            </h2>
            <p>
                {data.sectionDescription}
            </p>
            <div className='btn'>
              <button>{data.sectionBtn1}</button>
              <button
                style={{ backgroundColor: '#ffffff', color: '#1AA7EC', border: '1px solid #1AA7EC' }}
              >{data.sectionBtn2}</button>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="images-section" ref={imagesRef}>
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={imagesControls}
          transition={{ duration: 1 }}
        >
          <div className="images-cercle">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={` ${index + 1}`}
              style={{
                display: index === currentImageIndex ? 'block' : 'none',
              }}
              // className={index === 0 ? 'phone-frame' : 'pc-frame'}
              className='phone-frame'
            />
          ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section;
