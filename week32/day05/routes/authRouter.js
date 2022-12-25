const { Router } = require('express');
const { signUp, login, logout } = require('../controllers/authController');
const authRouter = new Router()

authRouter.post('/signup', signUp);
authRouter.post('/login',login);
authRouter.post('/logout',logout);


module.exports = authRouter;
