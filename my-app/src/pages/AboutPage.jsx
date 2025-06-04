import './AboutPage.css';
import { FaHeart, FaShieldAlt, FaHandshake, FaLeaf } from 'react-icons/fa';
function AboutPage() {
  return (
    <main className="about-page">
      <h1>О нашем приюте</h1>
      <section className="history-section">
        <div className="history-image">
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80"
            alt="Кот в приюте"
          />
        </div>
        <div className="history-content">
          <h2>Наша история</h2>
          <p>Приют "Зеленый уголок" был основан в 2015 году группой волонтеров, которые не могли оставаться равнодушными к судьбе бездомных кошек нашего города.</p>
          <p>За эти годы мы построили современный комплекс для проживания животных, обустроили ветеринарную клинику и помогли более 1500 кошкам найти свой дом.</p>
          <p>Мы верим, что каждое животное заслуживает любви, заботы и теплого дома, и работаем над этим каждый день.</p>
        </div>
      </section>

      <section>
        <h2>Наши принципы</h2>
        <div className="principles-container">
          <div className="principles-card">
            <div className="principle-item">
              <FaHeart className="principle-icon" />
              <h3>Забота и уважение</h3>
              <p>Каждое животное получает индивидуальный уход, основанный на его потребностях и характере.</p>
            </div>

            <div className="principle-item">
              <FaShieldAlt className="principle-icon" />
              <h3>Безопасность и здоровье</h3>
              <p>Все наши животные проходят полный ветеринарный осмотр и вакцинацию.</p>
            </div>

            <div className="principle-item">
              <FaHandshake className="principle-icon" />
              <h3>Ответственное усыновление</h3>
              <p>Мы тщательно проверяем будущих хозяев, чтобы гарантировать счастливую жизнь кошки.</p>
            </div>

            <div className="principle-item">
              <FaLeaf className="principle-icon" />
              <h3>Экологический подход</h3>
              <p>Используем экологичные материалы в обустройстве приюта и перерабатываем отходы.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Наша команда</h2>
        <div className="cards team">
          <div className="card team-card">
            <div className="team-image">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                alt="Ольга Смирнова"
              />
            </div>
            <h3>Ольга Смирнова</h3>
            <p>Директор приюта</p>
            <p>Опыт работы с животными - 15 лет</p>
          </div>
          <div className="card team-card">
            <div className="team-image">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                alt="Алексей Котов"
              />
            </div>
            <h3>Алексей Котов</h3>
            <p>Главный ветеринар</p>
            <p>Оперирует животных более 10 лет</p>
          </div>
          <div className="card team-card">
            <div className="team-image">
              <img
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                alt="Екатерина Петрова"
              />
            </div>
            <h3>Екатерина Петрова</h3>
            <p>Зоопсихолог</p>
            <p>Специалист по адаптации животных</p>
          </div>
          <div className="card team-card">
            <div className="team-image">
              <img
                src="https://st3.depositphotos.com/4071389/13492/i/450/depositphotos_134921608-stock-photo-cool-guy-in-shades-and.jpg"
                alt="Дмитрий Иванов"
              />
            </div>
            <h3>Дмитрий Иванов</h3>
            <p>Координатор волонтеров</p>
            <p>Управляет командой из 30 волонтеров</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;