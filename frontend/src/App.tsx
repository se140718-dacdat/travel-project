import React, { useEffect, useState } from 'react';
import './App.css';
import Slides from './components/Slides/Slides';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer/Footer';
import Dashboard from './components/pages/Dashboard/Dashboard';
import SelectPage from './components/pages/SelectPage/SelectPage';
import Plan from './components/pages/Plan/Plan';
import { Account, Place } from './Models';
import Login from './components/pages/Login/Login';



function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false)

  return (
    <div className="App">
      {(!isLogin)
        ? (
          <div><Header isLogin={isLogin} setIsLogin={setIsLogin} />
            <Routes>
              <Route path='/' element={<><Slides /><Dashboard/></>}></Route>;
              <Route path='/select' element={<><Slides /><SelectPage /></>}></Route>;
              <Route path='/plan' element={<Plan />}></Route>;
            </Routes>
            <Footer /></div>
        )
        : <Login setIsLogin={setIsLogin} />
      }
    </div>
  );
}

export default App;
