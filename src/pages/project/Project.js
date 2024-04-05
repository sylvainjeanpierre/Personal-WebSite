import "./Project.scss";
import projectsData from "../../data/projectsData.json"
import { useParams } from "react-router-dom";

function Project() {

    const currentProjectId = useParams().id;

    const project = projectsData.filter(function (project) {
        return project.id === currentProjectId;
      })[0];

    return (
        <section id="project">

            <h1 id="title">{project.name}</h1>
            <h2>Page en travaux</h2>

    </section>

    );
}

export default Project;