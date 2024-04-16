import "./Footer.scss";
const l = `${process.env.PUBLIC_URL}/images/logo.webp`;

function Footer() {
  return (
    <footer>
      <div id="footer-container">
      <div id="footer__upper">
        <div id="footer__upper-name">
        <img src={`${process.env.PUBLIC_URL}/images/logo.webp`} alt="Mon logo" />
        <h4>Sylvain Jeanpierre - Développeur web</h4>
        </div>
        <div id="footer__upper-links">
          <h4>Réseaux</h4>
          <img
            src={`${process.env.PUBLIC_URL}/images/github-logo-footer.webp`}
            alt="GitHub"
            onClick={() => window.open("https://github.com/sylvainjeanpierre", "_blank")}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/linkedin-logo.webp`}
            alt="LinkedIn"
            onClick={() => window.open("https://www.linkedin.com/in/sylvain-jeanpierre-a25a14128/", "_blank")}
          />
        </div>
      </div>
      <div id="footer__lower">Réalisé par Sylvain Jeanpierre - 2024</div>
      </div>
    </footer>

  );
}

export default Footer;