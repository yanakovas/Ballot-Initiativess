const React = require('react')

module.exports = function CardView ({title,text,level}) {
return (
<div id="cards">
  <div className="topicList">
    <div className="card center">
      <div className="front">
        {/* <img id="front" src="/image/front.jpg" alt="" /> */}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}.</p>
          <p className="card-text"><small className="text-muted">{level}</small></p>
          <button className='btn btn-primary'>Проголосовать</button>
        </div>
      </div>

      <div className="back">
        {/* <img id="back" src="/image/back.jpg" alt="" /> */}
        <div className="back-content center">
          <p>
            Вы проголосовали ЗА
          </p>
        </div>
        <button className="btn btn-primary">Посмотреть содержимое</button>
      </div>
    </div>
  </div>
</div>
)
}
