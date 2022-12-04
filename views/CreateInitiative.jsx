const React = require('react');

function CreateInitiative() {
  return (
<form type = "submit" className = "createForm">
<div className="modal fade" id="createModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl" style={{width:'800px'}} >
    <div className="modal-content">
      <div className="modal-header sm">
        <h1 className="modal-title fs-6" >Создание инициативы:</h1>
        <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        
      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label form-label-sm">Заголовок:</label>
    <input type="text" className="form-control" required id="js-input-initiative-title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Описание:</label>
    <textarea  className="form-control" required id="js-input-initiative-text"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Уровень инициативы:</label>
    <select className="form-control" id="js-input-initiative-level">
    <option>Муниципальный</option>
    <option>Региональный</option>
    <option>Федеральный</option>
    </select>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Дата завершения:</label>
    <input type="date" className="form-control" required id="js-input-initiative-expire-date"/>
  </div>

      </div>
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary btn-sm js-create-initiative-button">Создать</button>
      </div>
    </div>
  </div>
</div>
</form>
  );
}

module.exports = CreateInitiative;
