import './Skills.scss';

function Skills() {
    return (
        <section id="skills">

            <h2>Mes compétences</h2>
            <ul>
                <li className="skills">HTML</li>
                <li className="skills">CSS</li>
                <li className="skills">SASS</li>
                <li className="skills">JavaScript</li>
                <li className="skills">React</li>
                <li className="skills">Express</li>
                <li className="skills">Git</li>
                <li className="skills">GitHub</li>
                <li className="skills">Optimisation</li>
                <li className="skills">SEO</li>
            </ul>

            <div id='skills-logo'>
            <img src={`${process.env.PUBLIC_URL}/images/skills/html-logo.png`} alt="HTML" />
            <img src={`${process.env.PUBLIC_URL}/images/skills/css-logo.png`} alt="CSS" />
            <img src={`${process.env.PUBLIC_URL}/images/skills/sass-logo.png`} alt="SASS" />
            <img src={`${process.env.PUBLIC_URL}/images/skills/javascript-logo.png`} alt="JavaScript" />
            <img src={`${process.env.PUBLIC_URL}/images/skills/react-logo.png`} alt="React" />
            <img src={`${process.env.PUBLIC_URL}/images/skills/node-logo.png`} alt="NodeJS" />
            <img src={`${process.env.PUBLIC_URL}/images/skills/mongodb-logo.png`} alt="MongoDB" />
            <img src={`${process.env.PUBLIC_URL}/images/skills/git-logo.png`} alt="Git" />
            <img src={`${process.env.PUBLIC_URL}/images/skills/github-logo.png`} alt="GitHub" />
            </div>

        </section>
    );
}

export default Skills;



