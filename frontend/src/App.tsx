import React, { useState } from 'react';
import './App.css';
import Slides from './components/Slides/Slides';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer/Footer';
import Dashboard from './components/pages/Dashboard/Dashboard';
import SelectPage from './components/pages/SelectPage/SelectPage';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<><Slides /><Dashboard /></>}></Route>;
        <Route path='/plan' element={<><Slides /><SelectPage /></>}></Route>;
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
