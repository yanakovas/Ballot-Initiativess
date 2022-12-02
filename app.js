require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');
const authRouter = require('./routes/pages/auth.routes');
const mainRouter = require('./routes/pages/main.routes');
const filterRouter = require('./routes/pages/main.routes');

const app = express();

expressConfig(app);

app.use(mainRouter);
app.use(filterRouter);
app.use('/auth', authRouter);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
