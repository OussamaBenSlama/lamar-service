import React , {useState,useEffect} from 'react';
import './Style/ContactContainer.css';
import contactImg from '../images/building.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { useGlobalContext } from './GlobalProvider';
import enData from './Labels/en.json';
import frData from './Labels/fr.json'

const ContactContainer = () => {

  const { lang, setLang } = useGlobalContext();
  const [data, setData] = useState({});
  
  useEffect(() => {
    if (lang === 'en') {
      setData(enData);
    } else {
      setData(frData);
    }
  }, [lang]);

  const [contactHeaderRef, contactHeaderInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [leftSideRef, leftSideInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [socialMediaRef, socialMediaInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [addressRef, addressInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [emailRef, emailInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [phoneRef, phoneInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contactCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className='Contact-container'>
      <div className="contact-header" ref={contactHeaderRef}>
        <motion.h1
          initial='hidden'
          animate={contactHeaderInView ? 'visible' : 'hidden'}
          variants={contactCardVariants}
        >
          {data.contact?.header}
        </motion.h1>
      </div>
      <div className='contact'>
        <div className='left-side' ref={leftSideRef}>
          <img src={contactImg} alt="" />
        </div>
        <div className='right-side'>
          <motion.div
            initial='hidden'
            animate={socialMediaInView ? 'visible' : 'hidden'}
            variants={contactCardVariants}
            className='contact-card'
            ref={socialMediaRef}
          >
            <div>
              <p>{data.contact?.header} <br /> {data.contact?.content}</p> <br />
              <span>
                <FontAwesomeIcon icon={faFacebook} style={{ margin: '0.5rem' }} />
                <FontAwesomeIcon icon={faInstagram} style={{ margin: '0.5rem' }} />
                <FontAwesomeIcon icon={faLinkedin} style={{ margin: '0.5rem' }} />
                <FontAwesomeIcon icon={faTwitter} style={{ margin: '0.5rem' }} />
              </span>
            </div>
          </motion.div>
          <motion.div
            initial='hidden'
            animate={addressInView ? 'visible' : 'hidden'}
            variants={contactCardVariants}
            className='contact-card'
            ref={addressRef}
          >
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ margin: '0.5rem', fontSize: '2.5rem' }} /> <br />
              <p>ADDRESS :</p> <br />
              <p>BP 223 Av. de la Corniche, Monastir 5000</p>
            </div>
          </motion.div>
          <motion.div
            initial='hidden'
            animate={emailInView ? 'visible' : 'hidden'}
            variants={contactCardVariants}
            className='contact-card'
            ref={emailRef}
          >
            <div>
              <FontAwesomeIcon icon={faEnvelope} style={{ margin: '0.5rem', fontSize: '2.5rem' }} /> <br />
              <p>EMAIL :</p> <br />
              <p>contact@lamar-service.com</p>
            </div>
          </motion.div>
          <motion.div
            initial='hidden'
            animate={phoneInView ? 'visible' : 'hidden'}
            variants={contactCardVariants}
            className='contact-card'
            ref={phoneRef}
          >
            <div>
              <FontAwesomeIcon icon={faPhoneSquare} style={{ margin: '0.5rem', fontSize: '2.5rem' }} /> <br />
              <p>PHONE :</p> <br />
              <p>+216 28281153</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
