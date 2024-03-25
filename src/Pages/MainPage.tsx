import React from 'react';
import './PageStyles/MainPage.scss';
import LaptopImage from '../images/hero-laptop.jpg';
import CurvedArrowImaqe from '../images/curved-arrow.png';
import { MdWeb } from 'react-icons/md';
import ServiceCard from '../Components/ServiceCard';
import MainNavbar from '../Components/MainNavbar';
import { ImNewTab } from 'react-icons/im';
import { IoPodiumOutline } from 'react-icons/io5';
import { GoShieldCheck } from 'react-icons/go';
import { FaChartLine } from 'react-icons/fa6';
import { DiStreamline } from 'react-icons/di';

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
        <div className='section-title'>
          <span className='first-section-title blacked'>Nasze usługi</span>
          <span className='second-section-title blacked'>Zobacz, z czym możemy Ci pomóc</span>
        </div>
        <div id='services-cards'>
          <div className='service-row service-first-row'>
            <ServiceCard
              title='Tworzenie witryn od podstaw'
              description='Zbudujemy dla Ciebie witrynę od podstaw, zgodną z Twoimi oczekiwaniami.'
              icon={MdWeb}
            />
            <ServiceCard
              title='Aktualizacja starych witryn'
              description='Jeżeli masz już witrynę i pragniesz ją unowocześnić, dobrze trafiłeś.'
              icon={ImNewTab}
            />
            <ServiceCard title='Pozycjonowanie' description='Zadbamy o to, aby Twoja witryna była powszechnie odwiedzana.' icon={IoPodiumOutline} />
          </div>

          <div className='service-row service-second-row'>
            <ServiceCard
              title='Stała opieka nad stroną'
              description='Będziemy pod ręką, kiedy będziesz chciał zaktualizować swoją witrynę.'
              icon={GoShieldCheck}
            />
            <ServiceCard title='Kampanie Google Ads' description='W efektywny sposób rozreklamujemy Twoją witrynę.' icon={FaChartLine} />{' '}
            <ServiceCard
              title='Systemy back-end'
              description='Sklepy internetowe, panele użytkownika, blogi. Zajmiemy się tym.'
              icon={DiStreamline}
            />{' '}
          </div>
        </div>
      </div>
      <div id='how-it-works'>
        <div className='section-title'>
          <span className='first-section-title whitened'>Jak to działa?</span>
          <span className='second-section-title whitened'>Zobacz, jak wyglądać będzie nasza współpraca</span>
        </div>
        <div className='steps-root'>
          <div className='steps'>
            <div className='step'> </div>
            <div className='arrow'>
              {' '}
              <div className='image-arrow'>
                <img src={CurvedArrowImaqe} alt='arrow' />
              </div>
            </div>
            <div className='step'></div>
            <div className='arrow'>
              <div className='image-arrow'>
                <img src={CurvedArrowImaqe} alt='arrow' />
              </div>
            </div>
            <div className='step'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
