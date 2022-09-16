import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link to="/">
          ROBOTICA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">
                INICIO
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/1">
                ROBOTS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/2">
                PIEZAS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto">
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;