import React, { useState } from 'react';
import Footer from '../Components/Footer';
import MainNavbar from '../Components/MainNavbar';
import './PageStyles/RequestForm.scss';
import Header from '../Components/Header';
const RequestForm: React.FC = () => {
  return (
    <div className='request-form'>
      <MainNavbar />
      <div className='main-content'>
        <Header title='Złóż zapytanie oferty' description='Drogą mailową otrzymasz bezpłatną wycenę i możliwość złożenia zamówienia' type='blacked' />
        <div className='choose-option-container'>
          <div className='choose-option-title'>Wybierz rodzaj usługi, jaki Cię interesuje:</div>
          <div className='choose-option-options'>
            <div className='choose-option-container'>
              <input type='radio' className='choose-option-option' name='choose-option-option' value='opt1' />
              <span>Zbudowanie witryny od podstaw</span>
            </div>
            <div className='choose-option-container'>
              <input type='radio' className='choose-option-option' name='choose-option-option' value='opt1' />
              <span>Aktualizacja istniejącej witryny</span>
            </div>
            <div className='choose-option-container'>
              <input type='radio' className='choose-option-option' name='choose-option-option' value='opt1' />
              <span>Stała współpraca nad systematyczną modyfikacją istniejącej witryny</span>
            </div>
            <div className='choose-option-container'>
              <input type='radio' className='choose-option-option' name='choose-option-option' value='opt1' />
              <span>Przeprowadzenie kampanii reklamowej do istniejącej witryny</span>
            </div>
            <div className='choose-option-container'>
              <input type='radio' className='choose-option-option' name='choose-option-option' value='opt1' />
              <span>Inne</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RequestForm;
