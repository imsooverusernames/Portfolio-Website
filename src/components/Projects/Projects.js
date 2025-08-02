import "./Projects.css";
import { Link } from "react-router-dom";
import blurred from "../../assets/images/blurred.jpg";
import portfolio from "../../assets/images/portfilio-website.png";
import tcp from "../../assets/images/tcp.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: portfolio,
      alt: "Portfolio Website",
      h4: "Portfolio Website",
    },
    {
      id: 2,
      src: tcp,
      alt: "The Comedy Pub",
      h4: "The Comedy Pub",
      link: "/tcp-frontend/",
    },
    {
      id: 3,
      src: blurred,
      alt: "Upcoming Project",
      h4: "Upcoming...",
      type: "upcoming",
    },
  ];

  return (
    <section id="projects">
      <div className="project-text">
        <h1 className="heading">Projects</h1>
        <p>
          some of the projects that i've worked on, with many more coming
          soon(-ish)
        </p>
      </div>

      <div className="showcase">
        {projects.map((item) => {
          const card = (
            <div className="container" key={item.id}>
              <div className="project-img isometric-container">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <h4 className={item.type}>{item.h4}</h4>
            </div>
          );

          return item.link ? (
            <Link key={item.id} to={item.link}>
              {card}
            </Link>
          ) : (
            card
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
