import React from 'react';
import banner from '../../assets/background_image_homepage.png';
import './Banner.css';
const Banner = () => {
  return (
    <div className='banner__container'>
      <img src={banner} alt='banner_home' className='banner' />
      <p className='banner__text'>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default Banner;
