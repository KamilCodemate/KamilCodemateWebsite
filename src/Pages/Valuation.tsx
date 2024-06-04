import React, { useState } from 'react';
import MainNavbar from '../Components/MainNavbar';
import Header from '../Components/Header';
import './PageStyles/Valuation.scss';
import CreateWebsiteFormBasicsList from '../Components/RequestFolderElements/CreateWebsiteFormBasicsList';
import { MouseEventHandler } from 'react';
import Footer from '../Components/Footer';
import { IoMenu } from 'react-icons/io5';
import ChooseOption from './ValuationComponents/ChooseOption';
const Valuation: React.FC = () => {
  const [isMenuActive, activeMenu] = useState(false);
  const [checkedOption, setCheckedOption] = useState<string>('');
  const [percentageIncrease, setPercentageIncrease] = useState<number>(0);
  const [completionPercentage, setCompletionPercentage] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [isActualFilled, setActualFilled] = useState<boolean>(false);
  const slideButtonClicked = () => {
    activeMenu(!isMenuActive);
  };
  const handleOptionButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setCheckedOption(event.currentTarget.id);
    setActualFilled(true);

    switch (event.currentTarget.id) {
      case 'opt1':
        setPercentageIncrease(100 / 8);
        break;
    }
  };
  const handleNextButtonClick = () => {
    if (isActualFilled) {
      console.log('next');
      setStep(step + 1);
      setCompletionPercentage(completionPercentage + percentageIncrease);
    } else {
      alert('Wypełnij aktualny krok!');
    }
  };
  const handlePreviousButtonclick = () => {
    if (step === 1) return;
    console.log('previous');
    setStep(step - 1);
    setCompletionPercentage(completionPercentage - percentageIncrease);
  };
  const returnStep = () => {
    switch (step) {
      case 1:
        return <ChooseOption handleButtonClick={handleOptionButtonClick} checkedOption={checkedOption} />;

      default:
        return <ChooseOption handleButtonClick={handleOptionButtonClick} checkedOption={checkedOption} />;
    }
  };

  return (
    <div className='valuation'>
      <MainNavbar isActive={isMenuActive} />
      <Header
        title='Otrzymaj spersonalizowaną wycenę'
        description='Odpowiedz na kilka pytań i sprawdź, ile kosztuje Twoja przyszła witryna'
        type='blacked'
      />
      <div className='main-content'>
        <div className='left-col'>
          {returnStep()}
          <div className='movement-buttons'>
            <div className='previous'>
              {' '}
              <span onClick={handlePreviousButtonclick}>{'< Wstecz'}</span>
            </div>
            <div className='next'>
              <span onClick={handleNextButtonClick}>{'Dalej >'}</span>
            </div>
          </div>
        </div>
        <div className='right-col'>
          <svg viewBox='0 0 36 36' className='circular-chart orange'>
            <path
              className='circle-bg'
              d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <path
              className='circle'
              stroke-dasharray={`${completionPercentage}, 100`}
              d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <text x='18' y='20.35' className='percentage'>
              {Math.round(completionPercentage)}%
            </text>
          </svg>
          <span>Postęp</span>
        </div>
      </div>
      <Footer />
      <IoMenu className='menu-slide-button' onClick={slideButtonClicked} />
    </div>
  );
};
export default Valuation;
