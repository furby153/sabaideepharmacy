import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const phoneNumber = '089-441-2049';
  const cleanPhoneNumber = phoneNumber.replace(/-/g, ''); // Remove dashes from the phone number
  const lineId = '@642mltxi';

  const handleCall = () => {
    window.location.href = `tel:${cleanPhoneNumber}`;
  };

  const handleCopyLineId = () => {
    navigator.clipboard.writeText(lineId).then(() => {
      alert(`Copied Line ID: ${lineId}

      You can paste Line ID on search friend in Line Application.
      คุณสามารถกดวางไลน์ไอดีได้ บนช่องค้นหาเพื่อนในแอพพลิเคชันไลน์`);
    }).catch((err) => {
      console.error('Failed to copy Line ID: ', err);
    });
  };

  const handleOpenLine = () => {

    // Try opening the Line application using custom URI scheme
    try {
      window.location.href = `line://ti/p/~${lineId}`;
    } catch (error) {
      // If an error occurs, fallback to copying Line ID to clipboard
      handleCopyLineId();
    }
  };

  const [showQRCode, setShowQRCode] = useState(false);

  const handleShowQRCode = () => {
    setShowQRCode(true);
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
        <button 
          style={{
            fontSize: '18px',
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            borderRadius: '5px',
            cursor: 'pointer',
            border: 'none',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
          }}
          onClick={handleOpenLine}
        >
          กดเพื่อเพิ่มเพื่อน @642mltxi
        </button>
        <h3><a href="https://lin.ee/bGqAAAz" target="_blank" rel="noopener noreferrer">https://lin.ee/bGqAAAz</a></h3>
        {showQRCode ? (
          <img alt='QR code' src="https://qr-official.line.me/gs/M_642mltxi_BW.png"></img>
        ) : (
          <button
          style={{
            fontSize: '18px',
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            borderRadius: '5px',
            cursor: 'pointer',
            border: 'none',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
          }}
          onClick={handleShowQRCode}
          >
            Show QR Code
          </button>
        )}
        <br/>
      </div>
      
    </div>
  );
}

export default App;
