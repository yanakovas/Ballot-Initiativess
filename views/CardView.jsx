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
            <div id='for'>
            <button className="btn btn-primary">За</button>
            </div>
            <div id='against'>
            <button className="btn btn-primary">Против</button>
            </div>
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
    </div>
  )
}
