import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isToastActive, setIsToastActive] = useState(false);

  const email = "brunoborici@gmail.com";

  const copyEmailAndShowToast = async () => {
    try {
      if (isToastActive) return;
      await navigator.clipboard.writeText(email);
      setIsToastActive(true);
      setTimeout(() => {
        setIsToastActive(false);
      }, 2000);
    } catch (err) {
      console.log("Failed to copy email", err);
    }
  };


  return (
    <footer>
    <div>
      <h4 className="logo">BrunoBorici</h4>
      <p>Looking for opportunities to grow together</p>
    </div>

    <div className="contact-section">
      <div className="contact-button">
        <a>Contact me</a>
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000" className="pointer-icon">
          <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/>
        </svg>
      </div>
      <div className="social-icons">
        <a onClick={copyEmailAndShowToast} aria-label="Copy email address">
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="social-icon">
            <g id="Communication / Mail">
              <path id="Vector" d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z"/>
            </g>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/bruno-borici-212154337/" target="_blank"
                aria-label="Visit my LinkedIn">
            <svg width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="social-icon">
              <path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/>
            </svg>
          </a>
      </div>
    </div>
    {isToastActive && (
        <div id="toast-container" className="toast">
          <div className="toast-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </div>
          Email address copied to clipboard
        </div>
      )}
  </footer>
  );
}

export default Footer;
