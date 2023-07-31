import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const phoneNumber = '089-441-2049';
  const cleanPhoneNumber = phoneNumber.replace(/-/g, ''); // Remove dashes from the phone number

  const handleCall = () => {
    window.location.href = `tel:${cleanPhoneNumber}`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <div className='center'>
        <h1>สบายดีฟาร์มาซี</h1>
        <p>95/18 หมู่ 3 ต.ปากข้าวสาร</p>
        <p>อ.เมืองสระบุรี จ.สระบุรี</p>
        <h3 onClick={handleCall} style={{ cursor: 'pointer' }}>โทร.{phoneNumber}</h3>
      </div>
      <div className='line-section'>
        <h2>Line Official Account</h2>
        <h3>กดเพิ่มเพื่อน @642mltxi</h3>
        <h3><a href="https://lin.ee/bGqAAAz" target="_blank" rel="noopener noreferrer">https://lin.ee/bGqAAAz</a></h3>
        <img alt='QR code' src="https://qr-official.line.me/gs/M_642mltxi_BW.png"></img>
        <br/>
      </div>
      
    </div>
  );
}

export default App;
