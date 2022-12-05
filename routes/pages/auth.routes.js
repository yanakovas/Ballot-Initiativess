const authRouter = require('express').Router();
const bcrypt = require('bcrypt');

const {User} = require('../../db/models')

const LoginPage = require('../../views/auth/LoginPage');
const RegisterPage = require('../../views/auth/RegisterPage');

authRouter.get('/login', (req, res) => {
  res.renderComponent(LoginPage);
});

authRouter.post('/login', async (req, res) => {

  const user = User.findOne({

  const user = await User.findOne({
    where: { login: req.body.login },
  });

  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    req.session.userId = user.id
    res.redirect('/')
  }
});
});

authRouter.get('/register', async (req, res) => {
  res.renderComponent(RegisterPage);
});

authRouter.post('/register', async (req, res) => {
  const user = await User.findOne({
    where: { login: req.body.login.trim() },
  });

  if (user) {
    return res.status(420).send('Такой пользователь уже существует');
  }

  if (req.body.password !== req.body.passwordRepeat) {
    return res.status(420).send('Пароли не совпадают');
  }

  const newUser = await User.create({
    full_name: req.body.fullname.trim(),
    login: req.body.login.trim(),
    password: await bcrypt.hash(req.body.password.trim(), 10),
  });

  req.session.userId = newUser.id;
  res.redirect('/');
});

authRouter.get('/logout', async (req, res) => {
  req.session.destroy((error) => {
    if (error) console.error(error);
    else {
      res.clearCookie('user_sid');
      res.redirect('/');
    }
  });
});

module.exports = authRouter;
