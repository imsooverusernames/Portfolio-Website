import React from "react";
import "./Skillset.css";

import html from "../../assets/svg/skillset-svg/html.svg";
import css from "../../assets/svg/skillset-svg/css.svg";
import js from "../../assets/svg/skillset-svg/js.svg";
import git from "../../assets/svg/skillset-svg/github.svg";
import react from "../../assets/svg/skillset-svg/react.svg";

import meta from "../../assets/images/certificates/Coursera-Meta-Certificate.jpg";
import cademy1 from "../../assets/images/certificates/Front-End _ Certificate.jpg";
import cademy2 from "../../assets/images/certificates/Git&GitHub_Certificate.jpg";
import cademy3 from "../../assets/images/certificates/JS_Certificate.jpg";
import cademy4 from "../../assets/images/certificates/React and Redux.jpg";
import cademy5 from "../../assets/images/certificates/React_Certificate.jpg";
import cademy6 from "../../assets/images/certificates/React_Frontend_App.jpg";
import cademy7 from "../../assets/images/certificates/React_Testing_Certificate.jpg";

const Skillset = () => {
  return (
    <section id="skillset">
      <h1 className="heading">Skillset</h1>
      <ul>
        <li className="isometric-container">
          <img src={html} />
          <span>HTML</span>
        </li>
        <li className="isometric-container">
          <img src={css} alt="CSS logo" />
          <span>CSS</span>
        </li>
        <li className="isometric-container">
          <img src={js} />
          <span>JavaScript</span>
        </li>
        <li className="isometric-container">
          <img src={git} />
          <span>GitHub</span>
        </li>
        <li className="isometric-container">
          <img src={react} alt="React logo" />
          <span>React</span>
        </li>
      </ul>

      <div className="scroller">
        <div className="scroller-track scroller-inner">
          <img src={meta} />
          <img src={cademy1} />
          <img src={cademy2} />
          <img src={cademy3} />
          <img src={cademy4} />
          <img src={cademy5} />
          <img src={cademy6} />
          <img src={cademy7} />
        </div>
      </div>
    </section>
  );
};

export default Skillset;
