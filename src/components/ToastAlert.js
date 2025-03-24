import React, { useState } from 'react';
import './ToastAlert.css';

const ToastAlert = () => {
  const [toasts, setToasts] = useState([]);
  let isToastActive = false;

  const showToast = (msg) => {
    if (isToastActive) return;

    isToastActive = true;

    const newToast = {
      id: Date.now(),
      message: msg,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== newToast.id));
      isToastActive = false;
    }, 2000);
  };

  const copyEmailAndShowToast = () => {
    const email = "brunoborici@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      const msg = `
        <div class="toast-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
            <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
          </svg>
        </div> Email address copied to clipboard
      `;
      showToast(msg);
    }).catch((err) => {
      console.error("Failed to copy email: ", err);
    });
  };

  return (
    <div>
      <button onClick={copyEmailAndShowToast}>Copy Email</button>

      <div id="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast" dangerouslySetInnerHTML={{ __html: toast.message }} />
        ))}
      </div>
    </div>
  );
};

export default ToastAlert;
