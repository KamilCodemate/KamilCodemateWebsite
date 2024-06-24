import React from 'react';
import './ComponentStyles/MainNavbar.scss';
import {useNavigate} from 'react-router-dom'
type Props = {
  isActive: boolean;
};
const MainNavbar: React.FC<Props> = ({ isActive }) => {
  const navigate = useNavigate();
  return (
    <div className={`main-navbar ${isActive ? 'active' : ''}`}>
      <div className='navbar-logo'>KamilCodemate</div>
      <div className='navbar-links'>
        <div className='navbar-link'>HOME</div>
        <div className='navbar-link' onClick={() => {navigate('/KamilCodemateWebsite/valuation')}}>Nasze usługi</div>
        <div className='navbar-link'>Jak to działa</div>
        <div className='navbar-link'>Cennik</div>
        <div className='navbar-link'>Kontakt</div>
      </div>
    </div>
  );
};

export default MainNavbar;
