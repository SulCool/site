import { useState } from 'react';
import './CatsPage.css';

const cats = [
  {
    id: 1,
    name: 'Борсик',
    age: '2 месяца',
    type: 'kitten',
    description: 'Очень активный и любознательный котелок, обожает играть и лазить по деревьям. Идеален для семьи с детьми.',
    traits: ['Любопытный', 'Игривый', 'Дружелюбный'],
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    id: 2,
    name: 'Муся',
    age: '3 года',
    type: 'adult',
    description: 'Спокойная и ласковая кошка, мечтающая о тихом доме. Отлично ладит с другими котами и людьми, любит подолгу спать.',
    traits: ['Спокойная', 'Ласковая', 'Домашняя'],
    image: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    id: 3,
    name: 'Симба',
    age: '5 лет',
    type: 'special',
    description: 'Слепой кот с золотым характером. Несмотря на особенности, Симба активен, любит играть и общаться.',
    traits: ['Милый', 'Контактный', 'Любопытный'],
    image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80'
  }
];

function CatsPage() {
  const [filter, setFilter] = useState('all');

  const filteredCats = cats.filter(cat => {
    if (filter === 'all') return true;
    return cat.type === filter;
  });

  return (
    <div className="cats-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Наши котики ждут дома</h1>
          <p>Каждое из этих животных прошло медицинский осмотр и готово стать вашим компаньоном!</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="flex space-x-2 border-b border-gray-300">
            <button
              className={`filter-btn px-4 py-2 text-lg font-semibold border-transparent hover:text-primary border-b-2 border-primary text-primary ${filter === 'all' ? 'active' : ''}`}
              data-filter="all"
              onClick={() => setFilter('all')}
            >
              Все
            </button>
            <button
              className={`filter-btn px-4 py-2 text-lg font-semibold border-transparent hover:text-primary ${filter === 'kitten' ? 'active' : ''}`}
              data-filter="kitten"
              onClick={() => setFilter('kitten')}
            >
              Котята
            </button>
            <button
              className={`filter-btn px-4 py-2 text-lg font-semibold border-transparent hover:text-primary ${filter === 'adult' ? 'active' : ''}`}
              data-filter="adult"
              onClick={() => setFilter('adult')}
            >
              Взрослые
            </button>
            <button
              className={`filter-btn px-4 py-2 text-lg font-semibold border-transparent hover:text-primary ${filter === 'special' ? 'active' : ''}`}
              data-filter="special"
              onClick={() => setFilter('special')}
            >
              Особенные
            </button>
          </div>
        </div>
      </section>

      {/* Cats Grid Section */}
      <section className="cats-grid-section">
        <div className="container">
          <div className="cats-grid">
            {filteredCats.map(cat => (
              <div key={cat.id} className="cat-card">
                <div className="cat-image-container">
                  <img src={cat.image} alt={cat.name} className="cat-image" />
                </div>
                <div className="cat-info">
                  <div className="cat-header">
                    <h3>{cat.name}</h3>
                    <span className="cat-age">{cat.age}</span>
                  </div>
                  <p className="cat-description">{cat.description}</p>
                  <div className="cat-traits">
                    {cat.traits.map((trait, index) => (
                      <span key={index} className="trait-badge">{trait}</span>
                    ))}
                  </div>
                  <button className="adopt-btn">Забрать домой</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="text-center">
            <h3 className="stats-heading">Уже нашли друга?</h3>
            <p className="stats-subheading">Мы рады каждому успешному усыновлению! Вот статистика за последний год:</p>
            <div className="stats-grid">
              <div>
                <div className="stat-number">154</div>
                <div className="stat-label">Котиков обрели дом</div>
              </div>
              <div>
                <div className="stat-number">98%</div>
                <div className="stat-label">Успешных адаптаций</div>
              </div>
              <div>
                <div className="stat-number">32</div>
                <div className="stat-label">Волонтера помогают</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default CatsPage;