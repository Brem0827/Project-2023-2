import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/App.css';
import ScrollHeader from './components/ScrollHeader';
import Slide from './components/Slide';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollHeader />
      <div className='App-main'>
        <Slide />
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;