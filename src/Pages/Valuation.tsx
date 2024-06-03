import React, { useState } from 'react';
import MainNavbar from '../Components/MainNavbar';
import Header from '../Components/Header';
import './PageStyles/Valuation.scss';
import CreateWebsiteFormBasicsList from '../Components/RequestFolderElements/CreateWebsiteFormBasicsList';

const Valuation: React.FC = () => {
  const [isMenuActive, activeMenu] = useState(false);
  const [checkedRadio, setCheckedRadio] = useState('');
  const [step, setStep] = useState<number>(1);
  const slideButtonClicked = () => {
    activeMenu(!isMenuActive);
  };
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedRadio(event.target.value);
    setStep(step + 1);
  };

  const ChooseOption = () => {
    return (
      <div className='choose-option-container'>
        <div className='choose-option-title'>Wybierz rodzaj usługi, jaki Cię interesuje:</div>
        <div className='choose-option-options'>
          <div className='choose-option-container'>
            <input
              type='radio'
              id='opt1'
              className='choose-option-option'
              name='choose-option-option'
              value='opt1'
              onChange={handleRadioChange}
              checked={checkedRadio === 'opt1'}
            />
            <label htmlFor='opt1'>
              <span>Zbudowanie witryny od podstaw</span>
            </label>
          </div>
          <div className='choose-option-container'>
            <input
              type='radio'
              id='opt2'
              className='choose-option-option'
              name='choose-option-option'
              value='opt2'
              onChange={handleRadioChange}
              checked={checkedRadio === 'opt2'}
            />
            <label htmlFor='opt2'>
              <span>Aktualizacja istniejącej witryny</span>
            </label>
          </div>
          <div className='choose-option-container'>
            <input
              type='radio'
              id='opt3'
              className='choose-option-option'
              name='choose-option-option'
              value='opt3'
              onChange={handleRadioChange}
              checked={checkedRadio === 'opt3'}
            />
            <label htmlFor='opt3'>
              <span>Stała współpraca nad systematyczną modyfikacją istniejącej witryny</span>
            </label>
          </div>
          <div className='choose-option-container'>
            <input
              type='radio'
              id='opt4'
              className='choose-option-option'
              name='choose-option-option'
              value='opt4'
              onChange={handleRadioChange}
              checked={checkedRadio === 'opt4'}
            />
            <label htmlFor='opt4'>
              <span>Przeprowadzenie kampanii reklamowej do istniejącej witryny</span>
            </label>
          </div>
          <div className='choose-option-container'>
            <input
              type='radio'
              id='opt5'
              className='choose-option-option'
              name='choose-option-option'
              value='opt5'
              onChange={handleRadioChange}
              checked={checkedRadio === 'opt5'}
            />
            <label htmlFor='opt5'>
              <span>Inne</span>
            </label>
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
    </div>
  );
};
export default Valuation;
