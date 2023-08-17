import React, { useEffect ,useState} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import pc1 from '../images/pc1.png';
import pc2 from '../images/pc2.png';
import pc3 from '../images/pc3.png';
import './Style/Service.css';

const WebDoctor = () => {
  const images = [pc1,pc2,pc3];
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
                
                maxWidth:'99%'
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
          <p>As a <span>doctor</span> you can use our web application for more features :</p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={contentControls}
            transition={{ duration: 0.5 }}
          >
            <motion.li variants={variants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>Enhanced Data Visualization:</span> Provide more advanced data visualization tools such as interactive charts, graphs, and trends to help 
              doctors analyze glycemia data more effectively.
            </motion.li>
            <motion.li variants={variants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>Multi-Patient Management:</span> Allow doctors to manage and monitor multiple patients' glycemia data from a single dashboard, 
              making it easier to track trends and patterns across patients.
            </motion.li>
            <motion.li variants={variants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>Patient Comparison:</span> Enable doctors to compare the glycemia data of multiple patients side by side, 
              helping them identify similarities and differences in their conditions.
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDoctor;
