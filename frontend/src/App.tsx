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
  const [place, setPlace] = useState<Place>();
  const [place2, setPlace2] = useState<Place>();
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [account, setAccount] = useState<Account>();

  useEffect(() => {
    const storedAccount = localStorage.getItem('account');
    if (storedAccount) {
      const parsedAccount = JSON.parse(storedAccount);
      setAccount(parsedAccount);
    }
  }, [])

  return (
    <div className="App">
      {(!isLogin)
        ? (
          <div><Header isLogin={isLogin} setIsLogin={setIsLogin} account={account} setAccount={setAccount}/>
            <Routes>
              <Route path='/' element={<><Slides /><Dashboard place={place} setPlace={setPlace} place2={place2} setPlace2={setPlace2} setStart={setStart} setEnd={setEnd} start={start} end={end} /></>}></Route>;
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
