import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF,
  faInstagram,
  faCat 
} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer bg-primaryDark text-white">
      <div className="container">
        <div className="footer-section1">
          <h3 className="footer-title">
            <FontAwesomeIcon icon={faCat} className="logo-icon-footer" />
            Зеленый Приют
          </h3>
          <p className="footer-text">
            Мы спасаем бездомных кошек и помогаем им найти любящих хозяев. 
            Присоединяйтесь к нашей миссии!
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">

            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">

            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Навигация</h3>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Главная</a></li>
            <li><a href="/about" className="footer-link">О нас</a></li>
            <li><a href="/cats" className="footer-link">Наши котики</a></li>
            <li><a href="/help" className="footer-link">Как помочь</a></li>
            <li><a href="/contacts" className="footer-link">Контакты</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Подписка</h3>
          <p className="footer-text">
            Подпишитесь на новостную рассылку о наших котиках и событиях приюта.
          </p>
          <form className="footer-form">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="footer-input"
            />
            <button type="submit" className="footer-button">
              Подписаться
            </button>
          </form>
          <p className="footer-disclaimer">
            Мы не рассылаем спам и храним ваши данные конфиденциально.
          </p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Зеленый Приют для Кошек. Все права защищены.</p>
        <p>ИНН: 1234567890 | ОГРН: 1234567890123</p>
      </div>
    </footer>
  );
}

export default Footer;