import React, { useState, useEffect } from 'react';
import './Style/Navbar.css';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavbarSlider from './NavbarSlider';
import { useGlobalContext } from './GlobalProvider';

const Navbar = () => {
  const [showButton, setShowButton] = useState(false);
  const [navState, setNavState] = useState(false);
  const { lang, setLang } = useGlobalContext();
  const navigate = useNavigate();

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

  const handleLangChange = (event) => {
    const selectedLang = event.target.value;
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
      <div className='Navbar'>
        <ul>
          <li onClick={goHome}>Home</li>
          <Link to='http://www.glucocheck.tn/'>
            <li>Sign Up</li>
          </Link>
          <li onClick={goAbout}>About us</li>
          <li onClick={goContact}>Contact us</li>
        </ul>
        <select value={lang} onChange={handleLangChange}>
          <option value='en'>English</option>
          <option value='fr'>Français</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
