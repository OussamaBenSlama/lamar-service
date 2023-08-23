import React, { useState ,useEffect } from "react";
import "./Style/NavbarSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { useNavigate ,Link } from "react-router-dom";
import { useGlobalContext } from './GlobalProvider';
import enData from './Labels/en.json';
import frData from './Labels/fr.json'


const NavbarSlider = ({setNavState}) => {
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
  const goAbout =()=> {
    navigate('/about')
  }
  const goContact =()=> {
    navigate('/contact')
  }
  return (
    <div className="NavbarSliderBackground">
      <div className="NavbarSlider">
          <div style={{width:'100%' , textAlign:'right'}}>
              <FontAwesomeIcon
                icon={faBars}
                cursor="pointer"
                color="white"
                className="Bars"
                style={{color:'white', padding:'2rem'}}
                onClick={() => {
                    setNavState(false);
                    
                  }}
              />
            
          </div>
          <div className="nav-element">
            <ul>
                <li onClick={goHome}>{data.navbarSlider?.home}</li>
                <Link to= "http://www.glucocheck.tn/" style={{textDecoration:'none'}}>
                  <li >{data.navbarSlider?.sign}</li>
                </Link>
                <li onClick={goAbout}>{data.navbarSlider?.about}</li>
                <li onClick={goContact}>{data.navbarSlider?.contact}</li>
            </ul>
            
            
            
          </div>
        </div>
      </div>
    
  );
};

export default NavbarSlider;
