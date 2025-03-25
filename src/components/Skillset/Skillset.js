import React, { useEffect } from "react";
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
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    document.querySelectorAll(".scroller").forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
      const scrollerInner = scroller.querySelector(".scroller-inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(clone);
      });

      scroller.addEventListener("mouseenter", () => {
        scroller.classList.add("paused");
      });
      scroller.addEventListener("mouseleave", () => {
        scroller.classList.remove("paused");
      });
    });
  };

  const skills = [
    { src: html, alt: "HTML logo", span: "HTML" },
    { src: css, alt: "CSS logo", span: "CSS" },
    { src: js, alt: "JavaScript logo", span: "JavaScript" },
    { src: git, alt: "GitHub logo", span: "GitHub" },
    { src: react, alt: "React logo", span: "React" },
  ];

  const certificates = [
    { src: meta, alt: "Meta Certificate" },
    { src: cademy1, alt: "Front-End Certificate" },
    { src: cademy2, alt: "Git & GitHub Certificate" },
    { src: cademy3, alt: "JavaScript Certificate" },
    { src: cademy4, alt: "React and Redux Certificate" },
    { src: cademy5, alt: "React Certificate" },
    { src: cademy6, alt: "React Frontend App Certificate" },
    { src: cademy7, alt: "React Testing Certificate" },
  ];

  return (
    <section id="skillset">
      <h1 className="heading">Skillset</h1>
      <ul>
        {skills.map((item) => {
          return (
            <li>
              <img src={item.src} alt={item.alt} />
              <span>{item.span}</span>
            </li>
          );
        })}
      </ul>

      <div className="scroller">
        <div className="scroller-track scroller-inner">
          {certificates.map((item) => {
            return <img src={item.src} alt={item.alt} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skillset;
