import "./Project.scss";
import projectsData from "../../data/projectsData.json"
import { useParams } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import PageError from "../page-error/PageError"

function Project() {

    window.scrollTo({top: 0});

    const currentProjectId = useParams().id;

    const project = projectsData.filter(function (project) {
        return project.id === currentProjectId;
    })[0];

    if (project === undefined) {
        return (
            <PageError />
        )
    }

    const projectImages = project.imageUrl.map((image) => (
        <SplideSlide key={image}>
            <img
                src={image}
                alt={project.name}
                className="carousel-image" />
        </SplideSlide>
    ));

    const projectSkills = project.skills.map((skill, index) => (
        <li key={index}>{skill}</li>
    ));

    const splideOptions = {
        type: 'loop',
        autoplay: true,
        pauseOnHover: true,
        interval: 3000,
    };


    return (
        <section id="project">
            <Splide
                options={splideOptions}
                className="carousel">
                {projectImages}
            </Splide>
            <img id="project-logo" src={project.logoUrl} alt={project.name} />
            <p id="project-comment">{project.comment}</p>

            <h3 id="project-problematic">Problématique :</h3>
            <p>{project.problematic}</p>

            <h3 id="project-solution">Solution :</h3>
            <p>{project.solution}</p>

            <ul id="project-skills">
                {projectSkills}
            </ul>

            {project.githubUrl ?
                <div id="project-links">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/github-logo-projects.webp`}
                        alt="GitHub"
                        onClick={() => window.open(`${project.githubUrl}`, "_blank")}
                        id="project-github" />
                    {project.online ? <a href={project.online} target="_blank" id="project-online">Voir en ligne</a> : null}
                </div>
                : null}

        </section>

    );
}

export default Project;