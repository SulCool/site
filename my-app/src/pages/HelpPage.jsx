import './HelpPage.css';

function HelpPage() {
  return (
    <main className="help-page">
      <h1>Как помочь приюту</h1>
      <p>Поддержите наших пушистых подопечных! Любая помощь делает жизнь кошек лучше.</p>
      <section>
        <h2>Финансовая помощь</h2>
        <p>Ваши пожертвования помогают нам покупать корм, медикаменты, оплачивать услуги ветеринаров и улучшать условия содержания животных.</p>
        <ul>
          <li>Ежемесячное пожертвование</li>
          <li>Разовое пожертвование</li>
          <li>Целевая помощь на лечение</li>
        </ul>
        <a href="/donation" className="btn">Сделать пожертвование</a>
      </section>
      <section>
        <h2>Материальная помощь</h2>
        <p>Наши подопечные нуждаются не только в деньгах, но и в предметах первой необходимости.</p>
        <ul>
          <li>Корм для кошек (сухой и влажный)</li>
          <li>Наполнители для туалетов</li>
          <li>Лекарства и ветеринарные препараты</li>
          <li>Одеяла, подстилки, лежаки</li>
          <li>Игрушки для кошек</li>
        </ul>
        <a href="#" className="btn">Посмотреть полный список</a>
      </section>
      <section>
        <h2>Станьте волонтером</h2>
        <p>Помогайте животным напрямую - уход, общение, прогулки. Присоединяйтесь к нашей команде!</p>
        <form>
          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Ваш email" required />
          <button type="submit">Отправить заявку</button>
        </form>
      </section>
      <section>
        <h2>Наши партнеры</h2>
        <div className="partners">
          <p>VetCare</p>
          <p>ЗооМир</p>
          <p>PetsLove</p>
          <p>АптекаЗоо</p>
          <p>HappyPaws</p>
        </div>
      </section>
    </main>
  );
}

export default HelpPage;