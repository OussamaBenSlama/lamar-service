import React, { useEffect ,useState} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from './GlobalProvider';
import enData from './Labels/en.json';
import frData from './Labels/fr.json'
import pc1 from '../images/pc4.png';
import pc2 from '../images/pc5.png';
import pc3 from '../images/pc6.png';
import './Style/Service.css';

const WebDoctor = () => {
  const images = [pc1,pc2,pc3];
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
      <div className='Service' style={{display:'block'}}>
        <motion.div
          ref={leftSideRef}
          initial="hidden"
          animate={contentControls}
          variants={variants}
          className='left-side '
          style={{display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:'3rem'}}
        >
           {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={` ${index + 1}`}
              style={{
                display: index === currentImageIndex ? 'block' : 'none',
                maxWidth:'100%',
                
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
          <p>{data.webDoctor?.title1}<span>{data.webDoctor?.span}</span> {data.webDoctor?.title2}</p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={contentControls}
            transition={{ duration: 0.5 }}
          >
            <motion.li variants={variants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>{data.webDoctor?.item1.span}</span> {data.webDoctor?.item1.content}
            </motion.li>
            <motion.li variants={variants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>{data.webDoctor?.item2.span}</span> {data.webDoctor?.item2.content}
            </motion.li>
            <motion.li variants={variants}>
              <FontAwesomeIcon icon={faCheckCircle} color='#DAA520' size='2x' style={{ marginRight: '1rem' }} />
              <span>{data.webDoctor?.item3.span}</span> {data.webDoctor?.item3.content}
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDoctor;
