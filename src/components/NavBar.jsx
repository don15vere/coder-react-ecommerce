import './NavBar.css';
import CartWidget from './CartWidget';
import logo from '../assets/random-experience-logo-64.png';

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light px-4 d-flex justify-content-between align-items-center">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo-img" />
        <div className="logo-text">
          <span>Random</span>
          <span>Experience</span>
        </div>
      </div>

      <ul className="navbar-nav flex-row gap-3">
        <li className="nav-item">
          <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Catálogo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
}
