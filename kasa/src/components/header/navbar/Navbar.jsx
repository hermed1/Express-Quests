import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'active_menu' + ' ' + 'nav__link' : 'nav__link'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to='/apropos'
          className={({ isActive }) =>
            isActive ? 'active_menu' + ' ' + 'nav__link' : 'nav__link'
          }
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
