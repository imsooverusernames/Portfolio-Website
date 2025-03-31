import React, { useEffect, useState } from "react";
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
  const skills = [
    { id: "html", src: html, alt: "HTML logo", span: "HTML" },
    { id: "css", src: css, alt: "CSS logo", span: "CSS" },
    { id: "js", src: js, alt: "JavaScript logo", span: "JavaScript" },
    { id: "git", src: git, alt: "GitHub logo", span: "GitHub" },
    { id: "react", src: react, alt: "React logo", span: "React" },
  ];

  const certificatesImg = [
    { id: "meta", src: meta, alt: "Meta Certificate" },
    { id: "cademy1", src: cademy1, alt: "Front-End Certificate" },
    { id: "cademy2", src: cademy2, alt: "Git & GitHub Certificate" },
    { id: "cademy3", src: cademy3, alt: "JavaScript Certificate" },
    { id: "cademy4", src: cademy4, alt: "React and Redux Certificate" },
    { id: "cademy5", src: cademy5, alt: "React Certificate" },
    { id: "cademy6", src: cademy6, alt: "React Frontend App Certificate" },
    { id: "cademy7", src: cademy7, alt: "React Testing Certificate" },
  ];


  const [certificates, setCertificates] = useState([]);
  useEffect(() => {
    setCertificates([...certificatesImg, ...certificatesImg]);
  }, [certificates]);



  return (
    <section id="skillset">
      <h1 className="heading">Skillset</h1>
      <ul>
        {skills.map((item) => (
          <li key={item.id}>
            <img src={item.src} alt={item.alt} />
            <span>{item.span}</span>
          </li>
        ))}
      </ul>

      <div className="scroller">
        <div className="scroller-track">
          {certificates.map((item) => (
            <div className="scroll" key={item.id}>
              <img key={item.id} src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;
