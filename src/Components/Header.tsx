import React from 'react';
import './ComponentStyles/Header.scss';

type HeaderProps = {
  title: string;
  description: string;
  type: 'blacked' | 'whitened';
};

const Header: React.FC<HeaderProps> = ({ title, description, type }) => {
  return (
    <div className='section-title'>
      <span className={`first-section-title ${type}`}>{title}</span>
      <span className={`second-section-title ${type}`}>{description}</span>
    </div>
  );
};

export default Header;
