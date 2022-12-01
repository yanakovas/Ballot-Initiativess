const React = require('react')

module.exports = function CardView ({title,text,level}) {
    return (
         <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0 card">
    <div className="col-md-8">
      <div className="card-body card-xl">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}.</p>
        <p className="card-text"><small className="text-muted">{level}</small></p>
        <button className='btn btn-primary'>Проголосовать</button>
      </div>
    </div>
  </div>
</div> 
    )
}