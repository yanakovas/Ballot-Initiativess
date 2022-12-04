const React = require('react');
const CardView = require('./CardView');
const Layout = require('./Layout');
const Filter = require('./Filter');

// React-компонент

function HomePage({ initiatives}) {
return (
<Layout title="Home Page">
<h1>Все инициативы</h1>
<Filter />
<div id='initiatives'>
{initiatives.map((initiative) => (
  <CardView key={initiative.id} title={initiative.title} text={initiative.text} level={initiative.level} />
))}
</div>
</Layout>
)
}

      



module.exports = HomePage;