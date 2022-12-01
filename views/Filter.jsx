const React = require('react');

function Filter() {
  return (
    <div>
      <h6>Фильтр</h6>
      <select
        className="form-select form-select-sm mb-2"
        aria-label="Default select example"
      >
        <option selected id="level">
          По уровню
        </option>
        <option value="Федеральный">Федеральный</option>
        <option value="Региональный">Региональный</option>
        <option value="Муниципальный">Муниципальный</option>
      </select>

      <select className="form-select form-select-sm mb-2">
        <option selected id="section">
          По разделу
        </option>
        <option value="Социальная">Социальная Защита</option>
        <option value="Транспорт и дороги">Транспорт и дороги</option>
        <option value="Образование и наука">Образование и наука</option>
        <option value="Здравоохранение">Здравоохранение</option>
      </select>

      <select className="form-select form-select-sm mb-2" id="status">
        <option selected>По статусу</option>
        <option value="Активный">Активный</option>
        <option value="Завершенный">Завершенный</option>
      </select>
    </div>
  );
}

module.exports = Filter;
