import React, {useState} from 'react';
import './App.css';
import Slides from './components/Slides/Slides';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer/Footer';



function App() {
  const [showSlide, setShowSlide] = useState<boolean>(true);


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Slides setShowSlide={setShowSlide} showSlide={showSlide} />}></Route>;
        <Route path='/tour' element={<Slides  setShowSlide={setShowSlide} showSlide={showSlide} />}></Route>;
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
