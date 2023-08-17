import React ,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import pc1 from '../images/pc7.png';
import pc2 from '../images/pc8.png';
import pc3 from '../images/pc9.png'
import './Style/Service.css';

const Administrator = () => {
  const images = [pc1, pc2,pc3];
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
      <div className='Service ' style={{display:'block' , paddingLeft:'0'}}>
        <motion.div
          ref={leftSideRef}
          initial="hidden"
          animate={leftSideInView ? 'visible' : 'hidden'}
          variants={variants}
          className='left-side'
          style={{display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:'3rem'}}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={` ${index + 1}`}
              style={{
                display: index === currentImageIndex ? 'block' : 'none',
                maxWidth:'99%'
              }}
              // className={index === 0 ? 'phone-frame' : 'pc-frame'}
              
            />
          ))}
        </motion.div>
        <motion.div
          ref={rightSideRef}
          initial="hidden"
          animate={rightSideInView ? 'visible' : 'hidden'}
          variants={variants}
          className='right-side '
        >
          
          <p>For more functionalities a doctor can sign up as an <span>Administrator</span> :</p>
          <motion.ul
            initial="hidden"
            animate={leftSideInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="animated-list"
          >
            <motion.li variants={listItemVariants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>Doctor and Patient Management:</span> The Administrator can efficiently manage the network of doctors and patients registered in the app. This includes the ability to onboard new doctors and patients, review their profiles,
               and manage their access levels to the app's functionalities.
            </motion.li>
            <motion.li variants={listItemVariants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>Service and Specialty Addition:</span> Administrators can enrich the app's offerings by adding new medical services and specialties. This empowers doctors to provide comprehensive healthcare solutions to their patients and
               enables patients to find the specialized care they need easily.
            </motion.li>
            <motion.li variants={listItemVariants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>Flexibility and Adaptability:</span> The app's Administrator features are designed to adapt to the evolving healthcare landscape. As medical practices and patient needs change, administrators 
              can seamlessly modify the app's settings to accommodate new requirements.
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Administrator;
