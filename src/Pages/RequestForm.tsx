import React, { useState } from 'react';
import Footer from '../Components/Footer';
import MainNavbar from '../Components/MainNavbar';
import './PageStyles/RequestForm.scss';
import Header from '../Components/Header';
import CreateWebsiteFormBasicsList from '../Components/RequestFolderElements/CreateWebsiteFormBasicsList';
import ContactForm from '../Components/ContactForm';

const RequestForm: React.FC = () => {
  const [checkedRadio, setCheckedRadio] = useState('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedRadio(event.target.value);
  };

  return (
    <div className='request-form'>
      <MainNavbar />
      <div className='main-content'>
        <Header title='Złóż zapytanie oferty' description='Drogą mailową otrzymasz bezpłatną wycenę i możliwość złożenia zamówienia' type='blacked' />
        <div className='choose-option-container'>
          <div className='choose-option-title'>Wybierz rodzaj usługi, jaki Cię interesuje:</div>
          <div className='choose-option-options'>
            <div className='choose-option-container'>
              <input type='radio' id='opt1' className='choose-option-option' name='choose-option-option' value='opt1' onChange={handleRadioChange} />
              <label htmlFor='opt1'>
                <span>Zbudowanie witryny od podstaw</span>
              </label>
            </div>
            <div className='choose-option-container'>
              <input type='radio' id='opt2' className='choose-option-option' name='choose-option-option' value='opt2' onChange={handleRadioChange} />
              <label htmlFor='opt2'>
                <span>Aktualizacja istniejącej witryny</span>
              </label>
            </div>
            <div className='choose-option-container'>
              <input type='radio' id='opt3' className='choose-option-option' name='choose-option-option' value='opt3' onChange={handleRadioChange} />
              <label htmlFor='opt3'>
                <span>Stała współpraca nad systematyczną modyfikacją istniejącej witryny</span>
              </label>
            </div>
            <div className='choose-option-container'>
              <input type='radio' id='opt4' className='choose-option-option' name='choose-option-option' value='opt4' onChange={handleRadioChange} />
              <label htmlFor='opt4'>
                <span>Przeprowadzenie kampanii reklamowej do istniejącej witryny</span>
              </label>
            </div>
            <div className='choose-option-container'>
              <input type='radio' id='opt5' className='choose-option-option' name='choose-option-option' value='opt5' onChange={handleRadioChange} />
              <label htmlFor='opt5'>
                <span>Inne</span>
              </label>
            </div>
          </div>
        </div>
        <div className='form-root' style={checkedRadio !== '' ? { display: 'flex' } : { display: 'none' }}>
          <div className='left-col'>
            <div className='left-col-title'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum ac neque quis sollicitudin. Suspendisse sit amet accumsan est.
              Nullam porttitor tristique sollicitudin. Curabitur ac lacus convallis sem euismod mollis nec quis dui. Donec at tincidunt nulla:
            </div>
            <CreateWebsiteFormBasicsList />
          </div>
          <div className='right-col'>
            <ContactForm MessageTitle='Treść zapyania:' />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RequestForm;
