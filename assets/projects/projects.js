// construction of the projects section
import projectsData from './projectsData.json' assert { type: 'json' };

const projectContainer = document.getElementById("projects__container");

function linkProjects () {


    const projectContent = projectsData.map(project => {

        const skills = project.skills.map(skill => `<li class="skills">${skill}</li>`).join('');
        const githubLink = project.githubUrl !== undefined ?
        `<a href=${project.githubUrl} target="_blank">
        <img src="./assets/images/github-logo-projects.png" alt="GitHub" class="github-links">
        </a>` : '';
        const images = project.imageUrl.map(img => `<img class="swiper-slide" src="${img}" alt="${project.name}" />`).join('');

        return `
        <article>

        <div class="project__comment">
            <img src=${project.logoUrl} alt=${project.name} class="project__logo">
            <p>${project.comment}</p>
            <div>
            <ul>${skills}</ul>
            ${githubLink}
            </div>
        </div>

        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                ${images}
            </div>
            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>

    </article>
        `;
    });

    const projects = projectContent.join('');


    projectContainer.innerHTML = projects
}


linkProjects()



// swiper config
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper(".swiper", {
    // Optional parameters
    autoHeight: true,
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
      },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: true,
});
