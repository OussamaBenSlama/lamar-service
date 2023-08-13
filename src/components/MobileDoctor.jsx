import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import phone from '../images/phone.png';
import './Style/Service.css';

const MobileDoctor = () => {
  const [leftSideRef, leftSideInView] = useInView({
    triggerOnce: true,
  });

  const [rightSideRef, rightSideInView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
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
            initial={{ opacity: 0 }}
            animate={leftSideInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.li>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>Patient Management:</span> Allow doctors to access and manage patient profiles, including medical history, test results, and treatment plans.
            </motion.li>
            <motion.li>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>Customized Treatment Plans:</span> Create personalized treatment plans for each patient based on their medical history, glycemia data, and lifestyle factors.
            </motion.li>
            <motion.li>
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
          <img src={phone} alt="" />
        </motion.div>
      </div>
    </div>
  );
}

export default MobileDoctor;
