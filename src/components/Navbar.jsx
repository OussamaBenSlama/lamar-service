import React, { useState ,useEffect} from 'react';
import './Style/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const [showButton , setShowButton] = useState(false)
  const [navState, setNavState] = useState(false);
  const navigate = useNavigate();
  

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
      <h1 style={{ color: '#1AA7EC' }}>
        Lamar-Service
      </h1>
      <div className='Navbar'>
        <ul>
          <li >Home</li>
          <li >About</li>
          <li>Contact me</li>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
