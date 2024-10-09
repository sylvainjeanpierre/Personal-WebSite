import "./Projects.scss";
import projectsData from "../../data/projectsData.json"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import '@splidejs/react-splide/css';

function Projects() {

  const [isSitesWebHovered, setIsSitesWebHovered] = useState(false);
  const [isApplicationsHovered, setIsApplicationsHovered] = useState(false);


  const sitesWebCarousel = projectsData["sites-web"].map((project) => (

    <SplideSlide key={project.id}>
      <Link to={`/projects/${project.id}`}>
        <img
          src={project.imageUrl[0]}
          alt={project.name}
          onMouseEnter={() => window.innerWidth > 1000 && setIsSitesWebHovered(true)}
          onMouseLeave={() => setIsSitesWebHovered(false)}
          style={{ opacity: isSitesWebHovered ? 0.5 : 1 }}
          className="carousel-image" />
        <img
          src={project.logoUrl}
          alt={project.name}
          className="carousel-logo"
          onMouseEnter={() => window.innerWidth > 1000 && setIsSitesWebHovered(true)}
          onMouseLeave={() => setIsSitesWebHovered(false)}
          style={
          { width: isSitesWebHovered ? "25%" : "20%",
           backgroundColor: isSitesWebHovered ? "transparent" : "rgba(255, 255, 255, 0.5)"}}/>
          <ul
          className="carousel-skills"
          onMouseEnter={() => window.innerWidth > 1000 && setIsSitesWebHovered(true)}
          onMouseLeave={() => setIsSitesWebHovered(false)}
          style={{ opacity: isSitesWebHovered ? 1 : 0 }}>
          {project.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
          </ul>
      </Link>
    </SplideSlide>
  ));

  const applicationsCarousel = projectsData["applications"].map((project) => (

    <SplideSlide key={project.id}>
      <Link to={`/projects/${project.id}`}>
        <img
          src={project.imageUrl[0]}
          alt={project.name}
          onMouseEnter={() => window.innerWidth > 1000 && setIsApplicationsHovered(true)}
          onMouseLeave={() => setIsApplicationsHovered(false)}
          style={{ opacity: isApplicationsHovered ? 0.5 : 1 }}
          className="carousel-image" />
        <img
          src={project.logoUrl}
          alt={project.name}
          className="carousel-logo"
          onMouseEnter={() => window.innerWidth > 1000 && setIsApplicationsHovered(true)}
          onMouseLeave={() => setIsApplicationsHovered(false)}
          style={
          { width: isApplicationsHovered ? "25%" : "20%",
           backgroundColor: isApplicationsHovered ? "transparent" : "rgba(255, 255, 255, 0.5)"}}/>
          <ul
          className="carousel-skills"
          onMouseEnter={() => window.innerWidth > 1000 && setIsApplicationsHovered(true)}
          onMouseLeave={() => setIsApplicationsHovered(false)}
          style={{ opacity: isApplicationsHovered ? 1 : 0 }}>
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
    interval   : 3000
  };


  return (
    <section id="projects">
      <h2>Mes projets</h2>

      <h3>Sites Web</h3>

        <Splide
        aria-label="My Favorite Images"
        options={splideOptions}
        className="carousel">
          {sitesWebCarousel}
        </Splide>

      <h3>Applications mobiles</h3>

      <Splide
        aria-label="My Favorite Images"
        options={splideOptions}
        className="carousel">
          {applicationsCarousel}
        </Splide>

    </section>

  );
}

export default Projects;