
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import LoginFormModal from './auth/LoginFormModal';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [showDropdown, setShowDropdown] = useState(false)

  const dropDown = useRef(null)

  const hideDropdown = (e) => {
    if (dropDown.current && showDropdown && !dropDown.current.contains(e.target)) {
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', hideDropdown)
    return (() => document.removeEventListener('click', hideDropdown))
  }, [showDropdown])

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='nav-bar-container'>
        <ul className='nav-bar-ul'>
          <div>
            <li>
              <NavLink to='/' exact={true} activeClassName='active' className='shop-all-button'>
                Shop All
              </NavLink>
            </li>
          </div>
          <div className='logo-container-div'>
            <Link to={'/products'}>
              <img src={"https://i.imgur.com/3vjboFc.png"} alt="Product's image" className='nav-bar-logo'></img>
            </Link>
          </div>
          <div className='nav-bar-right'>
            <div className='nav-bar-profile-dropdown'
            >
              <i className="fa-solid fa-user profile-pic-button"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {showDropdown && (
                  <div className='drop-down' ref={dropDown}>
                    <li>
                      <NavLink to='/orders' exact={true} activeClassName='active' className='order-history-dropdown'>
                        Order History
                      </NavLink>
                      <li>
                        <LogoutButton />
                      </li>
                    </li>
                  </div>
                )}
              </i>
            </div>
            <li>
              <NavLink to='/cart' exact={true} activeClassName='active'>
                <i class="fa-solid fa-cart-shopping cart-button"></i>
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    )
  } else {
    sessionLinks =
      <div className='nav-bar-container'>
        <ul className='nav-bar-ul'>
          <div>
            <li>
              <NavLink to='/' exact={true} activeClassName='active' className='shop-all-button'>
                Shop All
              </NavLink>
            </li>
          </div>
          <div className='logo-container-div'>
            <Link to={'/products'}>
              <img src={"https://i.imgur.com/3vjboFc.png"} alt="Product's image" className='nav-bar-logo'></img>
            </Link>
          </div>
          <li>
            <LoginFormModal />
          </li>
        </ul>
      </div>
  }

  // useselect to get all products
  // filter by keyword to display


  return (
    <nav>
      {sessionLinks}
    </nav>
  );
}

export default NavBar;
