const React = require('react');

function CreateInitiative() {
  return (

<div className="modal fade" id="exampleModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl" style={{width:'800px'}} >
    <div className="modal-content">
      <div className="modal-header sm">
        <h1 className="modal-title fs-6" id="exampleModalLabel">Создание инициативы:</h1>
        <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        
      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label form-label-sm">Заголовок:</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Описание:</label>
    <textarea  className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Дата завершения:</label>
    <input type="date" className="form-control" id="exampleInputPassword1"/>
  </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Отмена</button>
        <button type="button" className="btn btn-primary btn-sm">Создать</button>
      </div>
    </div>
  </div>
</div>

  );
}

module.exports = CreateInitiative;
