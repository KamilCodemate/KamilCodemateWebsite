import React from 'react';

type Props = {
  checkedOption: string;
  handleButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
const ChooseOption: React.FC<Props> = ({ checkedOption, handleButtonClick }) => {
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
export default ChooseOption;
