import React from 'react';
import Navbar from './navbar/Navbar';
import './Header.css';
import logo from '../../assets/LOGO.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img src={logo} alt='logo_Kasa' className='header__img' />{' '}
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
