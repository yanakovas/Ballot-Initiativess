const React = require('react');

// !!! data-target должен иметь значение селектора будущего элемента модального окна

function ButtonForCreate() {
  return (
<button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Создать инициативу
</button>
);
}

module.exports = ButtonForCreate;
