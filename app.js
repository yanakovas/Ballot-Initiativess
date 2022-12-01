require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');
const authRouter = require('./routes/pages/auth.routes');

const app = express();

expressConfig(app);

app.use('/auth', authRouter);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
