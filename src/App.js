import React, { useState } from 'react';
import logo from './logo.svg';
import googleMapsLogo from './Google_Maps_icon_(2020).svg'
import facebookLogo from './Facebook_f_logo_(2021).svg'
import './App.css';

function App() {

  const phoneNumber = '089-441-2049';
  // Remove dashes from the phone number
  const cleanPhoneNumber = phoneNumber.replace(/-/g, '');
  // Add the country code to the phone number
  const phoneNumberWithCountryCode = `+66${cleanPhoneNumber.substring(1)}`;
  const handleCall = () => {
    window.location.href = `tel:${phoneNumberWithCountryCode}`;
  };

  // Define a state to keep track of SVG link loading status
  const [svgLinkError, setSvgLinkError] = useState(false);
  // Function to handle SVG link load error
  const handleSvgLinkError = () => {
    setSvgLinkError(true);
  };
  const googleMapsLink = 'https://goo.gl/maps/H9TGjvoooDESR6sQ8';
  
  // Define a state to keep track of SVG link loading status
  const [facebookSvgLinkError, setFacebookSvgLinkError] = useState(false);
  // Function to handle SVG link load error
  const handleFacebookSvgLinkError = () => {
    setFacebookSvgLinkError(true);
  };
  const facebookLink = 'https://web.facebook.com/SabaideePharmacySaraburi';

  const lineId = '@642mltxi';

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
        <p>95/18 หมู่ 3 ต.ปากข้าวสาร อ.เมืองสระบุรี จ.สระบุรี</p>
        <h3 onClick={handleCall} style={{ cursor: 'pointer' }}>โทร.{phoneNumber}</h3>
      </div>
      <div className='google-maps-section'>
          <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
            {svgLinkError ? (
              <div>
                {/* Show the local SVG file if the SVG link is unavailable */}
                <img src={googleMapsLogo} alt="Google Maps Logo" className="google-maps-logo"/>
              </div>
            ) : (
              <img
                alt='Google Maps Logo'
                src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" // Replace this URL with your SVG link
                className="google-maps-logo"
                onError={handleSvgLinkError}
            />
            )}
          </a>
          <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
            <button className='green-button-style'>
              แสดงที่อยู่บน Google Maps
            </button>
          </a>
      </div>
      <div className='facebook-section'>
        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
          {facebookSvgLinkError ? (
              <div>
                {/* Show the local SVG file if the SVG link is unavailable */}
                <img src={facebookLogo} alt="Facebook Logo" className="facebook-logo"/>
              </div>
            ) : (
              <img
                alt='Facebook Logo'
                src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" // Replace this URL with your SVG link
                className="facebook-logo"
                onError={handleFacebookSvgLinkError}
            />
            )}
        </a>
        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
          <button className='green-button-style'>
            ติดตามเราทาง Facebook
          </button>
        </a>
      </div>
      <div className='line-section'>
        <h2>Line Official Account</h2>
        <button 
          className='green-button-style'
          onClick={handleOpenLine}
        >
          กดเพื่อเพิ่มเพื่อน
        </button>
        <h3><a href="https://lin.ee/bGqAAAz" target="_blank" rel="noopener noreferrer">https://lin.ee/bGqAAAz</a></h3>
        {showQRCode ? (
          <img alt='QR code' src="https://qr-official.line.me/gs/M_642mltxi_BW.png"></img>
        ) : (
          <button
            className='green-button-style'
            onClick={handleShowQRCode}
          >
            Show QR Code
          </button>
        )}
      </div>
      
    </div>
  );
}

export default App;
