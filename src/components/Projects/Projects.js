import React from "react";
import "./Projects.css";
import blurred from "../../assets/images/blurred.jpg";
import portfolio from "../../assets/images/portfilio-website.png";

const Procejts = () => {
  const projects = [
    { src: portfolio, alt: "Portfolio Website", h4: "Portfolio Website" },
    {
      src: blurred,
      alt: "Upcoming Project",
      h4: "Upcoming...",
      class: "upcoming",
    },
    {
      src: blurred,
      alt: "Upcoming Project",
      h4: "Upcoming...",
      class: "upcoming",
    },
  ];

  return (
    <section id="projects">
      <div class="project-text">
        <h1 class="heading">Projects</h1>
        <p>
          some of the projects that i've worked on, with many more coming
          soon(-ish)
        </p>
      </div>

      <div class="showcase">
        {projects.map((item) => {
          return (
            <div className="container">
              <div className="project-img isometric-container">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <h4 className={item.class}>{item.h4}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Procejts;
