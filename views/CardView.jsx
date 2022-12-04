const React = require('react');

module.exports = function CardView({ id, title, text, level }) {
  return (
    <div className="topicList" data-id={id}>
      <div className="card center">
        <div className="front">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}.</p>
            <p className="card-text">
              <small className="text-muted">{level}</small>
            </p>
            <button className="btn btn-primary">Проголосовать</button>
          </div>
        </div>

        <div className="back">
          <div className="back-content center">
            <p>Вы проголосовали ЗА</p>
          </div>
          <button className="btn btn-primary">Посмотреть содержимое</button>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0 card">
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}.</p>
        <p className="card-text"><small className="text-muted">{level}</small></p>
        <button className='btn btn-primary'>Проголосовать</button>
      </div>
    </div>
  </div>
</div> */
}
