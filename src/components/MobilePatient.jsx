import React, { useEffect ,useState} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import phone4 from '../images/phone10.png';
import phone5 from '../images/phone11.png';
import './Style/Service.css';

const MobilePatient = () => {
  const images = [phone4, phone5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        <h1>Read more about our Services</h1>
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
          <p>As a <span>patient</span> you can use our mobile application to :</p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={contentControls}
            transition={{ duration: 0.5 }}
          >
            <motion.li variants={variants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>Glycemia Tracking:</span> Allow patients to record and track their glycemia levels over time, storing the data for analysis and sharing with doctors.
            </motion.li>
            <motion.li variants={variants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>Appointment Scheduling:</span> Enable patients to schedule appointments with doctors, receive reminders, and manage their medical calendar.
            </motion.li>
            <motion.li variants={variants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>Health Dashboard:</span> Provide a personalized dashboard displaying glycemia trends, historical data, and insights to help patients manage their condition effectively.
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default MobilePatient;
