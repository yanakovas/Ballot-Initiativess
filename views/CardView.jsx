const React = require('react')

module.exports = function CardView ({title,text,level, id}) {
return (
<form id='frontForm' data-id={id}>
  <div id="cards">
    <div className="card center">
      <div className="front">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0 card border">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}.</p>
                <p className="card-text"><small className="text-muted">{level}</small></p>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                  <div className='buttons'>
                  <button type="submit" name='success' className="btn btn-success success">ЗА</button>
                  <button type="submit" name='against' className="btn btn-danger against">ПРОТИВ</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="back">
  <div className="back-content center">
    <p>
      Вы проголосовали 
    </p>
    <button className="btn btn-primary">Посмотреть содержимое</button>
  </div>
</div>
</div>
</div>
</form>
)
}