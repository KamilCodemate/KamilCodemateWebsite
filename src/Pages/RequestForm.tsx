import React, { useState } from 'react';
import Footer from '../Components/Footer';
import MainNavbar from '../Components/MainNavbar';

const RequestForm: React.FC = () => {
  return (
    <div className='request-form'>
      <MainNavbar />
      <Footer />
    </div>
  );
};

export default RequestForm;
