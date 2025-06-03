import './HomePage.css';

function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <h1>Подари дом котику в беде!</h1>
        <p>Наш приют спасает бездомных кошек и ищет для них любящих хозяев. Присоединяйтесь к нашей миссии!</p>
        <div className="buttons">
          <a href="/cats" className="btn">Найти питомца</a>
          <a href="/help" className="btn">Помочь приюту</a>
        </div>
      </section>
      <section className="mission">
        <h2>Наша миссия</h2>
        <div className="cards">
          <div className="card">
            <h3>Спасение животных</h3>
            <p>Мы находим и спасаем бездомных и больных кошек, давая им шанс на счастливую жизнь.</p>
          </div>
          <div className="card">
            <h3>Ветеринарная помощь</h3>
            <p>Все наши подопечные проходят полный курс лечения, вакцинации и стерилизации.</p>
          </div>
          <div className="card">
            <h3>Поиск хозяев</h3>
            <p>Мы тщательно подбираем любящих хозяев для каждого котика, помогая питомцам обрести семью.</p>
          </div>
        </div>
      </section>
      <section className="success-stories">
        <h2>Истории успеха</h2>
        <div className="cards">
          <div className="card">
            <h3>Мурзик нашел семью!</h3>
            <p>"Мурзик был спасен нами в ужасном состоянии, но теперь он живет в замечательной семье с тремя детьми!"</p>
            <p>- Семья Ивановых</p>
          </div>
          <div className="card">
            <h3>Сонька и ее новая жизнь</h3>
            <p>"Бездомная кошка Сонька наконец нашла любящую хозяйку, и теперь у нее есть собственный мягкий домик!"</p>
            <p>- Анна Петрова</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;