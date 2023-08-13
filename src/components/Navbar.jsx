import React, { useState ,useEffect} from 'react';
import './Style/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import NavbarSlider from './NavbarSlider'


const Navbar = () => {
  const [showButton , setShowButton] = useState(false)
  const [navState, setNavState] = useState(false);
  const navigate = useNavigate();
  
  const goHome = ()=> {
    navigate('/')
  }
  const goAbout = ()=> {
    navigate('/about')
  }
  const goContact = ()=> {
    navigate('/contact')
  }

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

  window.addEventListener("resize", trackWindowWidth);


  return (
    <div className='Navbar-container'>
        {showButton ? (
          
            <FontAwesomeIcon
              icon={faBars}
              cursor="pointer"
              className="Bars"
              onClick={()=> setNavState(!navState)}
            />
          
        ) : null}
        {navState && showButton ? (
          <React.Fragment>
            <div className="show-nav">
              <NavbarSlider setNavState={setNavState} />
            </div>
          </React.Fragment>
        ) : null}
      <h1 style={{ color: '#1AA7EC' }}>
        Lamar-Service
      </h1>
      <div className='Navbar'>
        <ul>
          <li onClick={goHome}>Home</li>
          <li onClick={goAbout}>About us</li>
          <li onClick={goContact}>Contact us</li>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
