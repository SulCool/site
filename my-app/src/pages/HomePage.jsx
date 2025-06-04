import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faHeartbeat, 
  faHandHoldingHeart
} from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  return (
    <main>
      {/* Hero Section */}
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

      {/* Mission Section */}
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

      {/* Success Stories Section */}
      <section className="success-stories">
                  <h2>Истории успеха</h2>
        <div className="container">

          <div className="stories-grid">
            <div className="story-card">
              <div className="story-image">
                <img 
                  src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" 
                  alt="Счастливый котик Мурзик" 
                />
              </div>
              <div className="story-content">
                <h3>Мурзик нашел семью!</h3>
                <p>
                  "Мурзик был спасен нами в ужасном состоянии, но теперь он живет в замечательной семье с тремя детьми!"
                </p>
                <p className="author">- Семья Ивановых</p>
              </div>
            </div>

            <div className="story-card">
              <div className="story-image">
                <img 
                  src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" 
                  alt="Счастливая кошка Сонька" 
                />
              </div>
              <div className="story-content">
                <h3>Сонька и ее новая жизнь</h3>
                <p>
                  "Бездомная кошка Сонька наконец нашла любящую хозяйку, и теперь у нее есть собственный мягкий домик!"
                </p>
                <p className="author">- Анна Петрова</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;