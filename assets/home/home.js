// animation of home page button arrows
function handleButtonHover(button, arrow) {
    button.addEventListener('mouseover', () => {
        arrow.style.transition = '200ms';
        arrow.style.position = 'relative';
        arrow.style.top = '50px';
        arrow.style.color = 'rgb(255, 100, 100)'
    });

    button.addEventListener('mouseleave', () => {
        arrow.style.transition = '200ms';
        arrow.style.position = 'relative';
        arrow.style.top = '0px';
        arrow.style.color = 'rgb(0, 0, 0)'
    });
}

const buttonContact = document.getElementById('home__button-contact');
const arrowContact = document.querySelector('#home__button-contact span');
handleButtonHover(buttonContact, arrowContact);

const projectsBtn = document.getElementById('home__button-projects');
const projectsArrow = document.querySelector('#home__button-projects span');
handleButtonHover(projectsBtn, projectsArrow);


// redirection of network links
const githubBtns = document.querySelectorAll(".github-link");
const linkedinBtns = document.querySelectorAll(".linkedin-link");

githubBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        window.open("https://github.com/sylvainjeanpierre", "_blank");
    });
});

linkedinBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        window.open("https://www.linkedin.com/in/sylvain-jeanpierre-a25a14128/", "_blank");
    });
});
