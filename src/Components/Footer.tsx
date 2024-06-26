import React, {useEffect, useRef} from 'react';
import './ComponentStyles/Footer.scss';
import {motion, useInView, useAnimation} from 'framer-motion';

const AnimationVariants = {
  hidden: { opacity: 0, y: 300 },
  visible: { opacity: 1, y: 0 },
};

const AnimationTransition = {
  duration: 0.5,
  delay: 0.5,
};



const Footer: React.FC = () => {
  const ref = useRef(null);
const inView = useInView(ref, {once: true});
const mainControls = useAnimation();

  useEffect(() => {
    if(inView) {
      mainControls.start('visible');
    }
  }, [inView]);
  
  return (
    <motion.div ref={ref} className='footer'
    variants={AnimationVariants}
    transition={AnimationTransition}
    initial='hidden'
    animate={mainControls}
    >
      <div className='footer-first-col'>
        <div className='footer-logo'>KamilCodemate</div>
        <div className='slogan'>Przyciągniemy do Ciebie uwagę</div>
        <div className='footer-services-root'>
          <div className='footer-services-title'>Usługi</div>
          <div className='footer-services'>
            <div className='footer-service'>Tworzenie witryn</div>
            <div className='footer-service'>Aktualizacja witryn</div>
            <div className='footer-service'>Pozycjonowanie</div>
            <div className='footer-service'>Opieka nad stroną</div>
            <div className='footer-service'>Kampanie Google Ads</div>
            <div className='footer-service'>Systemy back-end</div>
          </div>
        </div>
      </div>
      <div className='footer-second-col'>
        <div className='footer-links-title'>Przydatne linki</div>
        <div className='footer-links'>
          <div className='footer-link'>Nasze usługi</div>
          <div className='footer-link'>Jak to działa</div>
          <div className='footer-link'>Cennik</div>
          <div className='footer-link'>Kontakt</div>
          <div className='footer-link'>Polityka prywatności</div>
          <div className='footer-link'>FAQ</div>

          <div className='footer-link'>Zamów witrynę już teraz</div>
        </div>
      </div>

      <div className='copy'>&copy;InteFuture 2024 - Wszelkie Prawa Zastrzeżone</div>
    </motion.div>
  );
};

export default Footer;
