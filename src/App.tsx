import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import RequestForm from './Pages/RequestForm';
import Valuation from './Pages/Valuation';

function App() {
  return (
  
      <div className='App'>
        <Router>
          <Routes>
          <Route path='/KamilCodemateWebsite' element={<MainPage />} />
          <Route path='/KamilCodemateWebsite/request-form' element={<RequestForm />} />
          <Route path='/KamilCodemateWebsite/valuation' element={<Valuation />} />
          </Routes>
        </Router>
      </div>
   
  );
}

export default App;
