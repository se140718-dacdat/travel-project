import React, { useState } from 'react';
import './App.css';
import Slides from './components/Slides/Slides';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer/Footer';
import Dashboard from './components/pages/Dashboard/Dashboard';
import SelectPage from './components/pages/SelectPage/SelectPage';
import Plan from './components/pages/Plan/Plan';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<><Slides /><Dashboard /></>}></Route>;
        <Route path='/select' element={<><Slides /><SelectPage /></>}></Route>;
        <Route path='/plan' element={<Plan />}></Route>;
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
