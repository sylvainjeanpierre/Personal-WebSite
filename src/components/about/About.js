import './About.scss';

function About() {
  return (
    <section id="about">
      <div>
        <h2>A propos</h2>
        <p id="about__paragraph">
          Après avoir passé quelques années à explorer le domaine commercial et à cultiver une
          passion pour la tech et le développement, j'ai décidé de franchir le pas en me formant au
          métier de développeur web. <br />
          <br /> La rigueur et la précision sont pour moi des valeurs fondamentales que je place au
          cœur de chaque projet afin de créer des solutions innovantes et efficaces.
        </p>
      </div>

      <div id="about__networks-links">
        <img
          src={`${process.env.PUBLIC_URL}/images/github-logo.webp`}
          alt="GitHub"
          onClick={() => window.open("https://github.com/sylvainjeanpierre", "_blank")}
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/linkedin-logo.webp`}
          alt="GitHub"
          onClick={() => window.open("https://www.linkedin.com/in/sylvain-jeanpierre-a25a14128/", "_blank")}
        />
      </div>


    </section>
  );
}

export default About;