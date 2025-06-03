import { useState } from 'react';
import './DonationForm.css';

function DonationForm() {
  const [formData, setFormData] = useState({
    amount: '',
    purpose: 'Любая помощь',
    name: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation submitted:', formData);
  };

  return (
    <main className="donation-form">
      <h1>Помощь приюту</h1>
      <form onSubmit={handleSubmit}>
        <h2>Выберите сумму пожертвования или укажите свою:</h2>
        <div className="amount-options">
          <button type="button" onClick={() => setFormData({ ...formData, amount: '300' })}>
            300₽
          </button>
          <button type="button" onClick={() => setFormData({ ...formData, amount: '500' })}>
            500₽
          </button>
          <button type="button" onClick={() => setFormData({ ...formData, amount: '1000' })}>
            1000₽
          </button>
          <button type="button" onClick={() => setFormData({ ...formData, amount: '1500' })}>
            1500₽
          </button>
        </div>
        <label>
          Другая сумма
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Введите сумму"
            required
          />
        </label>
        <label>
          Выберите цель пожертвования:
          <select name="purpose" value={formData.purpose} onChange={handleChange} required>
            <option value="Любая помощь">Любая помощь</option>
            <option value="Корма для животных">Корма для животных</option>
            <option value="Лечение животных">Лечение животных</option>
            <option value="Строительство вольеров">Строительство вольеров</option>
            <option value="Приобретение медикаментов">Приобретение медикаментов</option>
          </select>
        </label>
        <label>
          Ваше имя
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} required />
          Я согласен на обработку персональных данных
        </label>
        <button type="submit">Пожертвовать</button>
      </form>
    </main>
  );
}

export default DonationForm;