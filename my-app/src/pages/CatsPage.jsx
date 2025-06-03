import './CatsPage.css';

const cats = [
  {
    name: 'Барсик',
    age: '2 месяца',
    type: 'Котенок',
    description: 'Очень активный и любознательный котенок, обожает играть и лазить по деревьям. Идеален для семьи с детьми.',
    traits: ['Любопытный', 'Игривый', 'Дружелюбный'],
    image: 'barsik.jpg',
  },
  {
    name: 'Муся',
    age: '3 года',
    type: 'Взрослая',
    description: 'Спокойная и ласковая кошка, мечтающая о тихом доме. Отлично ладит с котами и людьми, любит подолгу спать.',
    traits: ['Спокойная', 'Ласковая', 'Домашняя'],
    image: 'musya.jpg',
  },
  {
    name: 'Симба',
    age: '5 лет',
    type: 'Особенный',
    description: 'Слепой кот с золотым характером. Несмотря на особенности, Симба активен, любит играть и общаться.',
    traits: ['Милый', 'Контактный', 'Любопытный'],
    image: 'simba.jpg',
  },
];

function CatsPage() {
  return (
    <main className="cats-page">
      <h1>Наши котики ждут дома</h1>
      <p>Каждое из этих животных прошло медицинский осмотр и готово стать вашим компаньоном!</p>
      <div className="filters">
        <button>Все</button>
        <button>Котята</button>
        <button>Взрослые</button>
        <button>Особенные</button>
      </div>
      <div className="cats-grid">
        {cats.map((cat, index) => (
          <div key={index} className="card">
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
            <p>{cat.type}, {cat.age}</p>
            <p>{cat.description}</p>
            <ul>
              {cat.traits.map((trait, i) => (
                <li key={i}>{trait}</li>
              ))}
            </ul>
            <a href="/adoption" className="btn">Забрать домой</a>
          </div>
        ))}
      </div>
      <button className="show-more">Показать еще котиков</button>
    </main>
  );
}

export default CatsPage;