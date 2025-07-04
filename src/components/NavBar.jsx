import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import logo from "../assets/random-experience-logo-64.png";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo-img" />
        <Link to="/" className="navbar-brand logo-text">
          <span className="logo-brand">Random</span>
          <span className="logo-subtitle">Experience</span>
        </Link>
      </div>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/productos" className="nav-link">
              Productos
            </Link>
          </li>

          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              Categorías
            </span>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/categoria/hierba">Hierba</Link></li>
                <li><Link className="dropdown-item" to="/categoria/agua">Agua</Link></li>
                <li><Link className="dropdown-item" to="/categoria/fuego">Fuego</Link></li>
                <li><Link className="dropdown-item" to="/categoria/bicho">Bicho</Link></li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/contacto" className="nav-link">
              Contacto
            </Link>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
}
