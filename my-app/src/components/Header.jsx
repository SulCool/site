import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faCat, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <FontAwesomeIcon icon={faCat} className="logo-icon" />
          <h1>Зеленый Приют</h1>
        </div>
        <nav className={`desktop-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul>
            <li><Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Главная</Link></li>
            <li><Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>О нас</Link></li>
            <li><Link to="/cats" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Наши котики</Link></li>
            <li><Link to="/help" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Как помочь</Link></li>
            <li><Link to="/contacts" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Контакты</Link></li>
          </ul>
        </nav>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
}

export default Header;