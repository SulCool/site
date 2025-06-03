import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <h3>Зеленый Приют</h3>
          <p>Мы спасаем бездомных кошек и помогаем им найти любящих хозяев. Присоединяйтесь к нашей миссии!</p>
        </div>
        <div>
          <h3>Навигация</h3>
          <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/about">О нас</a></li>
            <li><a href="/cats">Наши котики</a></li>
            <li><a href="/help">Как помочь</a></li>
            <li><a href="/contacts">Контакты</a></li>
          </ul>
        </div>
        <div>
          <h3>Подписка</h3>
          <p>Подпишитесь на новостную рассылку о наших котиках и событиях приюта.</p>
          <form>
            <input type="email" placeholder="Ваш email" />
            <button type="submit">Подписаться</button>
          </form>
          <p>Мы не рассылаем спам и храним ваши данные конфиденциально.</p>
        </div>
        <div>
          <p>© 2023 Зеленый Приют для Кошек. Все права защищены.</p>
          <p>ИНН: 1234567890 | ОГРН: 1234567890123</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;