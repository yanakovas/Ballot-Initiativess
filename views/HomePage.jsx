const React = require('react');
const CardView = require('./CardView');
const Layout = require('./Layout');
const Filter = require('./Filter');

// React-компонент

function HomePage({ initiatives }) {
  return (
    <Layout title="Home Page">
      <h1>Все инициативы</h1>
      <Filter />
      <div className="continer">
        <div id="cards" className="card">
          {initiatives.map((initiative) => (
            <CardView
              key={initiative.id}
              id={initiative.id}
              title={initiative.title}
              text={initiative.text}
              level={initiative.level}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = HomePage;
