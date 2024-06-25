import React from 'react';
import {animated, useSpring} from 'react-spring'; 
type Props = {
  checkedOption: string;
  handleButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
const ChooseOption: React.FC<Props> = ({ checkedOption, handleButtonClick }) => {

  const fade = useSpring({
    from: {
        opacity: 0
    },
    to
        : {
            opacity: 1
        },
        config: {
          duration: 500,
          easing: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

        }
});

  return (
    <animated.div className='choose-option-container' style={fade}>
      <div className='step-title'>Wybierz rodzaj usługi, jaki Cię interesuje:</div>
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
        {/* <div className='choose-option-container'>
          <button id='opt3' className={`option-button ${checkedOption === 'opt3' ? 'selected' : ''}`} onClick={handleButtonClick}>
            Stała współpraca nad witryną, która ma zmieniać 
          </button>
        </div> */}
        {/* <div className='choose-option-container'>
          <button id='opt4' className={`option-button ${checkedOption === 'opt4' ? 'selected' : ''}`} onClick={handleButtonClick}>
            Przeprowadzenie kampanii reklamowej do istniejącej witryny
          </button>
        </div> */}
        <div className='choose-option-container'>
          <button id='opt3' className={`option-button ${checkedOption === 'opt3' ? 'selected' : ''}`} onClick={handleButtonClick}>
            Inne
          </button>
        </div>
      </div>
    </animated.div>
  );
};
export default ChooseOption;
