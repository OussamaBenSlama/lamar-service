import React, { useState, useEffect } from 'react';
import './Style/Navbar.css';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavbarSlider from './NavbarSlider';
import { useGlobalContext } from './GlobalProvider';
import enData from './Labels/en.json';
import frData from './Labels/fr.json'
import fr from '../images/fr.png'
import br from '../images/br.png'

const Navbar = () => {
  const [showButton, setShowButton] = useState(false);
  const [navState, setNavState] = useState(false);
  const { lang, setLang } = useGlobalContext();
  const navigate = useNavigate();

  
  const [data, setData] = useState({});
  
  useEffect(() => {
    if (lang === 'en') {
      setData(enData);
    } else {
      setData(frData);
    }
  }, [lang]);

  const goHome = () => {
    navigate('/');
  };
  const goAbout = () => {
    navigate('/about');
  };
  const goContact = () => {
    navigate('/contact');
  };

  const trackWindowWidth = () => {
    if (window.innerWidth <= 800) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    if (window.innerWidth <= 900) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, []);

  window.addEventListener('resize', trackWindowWidth);

  const handleLangChange = (selectedLang) => {
    setLang(selectedLang);
  };

  return (
    <div className='Navbar-container'>
      {showButton ? (
        <FontAwesomeIcon
          icon={faBars}
          cursor='pointer'
          className='Bars'
          onClick={() => setNavState(!navState)}
        />
      ) : null}
      {navState && showButton ? (
        <React.Fragment>
          <div className='show-nav'>
            <NavbarSlider setNavState={setNavState} />
            
          </div>
        </React.Fragment>
      ) : null}
      <h1 style={{ color: '#1AA7EC' }}>GlucoCheck</h1>
      {!navState && showButton ? 
      (
        <div style={{display:'flex'}}>
          <span
            className={lang === 'fr' ? 'language-selected' : 'language'}
            onClick={() => handleLangChange('fr')}
            title="Français"
          >
            <img src={fr} alt="" />
          </span>
          <span
            className={lang === 'en' ? 'language-selected' : 'language'}
            onClick={() => handleLangChange('en')}
            title="English"
          >
            <img src={br} alt="" />
          </span>
        </div>
      ) :
      (
        null
      )

      }
      <div className='Navbar'>
        <ul>
          <li onClick={goHome}>{data.navbar?.home}</li>
          <li onClick={goAbout}>{data.navbar?.about}</li>
          <li onClick={goContact}>{data.navbar?.contact}</li>
        </ul>
        <div style={{display:'flex'}}>
          <span
            className={lang === 'fr' ? 'language-selected' : 'language'}
            onClick={() => handleLangChange('fr')}
            title="Français"
          >
            <img src={fr} alt="" />
          </span>
          <span
            className={lang === 'en' ? 'language-selected' : 'language'}
            onClick={() => handleLangChange('en')}
            title="English"
          >
            <img src={br} alt="" />
          </span>
        </div>

        <button>
          <Link to='http://www.glucocheck.tn/' style={{textDecoration:'none',color:'white'}}>
            {data.navbar?.sign}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
