import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header sticky top-0 z-50">
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <h1 className="logo-text">Зеленый Приют</h1>
          </Link>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Главная</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">О нас</Link>
            </li>
            <li className="nav-item">
              <Link to="/cats" className="nav-link">Наши котики</Link>
            </li>
            <li className="nav-item">
              <Link to="/help" className="nav-link">Как помочь</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts" className="nav-link">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;