import React, { useState, useEffect } from 'react';
import MainNavbar from '../Components/MainNavbar';
import Header from '../Components/Header';
import './PageStyles/Valuation.scss';
import CreateWebsiteFormBasicsList from '../Components/RequestFolderElements/CreateWebsiteFormBasicsList';
import { MouseEventHandler } from 'react';
import Footer from '../Components/Footer';
import { IoMenu } from 'react-icons/io5';
import ChooseOption from './ValuationComponents/ChooseOption';
import BuildWebsiteSubpages from './ValuationComponents/BuildWebsiteSubpages';
import BuildWebsiteAppearance from './ValuationComponents/BuildWebsiteAppearance';
import {useSpring, animated} from 'react-spring';

const Valuation: React.FC = () => {



  const [isMenuActive, activeMenu] = useState(false);
  const [checkedOption, setCheckedOption] = useState<string>('');
  const [percentageIncrease, setPercentageIncrease] = useState<number>(0);
  const [completionPercentage, setCompletionPercentage] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [isActualFilled, setActualFilled] = useState<boolean>(false);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [subpagesContent, setSubpagesContent] = useState<string>('');
  const [appearanceContent, setAppearanceContent] = useState<string>('');
  const [appearanceAttachments, setAppearanceAttachments] = useState<File[]>([]);


  const handleSubpagesContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSubpagesContent(event.target.value);
 
  }
  const handleAppearanceContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {  
    setAppearanceContent(event.target.value);
  
  }

  const handleAppearanceAttachmentAdd = (files: File[]) => {
    if (files) {
      setAppearanceAttachments([...appearanceAttachments, ...Array.from(files)]);
  }
  }


  useEffect(() => {
    setPrevPercentage(completionPercentage);
  }, [completionPercentage]);


  const slideButtonClicked = () => {
    activeMenu(!isMenuActive);
  };
  const handleOptionButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setCheckedOption(event.currentTarget.id);
    setActualFilled(true);

    switch (event.currentTarget.id) {
      case 'opt1':
        setPercentageIncrease(100 / 4);
        break;

      
    }
  };
  const animatedProps = useSpring({ 
    to: { strokeDasharray: `${completionPercentage}, 100` }, 
    from: { strokeDasharray: '0, 100' },
    config: { duration: 700 }
  });
  const numberProps = useSpring({ 
    to: { number: completionPercentage }, 
    from: { number: prevPercentage },
    config: { duration: 700 }
  });

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

      case 2: return <BuildWebsiteSubpages content = {subpagesContent} handleContentChange={handleSubpagesContentChange} />;

      case 3:
  return (
    <BuildWebsiteAppearance
      content={appearanceContent}
      handleContentChange={handleAppearanceContentChange}
      appearanceAttachments={appearanceAttachments}
      handleFileAdd={handleAppearanceAttachmentAdd}
    />
  );


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
            <animated.path
              className='circle'
              style={animatedProps}
              d='M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <animated.text x='18' y='20.35' className='percentage'>
              {numberProps.number.to(n => `${Math.round(n)}%`)}
            </animated.text>
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
