import React from 'react';
import './Style/Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faSearch, faLineChart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  const featureData = [
    {
      icon: faExchangeAlt,
      title: 'Data Sharing',
      description: 'Allow patients to securely share their glycemia data with doctors and vice versa for better monitoring.',
    },
    {
      icon: faSearch,
      title: 'Search and Filters',
      description: 'Provide search and filtering options to quickly locate patient records, appointments, and other information.',
    },
    {
      icon: faLineChart,
      title: 'Reports and Analytics',
      description: 'Generate comprehensive reports and analytics for doctors and patients to monitor progress and trends.',
    },
  ];

  return (
    <div className='Main'>
      <div className="HeaderFeatures">
        <h1>Main Features</h1>
        <p>Why should you use our application?</p>
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
