const { useContext } = require('react');
const React = require('react');
const LocalsContext = require('../middlewares/LocalsContext');

const ButtonForCreate = require('./ButtonForCreate')
const CreateInitiative = require('./CreateInitiative');

function Navbar() {
  const { user } = useContext(LocalsContext)
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary" style={{boxSizing:"border-box"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Твой вклад
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            
            {!user && (
              <li className="nav-item">
                <a className="nav-link" href="/auth/login">
                  Вход
                </a>
              </li>
            )}
            {!user && (
              <li className="nav-item">
                <a className="nav-link" href="/auth/register">
                  Регистрация
                </a>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <a className="nav-link" href="/auth/logout">
                  Выйти
                </a>
              </li>
            )}
            {user && (
              <span>
              <ButtonForCreate/>
              <CreateInitiative/>
              <script src="/js/createInitiative.js" defer />
              </span>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = Navbar;
