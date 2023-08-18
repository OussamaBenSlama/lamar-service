import React ,{useEffect,useState} from 'react';
import './Style/Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faSearch, faLineChart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useGlobalContext } from './GlobalProvider';
import enData from './Labels/en.json';
import frData from './Labels/fr.json'

const FeatureCard = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className="Card"
    >
      <FontAwesomeIcon icon={icon} style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }} />
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const { lang, setLang } = useGlobalContext();
  const [data, setData] = useState({});
  
  useEffect(() => {
    if (lang === 'en') {
      setData(enData);
    } else {
      setData(frData);
    }
  }, [lang]);
  
  const featureData = [
    {
      icon: faExchangeAlt,
      title: data.features?.cardone?.title,
      description: data.features?.cardone?.description,
    },
    {
      icon: faSearch,
      title: data.features?.cardtwo?.title,
      description: data.features?.cardtwo?.description,
    },
    {
      icon: faLineChart,
      title: data.features?.cardthree?.title,
      description: data.features?.cardthree?.description,
    },
  ];

  return (
    <div className='Main'>
      <div className="HeaderFeatures">
        <h1>{data.features?.header?.title}</h1>
        <p>{data.features?.header?.description}</p>
      </div>
      <div className='Features'>
        {featureData.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
};

export default Features;
