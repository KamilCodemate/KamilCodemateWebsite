import React, { useState } from 'react';
import Footer from '../Components/Footer';
import MainNavbar from '../Components/MainNavbar';
import './PageStyles/RequestForm.scss';
import Header from '../Components/Header';
import CreateWebsiteFormBasicsList from '../Components/RequestFolderElements/CreateWebsiteFormBasicsList';
import ContactForm from '../Components/ContactForm';
import UpdateWebsiteList from '../Components/RequestFolderElements/UpdateWebsiteList';
import ConstantUpdateWebsiteList from '../Components/RequestFolderElements/ConstantUpdateWebsiteList';
import WebsiteServicesList from '../Components/RequestFolderElements/WebsiteServicesList';
import OtherList from '../Components/RequestFolderElements/OtherList';
import { IoMenu } from 'react-icons/io5';
const RequestForm: React.FC = () => {
  const [checkedRadio, setCheckedRadio] = useState('');
  const [isMenuActive, activeMenu] = useState(false);
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedRadio(event.target.value);
  };
  const slideButtonClicked = () => {
    activeMenu(!isMenuActive);
  };

  const returnCorrectList = () => {
    switch (checkedRadio) {
      case 'opt1':
        return <CreateWebsiteFormBasicsList />;
      case 'opt2':
        return <UpdateWebsiteList />;
      case 'opt3':
        return <ConstantUpdateWebsiteList />;
      case 'opt4':
        return <WebsiteServicesList />;
      case 'opt5':
        return <OtherList />;
    }
  };
  return (
    <div className='request-form'>
      <MainNavbar isActive={isMenuActive} />
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
              Wypełnij formularz obok. Uzupełnij swoje imię i nazwisko, adres e-mail i opcjonalnie numer telefonu. W polu "opis" uzupełnij poniższe
              informacje:
            </div>
            {returnCorrectList()}
          </div>
          <div className='right-col'>
            <ContactForm MessageTitle='Opis:' FormType='request' />
          </div>
        </div>
      </div>

      <Footer />
      <IoMenu className='menu-slide-button' onClick={slideButtonClicked} />
    </div>
  );
};

export default RequestForm;
