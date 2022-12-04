const React = require('react');
const Layout = require('../Layout');

function RegisterPage({ user }) {
  return (
    <Layout user={user}>
      <form id="register-form" action="/auth/register" method="POST">
        <div className="mb-3">
          <label htmlFor="InputFullname" className="form-label">
            ФИО
          </label>
          <input
            className="form-control"
            id="InputFullname"
            aria-describedby="loginHelp"
            name="fullname"
            placeholder="Введите ФИО"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label">
            Логин
          </label>
          <input
            className="form-control"
            id="exampleInputLogin1"
            aria-describedby="loginHelp"
            name="login"
            placeholder="Введите почту"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="password"
            placeholder="Введите пароль"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Повторный пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="passwordRepeat"
            placeholder="Введите повторно пароль"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Зарегистрироваться
        </button>
      </form>
    </Layout>
  );
}

module.exports = RegisterPage;
