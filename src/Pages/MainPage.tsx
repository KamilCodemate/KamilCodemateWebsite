import React from 'react';
import './PageStyles/MainPage.scss';
import LaptopImage from '../images/hero-laptop.jpg';
import { MdWeb } from 'react-icons/md';
const MainPage: React.FC = () => {
  return (
    <div className='container'>
      <div className='main-navbar'>
        <div className='navbar-logo'>InteFuture</div>
        <div className='navbar-links'>
          <div className='navbar-link'>HOME</div>
          <div className='navbar-link'>Nasze usługi</div>
          <div className='navbar-link'>Jak to działa</div>
          <div className='navbar-link'>Kontakt</div>
        </div>
      </div>
      <div className='hero'>
        <div id='hero-left-col'>
          <div id='hero-left-col-main-content'>
            <span id='hero-title'>Profesjonalne witryny i serwisy internetowe</span>
            <div id='hero-button'>
              <button>Zamów darmową wycenę</button>
            </div>
          </div>
        </div>
        <div id='hero-right-col'>
          <img src={LaptopImage} alt='laptop' />
        </div>
      </div>
      <div id='services'>
        <div id='services-title'>
          <span id='first-services-title'>Nasze usługi</span>
          <span id='second-services-title'>Zobacz, z czym możemy Ci pomóc</span>
        </div>
        <div id='services-cards'>
          <div className='service-row service-first-row'>
            <div className='card'>
              <div className='card-icon'>
                <MdWeb size={80} />
              </div>
              <div className='card-title'>Tworzenie witryn od podstaw</div>
              <div className='card-description'>Zbudujemy dla Ciebie witrynę interetową zupełnie od nowa</div>
            </div>
          </div>
          <div className='service-row service-second-row'> </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
