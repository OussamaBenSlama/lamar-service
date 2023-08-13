import React, { useState } from "react";
import "./Style/NavbarSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const NavbarSlider = ({setNavState}) => {
  const navigate = useNavigate()
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
                <li onClick={goHome}>Home</li>
                <li onClick={goAbout}>About us</li>
                <li onClick={goContact}>Contact us</li>
            </ul>
            
            
            
          </div>
        </div>
      </div>
    
  );
};

export default NavbarSlider;
