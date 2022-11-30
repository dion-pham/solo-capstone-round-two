
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginFormModal from './auth/LoginFormModal';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div>
        <ul className='nav-bar-ul'>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Shop All
          </NavLink>
        </li>
          {/* <li>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li> */}
          <li>
            <NavLink to='/orders' exact={true} activeClassName='active'>
              Account
            </NavLink>
          </li>
          <li>
            <NavLink to='/cart' exact={true} activeClassName='active'>
              Cart
            </NavLink>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    )
  } else {
  sessionLinks =
    <div>
      <ul className='nav-bar-ul'>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Shop All
          </NavLink>
        </li>
        <li>
          {/* <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink> */}
          <LoginFormModal />
        </li>
        {/* <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li> */}
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
