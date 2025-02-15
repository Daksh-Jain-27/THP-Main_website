import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './button';
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
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
        THP
         <i className='fab fa-type3'/>
        </Link>
         <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
         </div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           <li className='nav-item'>
            <Link to='/' className='nav-links' onclick={closeMobileMenu}>
            Home
            </Link>
                
           </li>
           <li className='nav-item'>
            <Link to='/About' className='nav-links' onclick={closeMobileMenu}>
            About
            </Link>
                
           </li>
           <li className='nav-item'>
            <Link to='/Team' className='nav-links' onclick={closeMobileMenu}>
            Team
            </Link>
                
           </li>
           <li className='nav-item'>
            <Link to='/Timeline' className='nav-links' onclick={closeMobileMenu}>
            Timeline
            </Link>
                
           </li>
           <li className='nav-item'>
            <Link to='/competitions' className='nav-links' onclick={closeMobileMenu}>
            Competitions
            </Link>
                
           </li>
           <li className='nav-item'>
            <Link to='/Gallery' className='nav-links' onclick={closeMobileMenu}>
            Gallery
            </Link>
                
           </li>
           <li className='nav-item'>
            <Link to='/Sponsors' className='nav-links' onclick={closeMobileMenu}>
            Sponsors
            </Link>
                
           </li>
           <li className='nav-item'>
            <Link to='/Contact Us' className='nav-links' onclick={closeMobileMenu}>
            Contact Us
            </Link>
                
           </li>
         </ul>
         {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
    </div>

   </nav>
   </>
  )
}

export default Navbar;
