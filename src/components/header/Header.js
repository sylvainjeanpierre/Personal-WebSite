import './Header.scss';
const logoUrl = `${process.env.PUBLIC_URL}/images/logo.webp`;
const logoMenuOpen = `${process.env.PUBLIC_URL}/images/menu-open-logo.ico`;
const logoMenuClose = `${process.env.PUBLIC_URL}/images/menu-close-logo.ico`;
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      const mobileMenu = document.getElementById("check");
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        mobileMenu.checked = false;
      }
    }
  }, [location]);
}

function Header() {

  useScrollToAnchor();

  return (
    <header>
      <div id='header-container'>
      <Link to="/#home" id="header_logo-container">
        <img src={logoUrl} alt="Mon logo" id="header_logo" />
        <p id="header_title">Alpes Web Solutions</p>
      </Link>
      {/* checkbox for mobile menu use */}
      <nav>
        <input type="checkbox" id="check" />
        <ul>
          <label id="menu-close" htmlFor="check">
            <img src={logoMenuClose} alt='Fermer le menu'/>
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
        <img src={logoMenuOpen} alt='Menu'/>
        </label>
      </nav>
      </div>
    </header>
  );
}

export default Header;
