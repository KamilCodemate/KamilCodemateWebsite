import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import RequestForm from './Pages/RequestForm';
import Valuation from './Pages/Valuation';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/request-form' element={<RequestForm />} />
          <Route path='/valuation' element={<Valuation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
