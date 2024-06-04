import React, { useState } from 'react';
import MainNavbar from '../Components/MainNavbar';
import Header from '../Components/Header';
import './PageStyles/Valuation.scss';
import CreateWebsiteFormBasicsList from '../Components/RequestFolderElements/CreateWebsiteFormBasicsList';
import { MouseEventHandler } from 'react';
import Footer from '../Components/Footer';
import { IoMenu } from 'react-icons/io5';
const Valuation: React.FC = () => {
  const [isMenuActive, activeMenu] = useState(false);
  const [checkedOption, setCheckedOption] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const slideButtonClicked = () => {
    activeMenu(!isMenuActive);
  };
  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log('dziala');
    setCheckedOption(event.currentTarget.id);
  };
  const ChooseOption = () => {
    return (
      <div className='choose-option-container'>
        <div className='choose-option-title'>Wybierz rodzaj usługi, jaki Cię interesuje:</div>
        <div className='choose-option-options'>
          <div className='choose-option-container'>
            <button id='opt1' className={`option-button ${checkedOption === 'opt1' ? 'selected' : ''}`} onClick={handleButtonClick}>
              Zbudowanie witryny od podstaw
            </button>
          </div>
          <div className='choose-option-container'>
            <button id='opt2' className={`option-button ${checkedOption === 'opt2' ? 'selected' : ''}`} onClick={handleButtonClick}>
              Aktualizacja istniejącej witryny
            </button>
          </div>
          <div className='choose-option-container'>
            <button id='opt3' className={`option-button ${checkedOption === 'opt3' ? 'selected' : ''}`} onClick={handleButtonClick}>
              Stała współpraca nad systematyczną modyfikacją istniejącej witryny
            </button>
          </div>
          <div className='choose-option-container'>
            <button id='opt4' className={`option-button ${checkedOption === 'opt4' ? 'selected' : ''}`} onClick={handleButtonClick}>
              Przeprowadzenie kampanii reklamowej do istniejącej witryny
            </button>
          </div>
          <div className='choose-option-container'>
            <button id='opt5' className={`option-button ${checkedOption === 'opt5' ? 'selected' : ''}`} onClick={handleButtonClick}>
              Inne
            </button>
          </div>
        </div>
      </div>
    );
  };

  const returnStep = () => {
    switch (step) {
      case 1:
        return <ChooseOption />;

      default:
        return <ChooseOption />;
    }
  };

  return (
    <div className='valuation'>
      <MainNavbar isActive={isMenuActive} />
      <div className='main-content'>
        <Header
          title='Otrzymaj automatyczną wycenę'
          description='Odpowiedz na kilka pytań i sprawdź, ile kosztuje Twoja przyszła witryna'
          type='blacked'
        />
        {returnStep()}
      </div>
      <Footer />
      <IoMenu className='menu-slide-button' onClick={slideButtonClicked} />
    </div>
  );
};
export default Valuation;
