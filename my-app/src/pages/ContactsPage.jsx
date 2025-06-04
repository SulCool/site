import './ContactsPage.css';

function ContactsPage() {
  return (
    <main className="contacts-page">
      <h1>Контакты</h1>
      <p>Приходите к нам в гости, звоните или пишите - мы всегда рады общению!</p>

      <div className="contacts-grid">
        <section className="info-section">
          <h2>Как нас найти</h2>
          <div className="info">
            <div>
              <h3>Адрес приюта</h3>
              <p>г. Москва, ул. Зеленая, д. 15<br />Вход со стороны парка</p>
            </div>
            <div>
              <h3>Часы работы</h3>
              <p>Пн-Пт: 10:00 - 19:00<br />Сб-Вс: 11:00 - 17:00</p>
            </div>
            <div>
              <h3>Телефоны</h3>
              <p>+7 (495) 123-45-67<br />+7 (968) 765-43-21 (WhatsApp)</p>
            </div>
            <div>
              <h3>Электронная почта</h3>
              <p>info@green-shelter.ru<br />volunteers@green-shelter.ru</p>
            </div>
          </div>
          <div>
            <h3>Мы в соцсетях:</h3>
            <div className="socials">

            </div>
          </div>
        </section>

        <section className="form-section">
          <h2>Написать нам</h2>
          <form>
            <input type="text" placeholder="Ваше имя" required />
            <input type="email" placeholder="Ваш email" required />
            <input type="tel" placeholder="Ваш телефон" required />
            <textarea placeholder="Ваше сообщение" required></textarea>
            <button type="submit">Отправить сообщение</button>
          </form>
        </section>
      </div>

      <section>
        <h2>Часто задаваемые вопросы</h2>
        <div className="faq">
          <div>
            <h3>Можно ли приехать просто посмотреть котиков?</h3>
            <p>Да, конечно! Мы всегда рады гостям, которые хотят познакомиться с нашими котиками. Приезжайте в часы работы приюта, мы с удовольствием проведем для вас экскурсию.</p>
          </div>
          <div>
            <h3>Как происходит усыновление животного?</h3>
            <p>Процесс усыновления включает несколько этапов: знакомство с животным, заполнение анкеты, собеседование с нашим специалистом, подписание договора и оплата символического взноса.</p>
          </div>
          <div>
            <h3>Можно ли взять кота временно, на передержку?</h3>
            <p>Да, у нас есть программа временной передержки животных. Она подходит людям, которые не готовы взять питомца навсегда, но хотят помочь.</p>
          </div>
          <div>
            <h3>Какие документы выдаются при усыновлении?</h3>
            <p>При уо усыновлении мы выдаем ветеринарный паспорт с отметками о вакцинации и стерилизации, договор об ответственном содержании, а также памятку по уходу за животным.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactsPage;