
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./src/server/shelter.db', (err) => {
  if (err) {
    console.error('Error connecting to SQLite:', err);
    return;
  }
  console.log('Connected to SQLite database');
});


db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS cats (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        age TEXT NOT NULL,
        type TEXT NOT NULL,
        description TEXT NOT NULL,
        traits TEXT NOT NULL,
        image TEXT NOT NULL
    )
    `);
  db.run(`
    CREATE TABLE IF NOT EXISTS adoption_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      address TEXT NOT NULL,
      housingType TEXT NOT NULL,
      hasPets TEXT NOT NULL,
      experience TEXT,
      agree BOOLEAN NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS donations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      amount REAL NOT NULL,
      purpose TEXT NOT NULL,
      name TEXT NOT NULL,
      agree BOOLEAN NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      message TEXT NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS volunteer_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      motivation TEXT NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
});


const initialCats = [
  {
    name: 'Борсик',
    age: '2 месяца',
    type: 'kitten',
    description: 'Активный котёнок с ярким характером, обожает играть с мячиками и лазить по шторам.',
    traits: JSON.stringify(['Любопытный', 'Игривый', 'Дружелюбный']),
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    name: 'Муся',
    age: '3 года',
    type: 'adult',
    description: 'Спокойная и ласковая кошка, идеально подходит для тихого дома. Любит спать на подоконнике.',
    traits: JSON.stringify(['Спокойная', 'Ласковая', 'Домашняя']),
    image: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    name: 'Симба',
    age: '5 лет',
    type: 'special',
    description: 'Слепой кот с золотым сердцем. Очень любит ласку и общение с людьми.',
    traits: JSON.stringify(['Милый', 'Контактный', 'Любопытный']),
    image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    name: 'Луна',
    age: '1 год',
    type: 'kitten',
    description: 'Нежная и игривая кошечка с мягкой шерстью. Обожает спать в обнимку с хозяином.',
    traits: JSON.stringify(['Нежная', 'Игривая', 'Ласковая']),
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    name: 'Рыжик',
    age: '4 года',
    type: 'adult',
    description: 'Яркий рыжий кот с независимым характером. Любит гулять на улице и охотиться за игрушками.',
    traits: JSON.stringify(['Независимый', 'Активный', 'Смелый']),
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    name: 'Тишка',
    age: '6 лет',
    type: 'special',
    description: 'Кот с тремя лапками, но это не мешает ему быть активным. Очень добрый и любит детей.',
    traits: JSON.stringify(['Добрый', 'Активный', 'Терпеливый']),
    image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    name: 'Мурка',
    age: '8 месяцев',
    type: 'kitten',
    description: 'Маленькая чёрная кошечка с зелёными глазами. Очень любопытная и любит исследовать всё вокруг.',
    traits: JSON.stringify(['Любопытная', 'Игривая', 'Милая']),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5aQxvTnjob-J9ak9Fhx1_shpxzNWhZA4lA&s'
  }
];

db.serialize(() => {
  db.run('DELETE FROM cats', (err) => {
    if (err) console.error('Error clearing cats table:', err);
    else console.log('Cleared cats table');
  });

  const stmt = db.prepare(`
    INSERT INTO cats (name, age, type, description, traits, image)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  initialCats.forEach((cat, index) => {
    stmt.run(
      cat.name,
      cat.age,
      cat.type,
      cat.description,
      cat.traits,
      cat.image,
      (err) => {
        if (err) {
          console.error(`Error inserting cat #${index + 1} (${cat.name}):`, err);
        } else {
          console.log(`Inserted cat #${index + 1}: ${cat.name}`);
        }
      }
    );
  });
  stmt.finalize();
});

app.get('/api/cats', (req, res) => {
  db.all('SELECT * FROM cats', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows.map(row => ({
      ...row,
      traits: JSON.parse(row.traits)
    })));
  });
});

app.post('/api/adoption', (req, res) => {
  const { name, phone, email, address, housingType, hasPets, experience, agree } = req.body;
  db.run(`
    INSERT INTO adoption_requests (name, phone, email, address, housingType, hasPets, experience, agree)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `, [name, phone, email, address, housingType, hasPets, experience, agree], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

app.post('/api/donation', (req, res) => {
  const { amount, purpose, name, agree } = req.body;
  db.run(`
    INSERT INTO donations (amount, purpose, name, agree)
    VALUES (?, ?, ?, ?)
  `, [amount, purpose, name, agree], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  db.run(`
    INSERT INTO contact_messages (name, email, phone, message)
    VALUES (?, ?, ?, ?)
  `, [name, email, phone, message], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

app.post('/api/volunteer', (req, res) => {
  const { name, phone, email, motivation } = req.body;
  db.run(`
    INSERT INTO volunteer_requests (name, phone, email, motivation)
    VALUES (?, ?, ?, ?)
  `, [name, phone, email, motivation], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});