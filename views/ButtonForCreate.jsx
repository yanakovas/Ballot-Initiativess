const React = require('react');

// !!! data-target должен иметь значение селектора будущего элемента модального окна

function ButtonForCreate() {
  return (
        <button type="button" action="submit" className="btn btn-link btn-sm nav-item nav-link"  data-bs-toggle="modal" data-bs-target="#createModal">
      Создать инициативу
    </button>
);
}

module.exports = ButtonForCreate;
