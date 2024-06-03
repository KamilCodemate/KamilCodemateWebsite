import React from 'react';
import logo from './logo.svg';
import MainPage from './Pages/MainPage';
import RequestForm from './Pages/RequestForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Valuation from './Pages/Valuation';
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/request-form' element={<RequestForm />} />
          <Route path='/valuation' element={<Valuation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
