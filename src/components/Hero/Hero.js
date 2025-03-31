import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home">

    <section className="home">

      <svg id="visual" viewBox="0 0 960 540" preserveAspectRatio="none"
        xlinkHref="http://www.w3.org/1999/xlink" version="1.1">
        <defs>
          <linearGradient id="grad1_0" x1="43.8%" y1="100%" x2="100%" y2="0%">
            <stop offset="14.444444444444446%" stopColor="#edecea" stopOpacity="1"></stop>
            <stop offset="85.55555555555554%" stopColor="#edecea" stopOpacity="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_0" x1="0%" y1="100%" x2="56.3%" y2="0%">
            <stop offset="14.444444444444446%" stopColor="#edecea" stopOpacity="1"></stop>
            <stop offset="85.55555555555554%" stopColor="#edecea" stopOpacity="1"></stop>
          </linearGradient>
        </defs>
        <g transform="translate(960, 540)">
          <path className="blob1"
            d="M-216 0C-214.9 -45.7 -213.8 -91.3 -187.1 -108C-160.3 -124.7 -107.9 -112.4 -72.5 -125.6C-37.1 -138.7 -18.5 -177.4 0 -216L0 0Z"
            fill="#222222"></path>
        </g>
        <g transform="translate(0, 0)">
          <path className="blob2"
            d="M216 0C213.6 43.5 211.3 86.9 187.1 108C162.9 129.1 116.8 127.8 82 142C47.2 156.3 23.6 186.1 0 216L0 0Z"
            fill="#222222"></path>
        </g>
      </svg>
      <div id="isometric">
        <h3>Hello, I'm Bruno</h3>
      </div>
        <h3 className="description">
          a UI/UX designer passionate about intuitive and compeling digital experiences
        </h3>

    </section>

    </section>
    );
}

export default Hero;