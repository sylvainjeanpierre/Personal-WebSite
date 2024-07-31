import './About.scss';

function About() {
  return (
    <section id="about">
      <div>
        <h2>A propos</h2>
        <p id='about__text'>
          Après avoir passé quelques années à explorer le domaine commercial et à cultiver une
          passion pour la tech et le développement, j'ai décidé de franchir le pas en validant une formation de développeur web. <br />
          <br /> La rigueur et la précision sont pour moi des valeurs fondamentales que je place au
          cœur de chaque projet afin de créer des solutions innovantes et efficaces.
        </p>

        <h2>Mes Services</h2>
    <p>Avec Alpes Web Solutions, je propose une gamme complète de services web adaptés à vos besoins :</p>
    <ul>
        <li><span>Conception de sites web et d'applications mobiles Android et iOS :</span> Je crée des sites web sur mesure et des applications intuitives, répondant aux standards modernes de design et de performance.</li>
        <li><span>Optimisations :</span> J'optimise les performances de vos sites pour garantir une navigation fluide et rapide, améliorant ainsi l'expérience utilisateur et le référencement.</li>
        <li><span>Maintenance :</span> Je m'occupe de la maintenance continue de vos sites web et applications pour assurer leur bon fonctionnement et leur sécurité.</li>
    </ul>
    <p>Basé dans le Briançonnais, je travaille principalement sur les Alpes du Sud, offrant des services de proximité et un accompagnement personnalisé à chaque client.</p>
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