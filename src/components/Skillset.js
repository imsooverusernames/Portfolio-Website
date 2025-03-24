import React from 'react';
import './Skillset.css';

const Skillset = () => {
  return (
  <section id="skillset">

      <h1 className="heading">Skillset</h1>
      <ul>
        <li className="isometric-container">
          <img src="resources\svg\skillset-svg\html.svg" alt="HTML logo" />
          <span>HTML</span>
        </li>
        <li className="isometric-container">
          <img src="resources\svg\skillset-svg\css.svg" alt="CSS logo" />
          <span>CSS</span>
        </li>
        <li className="isometric-container">
          <img src="resources\svg\skillset-svg\js.svg" alt="JavaScript logo" />
          <span>JavaScript</span>
        </li>
        <li className="isometric-container">
          <img src="resources\svg\skillset-svg\github.svg" alt="GitHub logo" />
          <span>GitHub</span>
        </li>
        <li className="isometric-container">
          <img src="resources\svg\skillset-svg\react.svg" alt="React logo" />
          <span>React</span>
        </li>
      </ul>

      <div className="scroller">
        <div className="scroller-track scroller-inner">
          <img src="resources\images\certificates\Front-End _ Certificate.jpg" />
          <img src="resources\images\certificates\Git&GitHub_Certificate.jpg" />
          <img src="resources\images\certificates\JS_Certificate.jpg" />
          <img src="resources\images\certificates\React and Redux.jpg" />
          <img src="resources\images\certificates\React_Certificate.jpg" />
          <img src="resources\images\certificates\React_Frontend_App.jpg" />
          <img src="resources\images\certificates\React_Testing_Certificate.jpg" />
          <img src="resources\images\certificates\Coursera-Meta-Certificate.jpg" />
        </div>
      </div>

    </section>
    );
}

export default Skillset;