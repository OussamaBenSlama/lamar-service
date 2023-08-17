import React ,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import phone4 from '../images/phone3.png';
import phone5 from '../images/phone6.png';
import phone from '../images/phone7.png'
import './Style/Service.css';

const MobileDoctor = () => {
  const images = [phone4, phone5,phone];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [leftSideRef, leftSideInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust threshold if needed
  });

  const [rightSideRef, rightSideInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust threshold if needed
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='Service-container'>
      <div className='Service reverse'>
        <motion.div
          ref={leftSideRef}
          initial="hidden"
          animate={leftSideInView ? 'visible' : 'hidden'}
          variants={variants}
          className='left-side'
        >
          <p>As a <span>doctor</span> you can use our mobile application to :</p>
          <motion.ul
            initial="hidden"
            animate={leftSideInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="animated-list"
          >
            <motion.li variants={listItemVariants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>Patient Management:</span> Allow doctors to access and manage patient profiles, including medical history, test results, and treatment plans.
            </motion.li>
            <motion.li variants={listItemVariants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>Customized Treatment Plans:</span> Create personalized treatment plans for each patient based on their medical history, glycemia data, and lifestyle factors.
            </motion.li>
            <motion.li variants={listItemVariants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>Data Analysis:</span> Provide tools to analyze patients' glycemia data, identify trends, and make informed decisions about treatment adjustments.
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          ref={rightSideRef}
          initial="hidden"
          animate={rightSideInView ? 'visible' : 'hidden'}
          variants={variants}
          className='right-side img'
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
              // className={index === 0 ? 'phone-frame' : 'pc-frame'}
              
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default MobileDoctor;
