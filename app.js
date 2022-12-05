require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');

const authRouter = require('./routes/pages/auth.routes');
const mainRouter = require('./routes/pages/main.routes');
const filterRouter = require('./routes/pages/main.routes');
const initiativeApiRouter = require('./routes/api/initiative.routes');

const app = express();
  

expressConfig(app);

app.use(mainRouter);
<<<<<<< HEAD
=======
app.use('/api', initiativeApiRouter);
app.use('/api', filterRouter);

>>>>>>> db71da2f9a1d3160651811e3464317835acd1bd7
app.use('/auth', authRouter);
app.use(filterRouter);
app.use('/api', initiativeApiRouter);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
