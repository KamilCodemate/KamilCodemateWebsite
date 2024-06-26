import React, {useEffect, useRef} from 'react';
import './ComponentStyles/Header.scss';
import {motion, useInView, useAnimation} from 'framer-motion';



const AnimationVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const AnimationTransition = {
  duration: 0.5,
  delay: 0.5,
};

type HeaderProps = {
  title: string;
  description: string;
  type: 'blacked' | 'whitened';
};

const Header: React.FC<HeaderProps> = ({ title, description, type }) => {
  
const ref = useRef(null);
const inView = useInView(ref, {once: true});
const mainControls = useAnimation();

  useEffect(() => {
    if(inView) {
      mainControls.start('visible');
    }
  }, [inView]);
  
  return (
    <motion.div ref = {ref} className='section-title'
    variants={AnimationVariants}
    transition={AnimationTransition}
    initial='hidden'
    animate={mainControls}
    >
      <span className={`first-section-title ${type}`}>{title}</span>
      <span className={`second-section-title ${type}`}>{description}</span>
    </motion.div>
  );
};

export default Header;
