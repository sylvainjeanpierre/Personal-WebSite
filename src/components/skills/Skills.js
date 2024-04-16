import React from 'react';
import './Skills.scss';

function Skills() {
    const [hovered, setHovered] = React.useState(null);

    const handleMouseEnter = (skill) => {
        setHovered(skill);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    const skills = [
        { name: "HTML", logo: "html-logo.webp" },
        { name: "CSS", logo: "css-logo.webp" },
        { name: "SASS", logo: "sass-logo.webp" },
        { name: "JavaScript", logo: "javascript-logo.webp" },
        { name: "React", logo: "react-logo.webp" },
        { name: "NodeJS", logo: "node-logo.webp" },
        { name: "Express", logo: "express-logo.webp" },
        { name: "Git", logo: "git-logo.webp" },
        { name: "GitHub", logo: "github-logo.webp" },
        { name: "Optimisation", logo: "optimization-logo.webp" },
        { name: "SEO", logo: "seo-logo.webp" },
    ];

    return (
        <section id="skills">
            <h2>Mes compétences</h2>
            <div id='skills-container'>
                {skills.map((skill, index) => (
                    <div
                        className="skill"
                        key={index}
                        onMouseEnter={() => handleMouseEnter(skill.name)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p style={{ opacity: hovered === skill.name && skill.logo ? 0 : 1 }}>
                            {skill.name}
                        </p>
                        {skill.logo && (
                            <img
                                src={`${process.env.PUBLIC_URL}/images/skills/${skill.logo}`}
                                alt={skill.name}
                                style={{ opacity: hovered === skill.name ? 1 : 0 }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
