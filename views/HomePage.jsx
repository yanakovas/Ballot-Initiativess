const React = require('react');
const Layout = require('./Layout');
const Filter = require('./Filter');

// React-компонент
function HomePage({ user }) {
  return (
    <Layout title="Home Page" user={user}>
      <h1>My Web Site</h1>

      <Filter />

      <a href="/notes">notes</a>
      <br />

      <a href="#" id="how-many-notes">
        Сколько у меня заметок?
      </a>

      <script src="/js/homePage.js" defer />
    </Layout>
  );
}

module.exports = HomePage;
