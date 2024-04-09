import "./Projects.scss";
import projectsData from "../../data/projectsData.json"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import '@splidejs/react-splide/css';

function Projects() {

  const [isHovered, setIsHovered] = useState(false);

  const projectsImages = projectsData.map((project) => (

    <SplideSlide key={project.id}>
      <Link to={`/projects/${project.id}`}>
        <img
          src={project.imageUrl[0]}
          alt={project.name}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ opacity: isHovered ? 0.5 : 1 }}
          className="carousel-image" />
        <img
          src={project.logoUrl}
          alt={project.name}
          className="carousel-logo"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={
          { width: isHovered ? "25%" : "20%",
           backgroundColor: isHovered ? "transparent" : "rgba(255, 255, 255, 0.5)"}}/>
          <ul
          className="carousel-skills"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ opacity: isHovered ? 1 : 0 }}>
          {project.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
          </ul>
      </Link>
    </SplideSlide>
  ));

  const splideOptions = {
    type       : 'loop',
    autoplay   : true,
    pauseOnHover: true,
    interval   : 3000,
  };


  return (
    <section id="projects">
      <h2>Mes projets</h2>
      <p id="projects__intro">
        Vous trouverez ici quelques-uns des mes projets réalisés à titre personnel
        ou lors de ma formation
      </p>

        <Splide
        aria-label="My Favorite Images"
        options={splideOptions}
        className="carousel">
          {projectsImages}
        </Splide>
    </section>

  );
}

export default Projects;