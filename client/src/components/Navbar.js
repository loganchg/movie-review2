import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const CloseMobileM = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={CloseMobileM}>
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='navitem'>
              <Link to='/' className='nav-links' onClick={CloseMobileM}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/welcome'
                className='nav-links'
                onClick={CloseMobileM}
              >
                Reviews
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                onClick={CloseMobileM}
              >
               Login
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={CloseMobileM}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='outlineBtn'>Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
