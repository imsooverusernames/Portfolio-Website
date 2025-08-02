import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
    <section id="home">
      <header>
        <h4 className="logo">
          <Link to="/">BrunoBorici</Link>
        </h4>
        <nav>
          <ul>
            <li>
              <a
                onClick={copyEmailAndShowToast}
                aria-label="Copy email address"
                style={{ cursor: "pointer" }}
              >
                Mail
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bruno-borici-212154337/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Toast message */}
      {isToastActive && (
        <div id="toast-container" className="toast">
          <div className="toast-icon">
            {/* SVG icon */}
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
    </section>
  );
};

export default Navbar;
