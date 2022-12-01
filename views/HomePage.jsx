const React = require('react');
const CardView = require('./CardView');
const Layout = require('./Layout');

// React-компонент
function HomePage({ initiatives}) {
return (
<Layout title="Home Page">
<div id='cards'>
{initiatives.map((initiative) => (
  <div className='card'>
  <CardView key={initiative.id} title={initiative.title} text={initiative.text} level={initiative.level} />
  </div>
))}
</div>
</Layout>
)
}

module.exports = HomePage;