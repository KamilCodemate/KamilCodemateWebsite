import React, {useState} from 'react';
import {animated, useSpring} from 'react-spring';
type Props = {
    content: string,
    handleContentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const BuildWebsiteSubpages: React.FC<Props> = ({content, handleContentChange}) => {

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


    const [signCount, setSignCount] = useState<number>(0);
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        

        if(event.target.value.length > 10000) return;
         
            else{
                handleContentChange(event);
        setSignCount(event.target.value.length);
            }
     
    }


    return (
        
        <animated.div className='subpages-container' style={fade}>
            <div className="step-title">Opisz, co ma zawierać strona główna oraz podstrony (jeżeli istnieją)</div>

            <div className="subpages-content">
                <textarea className="step-description-textarea" placeholder="Opis..." onChange={(e) => handleChange(e)} value={content}/>

                    <div className="sign-counter" style={{width: '100%', textAlign: 'right'}}>{(10000 - signCount).toLocaleString('pl-PL')}</div>
                </div>
        </animated.div>
    );
};

export default BuildWebsiteSubpages;