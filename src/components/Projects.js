import React from 'react';
import './Projects.css';

const Procejts = () => {
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

      <div class="container">
        <div class="project-img isometric-container">
          <img src="resources\images\portfilio-website.png" alt="Portfolio Website" loading="lazy" />
        </div>
        <h4>Portfolio Website</h4>
      </div>

      <div class="container">
        <div class="project-img isometric-container soon">
          <img src="resources\images\blurred.jpg" alt="Upcoming Project" loading="lazy" />
        </div>
        <h4 class="upcoming">Upcoming...</h4>
      </div>

      <div class="container">
        <div class="project-img isometric-container soon">
          <img src="resources\images\blurred.jpg" alt="Upcoming Project" loading="lazy" />
        </div>
        <h4 class="upcoming">Upcoming...</h4>
      </div>

    </div>

    </section>
  );
}

export default Procejts;