import { Link } from 'react-router-dom';
import { faCat, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <FontAwesomeIcon icon={faCat} className="logo-icon" />
          <h1>Зеленый Приют</h1>
        </div>
        <nav className="desktop-nav">
          <ul>
            <li><Link to="/" className="nav-link">Главная</Link></li>
            <li><Link to="/about" className="nav-link">О нас</Link></li>
            <li><Link to="/cats" className="nav-link">Наши котики</Link></li>
            <li><Link to="/help" className="nav-link">Как помочь</Link></li>
            <li><Link to="/contacts" className="nav-link">Контакты</Link></li>
          </ul>
        </nav>
        <button className="mobile-menu-btn">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
}

export default Header;