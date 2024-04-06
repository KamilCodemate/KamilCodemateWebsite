import React from 'react';
import './ComponentStyles/MainNavbar.scss';
const MainNavbar: React.FC = () => {
  return (
    <div className='main-navbar'>
      <div className='navbar-logo'>InteFuture</div>
      <div className='navbar-links'>
        <div className='navbar-link'>HOME</div>
        <div className='navbar-link'>Nasze usługi</div>
        <div className='navbar-link'>Jak to działa</div>
        <div className='navbar-link'>Cennik</div>
        <div className='navbar-link'>Kontakt</div>
      </div>
    </div>
  );
};

export default MainNavbar;
