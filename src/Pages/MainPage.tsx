import React from 'react';
import './PageStyles/MainPage.scss';
import LaptopImage from '../images/hero-laptop.jpg';
import { MdWeb } from 'react-icons/md';
import ServiceCard from '../Components/ServiceCard';
import MainNavbar from '../Components/MainNavbar';
const MainPage: React.FC = () => {
  return (
    <div className='container'>
      <MainNavbar />
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
        M
      </div>
      <div id='services'>
        <div id='services-title'>
          <span id='first-services-title'>Nasze usługi</span>
          <span id='second-services-title'>Zobacz, z czym możemy Ci pomóc</span>
        </div>
        <div id='services-cards'>
          <div className='service-row service-first-row'>
            <ServiceCard title='Strony internetowe' description='Tworzymy nowoczesne i responsywne strony internetowe' icon={MdWeb} />
          </div>
          <div className='service-row service-second-row'> </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
