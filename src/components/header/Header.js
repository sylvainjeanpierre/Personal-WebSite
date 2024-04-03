import './Header.scss';
const logoUrl = `${process.env.PUBLIC_URL}/images/logo.png`;
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
}

function Header() {

  useScrollToAnchor();

  return (
    <header>
      <Link to="/#home" id="header_logo-container">
        <img src={logoUrl} alt="Mon logo" id="header_logo" />
        <p id="header_title">Sylvain Developer</p>
      </Link>
      {/* checkbox for mobile menu use */}
      <nav>
        <input type="checkbox" id="check" />
        <ul>
          <label id="menu-close" htmlFor="check">
            <i className="fa-solid fa-xmark" />
          </label>
          <li>
            <Link to="/#home">
              <button>
                Accueil
              </button>
            </Link>
          </li>
          <li>
            <Link to="/#about">
              <button>
                A propos
              </button>
            </Link>
          </li>
          <li>
            <Link to="/#projects">
              <button>
                Projets
              </button>
            </Link>
          </li>
          <li>
            <Link to="/#contact">
              <button>
                Contact
              </button>
            </Link>
          </li>
        </ul>
        <label id="menu-open" htmlFor="check">
          <i className="fa-solid fa-bars" />
        </label>
      </nav>
    </header>
  );
}

export default Header;
