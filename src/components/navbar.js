import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './button';
import img1 from '../images/img1.png'
function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu= ()=> setClick(false);
   
    const showButton=()=>{
      if(window.innerWidth<=2000){
        setButton(false);
      }
      else{
        setButton(true);
      }
    };
    useEffect(()=>{
      showButton();
    })
    window.addEventListener('resize',showButton);
  return (
   <>
    <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={img1} alt="logo" className="logo" />
            {/* <span className="logo-text">THP</span> */}
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="#home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-links" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-links" onClick={closeMobileMenu}>
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#timeline" className="nav-links" onClick={closeMobileMenu}>
                Timeline
              </a>
            </li>
            <li className="nav-item">
              <a href="#competitions" className="nav-links" onClick={closeMobileMenu}>
                Competitions
              </a>
            </li>
            <li className="nav-item">
              <a href="#gallery" className="nav-links" onClick={closeMobileMenu}>
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a href="#sponsors" className="nav-links" onClick={closeMobileMenu}>
                Sponsors
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-links" onClick={closeMobileMenu}>
                Contact Us
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
   </>
  )
}

export default Navbar;
