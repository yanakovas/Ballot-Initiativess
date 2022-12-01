require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');
const mainRouter = require('./routes/pages/main.routes')
// const cardRouter = require('./routes/pages/card.route')

const app = express();

expressConfig(app);


app.use('/',mainRouter);
// app.use('/cards',cardRouter)



app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
