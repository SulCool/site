import { useState, useEffect, useRef } from 'react';
import './CatsPage.css';

function CatsPage() {
  const [cats, setCats] = useState([]);
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/cats')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        if (data.length > 0) {
          const firstCat = data[0]; 
          const restCats = data.slice(1); 
          const reorderedCats = [...restCats, firstCat]; 
          console.log('Reordered cats:', reorderedCats); 
          setCats(reorderedCats);
        } else {
          setCats(data);
        }
      })
      .catch(error => {
        console.error('Error fetching cats:', error);
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [filter]);

  const filteredCats = cats.filter(cat => {
    if (filter === 'all') return true;
    return cat.type === filter;
  });

  console.log('Filtered cats:', filteredCats); 
  console.log('Number of filtered cats:', filteredCats.length); 

  return (
    <main className="cats-page">
      <h1>Наши котики ждут дома</h1>
      {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
      <section className="filter-section">
        <div className="container">
          <div className="flex space-x-2 border-b border-gray-300">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Все
            </button>
            <button
              className={`filter-btn ${filter === 'kitten' ? 'active' : ''}`}
              onClick={() => setFilter('kitten')}
            >
              Котята
            </button>
            <button
              className={`filter-btn ${filter === 'adult' ? 'active' : ''}`}
              onClick={() => setFilter('adult')}
            >
              Взрослые
            </button>
            <button
              className={`filter-btn ${filter === 'special' ? 'active' : ''}`}
              onClick={() => setFilter('special')}
            >
              Особенные
            </button>
          </div>
        </div>
      </section>
      <section className="cats-grid-section">
        <div className="container">
          <div className="cats-grid" ref={gridRef}>
            {filteredCats.length === 0 && !error && <p>Загрузка котиков...</p>}
            {filteredCats.map(cat => {
              console.log(`Rendering cat: ${cat.name} (ID: ${cat.id})`); 
              return (
                <div key={cat.id} className="cat-card" style={{ border: '' }}>
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
                    <button
                      className="adopt-btn"
                      onClick={() => window.location.href = '/adoption'}
                    >
                      Забрать домой
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="stats-section">
        <div className="container">
          <div className="text-center">
            <h3 className="stats-heading">Уже нашли друга?</h3>
            <p className="stats-subheading">
              Мы рады каждому успешному усыновлению! Вот статистика за последний год:
            </p>
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
    </main>
  );
}

export default CatsPage;