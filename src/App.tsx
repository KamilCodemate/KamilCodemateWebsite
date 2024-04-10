import React from 'react';
import logo from './logo.svg';
import MainPage from './Pages/MainPage';
import RequestForm from './Pages/RequestForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/request-form' element={<RequestForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
