import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeartbeat, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Подари дом котику в беде!</h1>
          <p>Наш приют спасает бездомных кошек и ищет для них любящих хозяев. Присоединяйтесь к нашей миссии!</p>
          <div className="hero-buttons">
            <button className="btn-primary">Найти питомца</button>
            <button className="btn-outline">Помочь приюту</button>
          </div>
        </div>
      </section>

      <section className="mission">
        <h2>Наша миссия</h2>
        <div className="mission-cards">
          <div className="mission-card">
            <FontAwesomeIcon icon={faHome} className="mission-icon" />
            <h3>Спасение животных</h3>
            <p>Мы находим и спасаем бездомных и больных кошек, давая им шанс на счастливую жизнь.</p>
          </div>
          <div className="mission-card">
            <FontAwesomeIcon icon={faHeartbeat} className="mission-icon" />
            <h3>Ветеринарная помощь</h3>
            <p>Все наши подопечные проходят полный курс лечения, вакцинации и стерилизации.</p>
          </div>
          <div className="mission-card">
            <FontAwesomeIcon icon={faHandHoldingHeart} className="mission-icon" />
            <h3>Поиск хозяев</h3>
            <p>Мы тщательно подбираем любящих хозяев для каждого котика, помогая питомцам обрести семью.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;