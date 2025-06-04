import React from 'react';
import './HelpPage.css';

function HelpPage() {
  return (
    <div className="help-page">
      <h1>Как помочь приюту</h1>
      <p>Поддержите наших пушистых подопечных! Любая помощь делает жизнь кошек лучше.</p>

      {/* Две колонки: Финансовая и Материальная помощь */}
      <div className="help-columns">
        <div className="help-card">
          <div className="icon">$</div>
          <h2>Финансовая помощь</h2>
          <p>Ваши пожертвования помогают нам покупать корм, медикаменты, оплачивать услуги ветеринаров и улучшать условия содержания животных.</p>
          <ul className="help-list">
            <li>Ежемесячное пожертвование</li>
            <li>Разовое пожертвование</li>
            <li>Целевая помощь на лечение</li>
          </ul>
          <button className="btn">Сделать пожертвование</button>
        </div>

        <div className="help-card">
          <div className="icon">📦</div>
          <h2>Материальная помощь</h2>
          <p>Наши подопечные нуждаются не только в деньгах, но и в предметах первой необходимости.</p>
          <h3>Что мы принимаем:</h3>
          <ul className="help-list">
            <li>Корм для кошек (сухой и влажный)</li>
            <li>Наполнители для туалетов</li>
            <li>Лекарства и ветеринарные препараты</li>
            <li>Одеяла, подстилки, лежанки</li>
            <li>Игрушки для кошек</li>
          </ul>
          <button className="btn">Поддержать материально</button>
        </div>
      </div>

      {/* Форма волонтерства */}
      <div className="volunteer-form">
        <div className="volunteer-content">
          <div className="form-icon">🤝</div>
          <h2>Смываем волонтером</h2>
          <p>Помогайте животным напрямую! Присоединяйтесь к нашей команде волонтеров.</p>
        </div>
        <form>
          <div className="form-fields">
            <label>Заявление заявку на волонтерство:</label>
            <input type="text" placeholder="Имя" />
            <input type="tel" placeholder="Телефон" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Почему вы хотите стать волонтером?"></textarea>
            <button type="submit" className="btn">Отправить заявку</button>
          </div>
        </form>
      </div>

      {/* Партнеры */}
      <div className="partners">
        <h2>Наши партнеры</h2>
        <div className="partner-list">
          <span>VetCare</span>
          <span>ЗооМир</span>
          <span>PetsLove</span>
          <span>АптекаЗоо</span>
          <span>HappyPaws</span>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;