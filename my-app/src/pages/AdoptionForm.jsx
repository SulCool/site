// src/pages/AdoptionForm.jsx
import { useState } from 'react';
import './AdoptionForm.css';

function AdoptionForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    housingType: '',
    hasPets: '',
    experience: '',
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
    console.log('Form submitted:', formData);
  };

  return (
    <main className="adoption-form">
      <h1>Забрать котика домой</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Ваше имя
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Телефон
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Адрес проживания
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Тип жилья
          <select name="housingType" value={formData.housingType} onChange={handleChange} required>
            <option value="">Выберите тип</option>
            <option value="Квартира">Квартира</option>
            <option value="Частный дом">Частный дом</option>
            <option value="Таунхаус">Таунхаус</option>
          </select>
        </label>
        <fieldset>
          <legend>Есть ли у вас домашние животные?</legend>
          <label>
            <input type="radio" name="hasPets" value="Да" onChange={handleChange} required /> Да
          </label>
          <label>
            <input type="radio" name="hasPets" value="Нет" onChange={handleChange} required /> Нет
          </label>
        </fieldset>
        <label>
          Опыт содержания кошек
          <textarea name="experience" value={formData.experience} onChange={handleChange} />
        </label>
        <label>
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} required />
          Я согласен на обработку персональных данных и ознакомлен с договором о передаче животного
        </label>
        <button type="submit">Отправить заявку</button>
      </form>
    </main>
  );
}

export default AdoptionForm;