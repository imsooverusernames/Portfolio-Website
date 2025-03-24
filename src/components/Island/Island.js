import React, { useEffect, useRef, useState } from "react";
import "./Island.css";

const Island = () => {
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkmode") === "active"
  );

  useEffect(() => {
    const handleScroll = () => {
      const fromTop = window.scrollY;
      const navLinks = navRef.current.querySelectorAll(".nav-link");

      navLinks.forEach((link, index) => {
        const section = document.querySelector(link.getAttribute("href"));

        setActiveIndex(index);
        if (
          section.offsetTop <= fromTop + 1 &&
          section.offsetTop + section.offsetHeight > fromTop + 1
        ) {
          console.log("index", index, link);
          const linkRect = link.getBoundingClientRect();
          const navRect = navRef.current.getBoundingClientRect();

          indicatorRef.current.style.width = `${linkRect.width + 30}px`;
          indicatorRef.current.style.transform = `translateX(${
            linkRect.left - navRect.left
          }px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
      localStorage.setItem("darkmode", "active");
    } else {
      document.body.classList.remove("darkmode");
      localStorage.removeItem("darkmode");
    }
  }, [darkMode]);

  return (
    <nav id="nav-bar" role="navigation" ref={navRef}>
      <ul>
        <li>
          <a
            href="#home"
            className={`nav-link ${activeIndex === 0 ? "active" : ""}`}
          >
            <svg viewBox="0 -960 960 960" fill="#e8eaed">
              <path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`nav-link ${activeIndex === 1 ? "active" : ""}`}
          >
            <svg viewBox="0 -960 960 960" fill="#e8eaed">
              <path d="M240-120q-45 0-89-22t-71-58q26 0 53-20.5t27-59.5q0-50 35-85t85-35q50 0 85 35t35 85q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 23-5.5 42T220-202q5 2 10 2h10Zm230-160L360-470l358-358q11-11 27.5-11.5T774-828l54 54q12 12 12 28t-12 28L470-360Zm-190 80Z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#skillset"
            className={`nav-link ${activeIndex === 2 ? "active" : ""}`}
          >
            <svg viewBox="0 -960 960 960" fill="#e8eaed">
              <path d="M480-60q-72-68-165-104t-195-36v-440q101 0 194 36.5T480-498q73-69 166-105.5T840-640v440q-103 0-195.5 36T480-60Zm0-104q63-47 134-75t146-37v-276q-73 13-143.5 52.5T480-394q-66-66-136.5-105.5T200-552v276q75 9 146 37t134 75Zm0-436q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-760q0-33-23.5-56.5T480-840q-33 0-56.5 23.5T400-760q0 33 23.5 56.5T480-680Zm0-80Zm0 366Z" />
            </svg>
          </a>
        </li>
        <hr />
        <li>
          <button
            id="theme-switch"
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode(!darkMode)}
          >
            <svg viewBox="0 -960 960 960" fill="#e8eaed">
              <path d="M480-120q-151 0-255.5-104.5T120-480q0-138 90-239.5T440-838q13-2 23 3.5t16 14.5q6 9 6.5 21t-7.5 23q-17 26-25.5 55t-8.5 61q0 90 63 153t153 63q31 0 61.5-9t54.5-25q11-7 22.5-6.5T819-479q10 5 15.5 15t3.5 24q-14 138-117.5 229T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
            </svg>
            <svg viewBox="0 -960 960 960" fill="#e8eaed">
              <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z" />
            </svg>
          </button>
        </li>
      </ul>
      <div id="sliding-indicator" ref={indicatorRef}></div>
    </nav>
  );
};

export default Island;
