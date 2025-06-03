import { useState } from 'react';
import './CatsPage.css';

const cats = [
  {
    id: 1,
    name: 'Барсик',
    age: '2 месяца',
    type: 'kitten',
    description: 'Очень активный и любознательный котенок, обожает играть и лазить по деревьям. Идеален для семьи с детьми.',
    traits: ['Любопытный', 'Игривый', 'Дружелюбный'],
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    id: 2,
    name: 'Муся',
    age: '3 года',
    type: 'adult',
    description: 'Спокойная и ласковая кошка, мечтающая о тихом доме. Отлично ладит с котами и людьми, любит подолгу спать.',
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

  const getTypeLabel = (type) => {
    switch(type) {
      case 'kitten': return 'Котенок';
      case 'adult': return 'Взрослая';
      case 'special': return 'Особенный';
      default: return '';
    }
  };

  return (
    <div className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-6">Наши котики ждут дома</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Каждое из этих животных прошло медицинский осмотр и готово стать вашим компаньоном!</p>
        
        <div className="mb-8 flex justify-center">
          <div className="flex space-x-2 border-b border-gray-300">
            <button 
              className={`filter-btn px-4 py-2 text-lg font-semibold border-b-2 ${filter === 'all' ? 'border-primary text-primary' : 'border-transparent'}`}
              onClick={() => setFilter('all')}
            >
              Все
            </button>
            <button 
              className={`filter-btn px-4 py-2 text-lg font-semibold border-b-2 ${filter === 'kitten' ? 'border-primary text-primary' : 'border-transparent'}`}
              onClick={() => setFilter('kitten')}
            >
              Котята
            </button>
            <button 
              className={`filter-btn px-4 py-2 text-lg font-semibold border-b-2 ${filter === 'adult' ? 'border-primary text-primary' : 'border-transparent'}`}
              onClick={() => setFilter('adult')}
            >
              Взрослые
            </button>
            <button 
              className={`filter-btn px-4 py-2 text-lg font-semibold border-b-2 ${filter === 'special' ? 'border-primary text-primary' : 'border-transparent'}`}
              onClick={() => setFilter('special')}
            >
              Особенные
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCats.map(cat => (
            <div key={cat.id} className="cat-card bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2">
              <img src={cat.image} alt={cat.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{cat.name}</h3>
                    <div className="flex items-center mt-2">
                      <span className={`${cat.type === 'special' ? 'bg-accent' : 'bg-primaryLight'} text-white px-3 py-1 rounded-full text-sm`}>
                        {getTypeLabel(cat.type)}
                      </span>
                      <span className="ml-3 text-gray-600">{cat.age}</span>
                    </div>
                  </div>
                  <div className="text-primary">
                    <i className="fas fa-heart text-2xl"></i>
                  </div>
                </div>
                <p className="text-gray-600 my-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cat.traits.map((trait, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {trait}
                    </span>
                  ))}
                </div>
                <button className="mt-6 w-full bg-primary hover:bg-primaryDark text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300">
                  Забрать домой
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatsPage;