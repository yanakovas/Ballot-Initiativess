const authRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');
const LoginPage = require('../../views/auth/LoginPage');
const RegisterPage = require('../../views/auth/RegisterPage');

module.exports = authRouter;
