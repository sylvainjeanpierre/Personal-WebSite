import "./Projects.scss";
import projectsData from "../../data/projectsData.json"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import '@splidejs/react-splide/css/sea-green';

function Projects() {

  const [isHovered, setIsHovered] = useState(false);

  const projectsImages = projectsData.map((project) => (

    <SplideSlide>
      <Link to={`/projects/${project.id}`}>
        <img
          key={project.id}
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
            <li key={index} className="skills">{skill}</li>
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


      <div id="projects__container">


        <Splide
        aria-label="My Favorite Images"
        options={splideOptions}
        className="carousel">
          {projectsImages}
        </Splide>

      </div>








      {/* <div id="projects__container">{projectsData.map((project) => {
        const skills = project.skills.map((skill, index) => (
          <li key={index} className="skills">{skill}</li>
        ));

        const githubLink = project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/github-logo-projects.png`} alt="GitHub" className="github-links" />
          </a>
        ) : '';

        const images = project.imageUrl.map((img, index) => (
          <SplideSlide>
            <img key={index} src={process.env.PUBLIC_URL + img} alt={project.name} className="carousel-image" />
          </SplideSlide>
        ));


        return (
          <article key={project.name}>
            <div className="project__comment">
              <img src={project.logoUrl} alt={project.name} className="project__logo" />
              <p>{project.comment}</p>
              <div>
                <ul>{skills}</ul>
                {githubLink}
              </div>
            </div>
            <Link to={`projects/${project.id}`} key={project.id}>
              <Splide aria-label="My Favorite Images" className="carousel">
                {images}
              </Splide>
            </Link>

            {/* <div className="carousel">
              <div className="carousel-images" id={`carousel-${projectId}`}>

              </div>
              <button id={`prev-carousel-${projectId}`} className="prev">&#10094;</button>
              <button id={`next-carousel-${projectId}`} className="next">&#10095;</button>
            </div> */}
      {/* </article>
        );
      })}</div> */}
    </section>

  );
}

export default Projects;