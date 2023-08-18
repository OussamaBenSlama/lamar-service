import React, { useEffect ,useState} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from './GlobalProvider';
import enData from './Labels/en.json';
import frData from './Labels/fr.json'
import phone4 from '../images/phone10.png';
import phone5 from '../images/phone11.png';
import './Style/Service.css';

const MobilePatient = () => {
  const images = [phone4, phone5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { lang, setLang } = useGlobalContext();
  const [data, setData] = useState({});
  
  useEffect(() => {
    if (lang === 'en') {
      setData(enData);
    } else {
      setData(frData);
    }
  }, [lang]);
 console.log(data.mobilePatient)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [leftSideRef, leftSideInView] = useInView({
    triggerOnce: true,
  });

  const [rightSideRef, rightSideInView] = useInView({
    triggerOnce: true,
  });

  const contentControls = useAnimation();

  useEffect(() => {
    if (leftSideInView || rightSideInView) {
      contentControls.start({ opacity: 1, translateY: 0 });
    }
  }, [leftSideInView, rightSideInView, contentControls]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <div className='Service-container'>
      <div className="Header-service">
        <h1>{data?.mobilePatient?.header}</h1>
      </div>
      <div className='Service'>
        <motion.div
          ref={leftSideRef}
          initial="hidden"
          animate={contentControls}
          variants={variants}
          className='left-side img'
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={` ${index + 1}`}
              style={{
                display: index === currentImageIndex ? 'block' : 'none',
                borderRadius:'1.2rem'
              }}
              
              
            />
          ))}
        </motion.div>
        <motion.div
          ref={rightSideRef}
          initial="hidden"
          animate={contentControls}
          variants={variants}
          className='right-side'
        >
          <p>{data.mobilePatient?.title1} <span>{data.mobilePatient?.span}</span> {data.mobilePatient?.title2}</p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={contentControls}
            transition={{ duration: 0.5 }}
          >
            <motion.li variants={variants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>{data.mobilePatient?.item1?.span}</span> {data.mobilePatient?.item1?.content}
            </motion.li>
            <motion.li variants={variants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>{data.mobilePatient?.item2?.span}</span> {data.mobilePatient?.item2?.content}
            </motion.li>
            <motion.li variants={variants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>{data.mobilePatient?.item3?.span}</span> {data.mobilePatient?.item3?.content}
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default MobilePatient;
