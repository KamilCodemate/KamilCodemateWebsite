import React, { useState, useEffect } from 'react';
import MainNavbar from '../Components/MainNavbar';
import Header from '../Components/Header';
import './PageStyles/Valuation.scss';
import CreateWebsiteFormBasicsList from '../Components/RequestFolderElements/CreateWebsiteFormBasicsList';
import Footer from '../Components/Footer';
import { IoMenu } from 'react-icons/io5';
import ChooseOption from './ValuationComponents/ChooseOption';
import BuildWebsiteSubpages from './ValuationComponents/BuildWebsiteSubpages';
import BuildWebsiteAppearance from './ValuationComponents/BuildWebsiteAppearance';
import OtherInfo from './ValuationComponents/OtherInfo';
import { useSpring, animated } from 'react-spring';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import FinalInfo from './ValuationComponents/FinalInfo';
import 'react-notifications/lib/notifications.css';
import UpdateWebsiteAddress from './ValuationComponents/UpdateWebsiteAddress';

const Valuation: React.FC = () => {
  const [isMenuActive, activeMenu] = useState(false);
  const [checkedOption, setCheckedOption] = useState<string>('');
  const [percentageIncrease, setPercentageIncrease] = useState<number>(0);
  const [completionPercentage, setCompletionPercentage] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [isActualFilled, setActualFilled] = useState<boolean>(false);
  const [prevPercentage, setPrevPercentage] = useState<number>(0);
  const [subpagesContent, setSubpagesContent] = useState<string>('');
  const [subpageAttachments, setSubpageAttachments] = useState<File[]>([]);
  const [appearanceContent, setAppearanceContent] = useState<string>('');
  const [appearanceAttachments, setAppearanceAttachments] = useState<File[]>([]);
  const [otherInfoContent, setOtherInfoContent] = useState<string>('');
  const [otherInfoAttachments, setOtherInfoAttachments] = useState<File[]>([]);
  const [updateWebsiteContent, setUpdateWebsiteContent] = useState<string>('');

  const [finalInfo, setFinalInfo] = useState<{ name: string; email: string; telephone: string; agreed: boolean }>({
    name: '',
    email: '',
    telephone: '',
    agreed: false,
  });

  const handleFinalInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFinalInfo({ ...finalInfo, [event.target.name]: event.target.value });
  };

  const handleSubpagesContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSubpagesContent(event.target.value);
  };

  const handleSubpageAttachmentAdd = (files: File[]) => {
    if (files) {
      setSubpageAttachments([...subpageAttachments, ...Array.from(files)]);
    }
  };
  const handleSubpageAttachmentRemove = (index: number) => {
    const newAttachments = subpageAttachments.filter((_, i) => i !== index);
    setSubpageAttachments(newAttachments);
  };

  const handleAppearanceContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAppearanceContent(event.target.value);
  };

  const handleAppearanceAttachmentAdd = (files: File[]) => {
    if (files) {
      setAppearanceAttachments([...appearanceAttachments, ...Array.from(files)]);
    }
  };
  const handleAppearanceAttachementRemove = (index: number) => {
    const newAttachments = appearanceAttachments.filter((_, i) => i !== index);
    setAppearanceAttachments(newAttachments);
  };

  const handleOtherInfoAttachmentAdd = (files: File[]) => {
    if (files) {
      setOtherInfoAttachments([...otherInfoAttachments, ...Array.from(files)]);
    }
  };

  const handleOtherInfoAttachmentRemove = (index: number) => {  
    const newAttachments = otherInfoAttachments.filter((_, i) => i !== index);
    setOtherInfoAttachments(newAttachments);
  };

  const handleOtherInfoContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOtherInfoContent(event.target.value);
  };

  useEffect(() => {
    setPrevPercentage(completionPercentage);
  }, [completionPercentage]);

  const slideButtonClicked = () => {
    activeMenu(!isMenuActive);
  };

  const handleUpdateWebsiteContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateWebsiteContent(event.target.value);
  };

  const handleOptionButtonClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setCheckedOption(event.currentTarget.id);
    setActualFilled(true);

    switch (event.currentTarget.id) {
      case 'opt1':
        setPercentageIncrease(100 / 4);
        break;
      case 'opt2':
        setPercentageIncrease(100 / 3); break;
      case 'opt3': setPercentageIncrease(100 / 2); break;
    }
  };

  const animatedProps = useSpring({
    to: { strokeDasharray: `${completionPercentage}, 100` },
    from: { strokeDasharray: '0, 100' },
    config: { duration: 700 },
  });

  const numberProps = useSpring({
    to: { number: completionPercentage },
    from: { number: prevPercentage },
    config: { duration: 700 },
  });

  const checkmarkProps = useSpring({
    opacity: completionPercentage === 100 ? 1 : 0,
    transform: completionPercentage === 100 ? 'scale(1)' : 'scale(0.5)',
    config: { duration: 500 },
  });

  const textProps = useSpring({
    opacity: completionPercentage === 100 ? 0 : 1,
    config: { duration: 500 },
  });

  const handleNextButtonClick = () => {
    if (isActualFilled) {
      console.log('next');

      if (checkedOption === 'opt1') {
        switch (step) {
          case 2:
            if (subpagesContent.length < 500) {
              NotificationManager.warning('Uzupełnij minimum 500 znaków!');
              return;
            }
            break;
          case 3:
            if (appearanceContent === '') {
              NotificationManager.warning('Wypełnij aktualny krok!');
              return;
            }
            break;
          case 4:
            if (otherInfoContent === '') {
              NotificationManager.warning('Wypełnij aktualny krok!');
              return;
            }
            break;
          case 5:
            if (finalInfo.name === '' || finalInfo.email === '' || !finalInfo.agreed) {
              NotificationManager.warning('Wypełnij aktualny krok!');
              return;
            }
            break;
          default:
            break;
        }
      }
      setStep(step + 1);
      setCompletionPercentage(completionPercentage + percentageIncrease);
    } else {
      NotificationManager.warning('Wypełnij aktualny krok!');
    }
  };

  const handlePreviousButtonClick = () => {
    if (step === 1) return;
    console.log('previous');
    setStep(step - 1);
    setCompletionPercentage(completionPercentage - percentageIncrease);
  };

  const returnStep = () => {
    if (step === 1) return <ChooseOption handleButtonClick={handleOptionButtonClick} checkedOption={checkedOption} />;
    if (checkedOption === 'opt1') {
      switch (step) {
        case 2:
          return <BuildWebsiteSubpages content={subpagesContent} handleContentChange={handleSubpagesContentChange} subpageAttachments={subpageAttachments} handleFileAdd={handleSubpageAttachmentAdd} handleFileRemove={handleSubpageAttachmentRemove} />;
        case 3:
          return (
            <BuildWebsiteAppearance
              content={appearanceContent}
              handleContentChange={handleAppearanceContentChange}
              appearanceAttachments={appearanceAttachments}
              handleFileAdd={handleAppearanceAttachmentAdd}
              handleFileRemove={handleAppearanceAttachementRemove}
            />
          );
        case 4:
          return (
            <OtherInfo
              title='Inne ważne informacje / ogólny opis'
              content={otherInfoContent}
              handleContentChange={handleOtherInfoContentChange}
              appearanceAttachments={otherInfoAttachments}
              handleFileAdd={handleOtherInfoAttachmentAdd}
              handleFileRemove={handleOtherInfoAttachmentRemove}
            />
          );
        case 5:
          return (
            <FinalInfo
              name={finalInfo.name}
              email={finalInfo.email}
              telephone={finalInfo.telephone}
              agreed={finalInfo.agreed}
              handleFinalInfoChange={handleFinalInfoChange}
            />
          );
        default:
          return <ChooseOption handleButtonClick={handleOptionButtonClick} checkedOption={checkedOption} />;
      }
    }
    if (checkedOption === 'opt2') {
      switch (step) {
        case 2:
          return <UpdateWebsiteAddress content={updateWebsiteContent} handleContentChange={handleUpdateWebsiteContentChange} />;
        case 3:   return <OtherInfo
        title='Opisz dokładnie, co chcesz zmienić na swojej witrynie:'
        content={otherInfoContent}
        handleContentChange={handleOtherInfoContentChange}
        appearanceAttachments={otherInfoAttachments}
        handleFileAdd={handleOtherInfoAttachmentAdd}
        handleFileRemove={handleOtherInfoAttachmentRemove}
      />
      case 4: return (
        <FinalInfo
          name={finalInfo.name}
          email={finalInfo.email}
          telephone={finalInfo.telephone}
          agreed={finalInfo.agreed}
          handleFinalInfoChange={handleFinalInfoChange}
        />
      );
        default:
          return <ChooseOption handleButtonClick={handleOptionButtonClick} checkedOption={checkedOption} />;
      }
    }
    if(checkedOption === 'opt3') {  
      switch(step)
      {
        case 2:  return <OtherInfo
        title='Opisz dokładnie, czego potrzebujesz:'
        content={otherInfoContent}
        handleContentChange={handleOtherInfoContentChange}
        appearanceAttachments={otherInfoAttachments}
        handleFileAdd={handleOtherInfoAttachmentAdd}
        handleFileRemove={handleOtherInfoAttachmentRemove}
      />
      case 3: return <FinalInfo
      name={finalInfo.name}
      email={finalInfo.email}
      telephone={finalInfo.telephone}
      agreed={finalInfo.agreed}
      handleFinalInfoChange={handleFinalInfoChange}
    />
      }
      
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
              <span onClick={handlePreviousButtonClick}>{'< Wstecz'}</span>
            </div>
            <div className='next'>
              <span onClick={handleNextButtonClick}>{Math.round(completionPercentage) === 100 ? 'Wyślij' : 'Dalej >'}</span>
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
            {completionPercentage < 100 && (
              <animated.text x='18' y='20.35' className='percentage' style={textProps}>
                {numberProps.number.to((n) => `${Math.round(n)}%`)}
              </animated.text>
            )}
            {completionPercentage === 100 && (
              <animated.g style={checkmarkProps}>
                <path
                  className='checkmark'
                  fill='none'
                  stroke='black'
                  strokeWidth='2'
                  d='M12 18l4 4 8-8'
                />
              </animated.g>
            )}
          </svg>
          <span>Postęp</span>
        </div>
      </div>
      <Footer />
      <NotificationContainer />
      <IoMenu className='menu-slide-button' onClick={slideButtonClicked} />
    </div>
  );
};

export default Valuation;
