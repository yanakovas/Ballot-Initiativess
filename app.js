require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');
const mainRouter = require('./routes/pages/main.routes')

const app = express();

expressConfig(app);

// подключаем маршрутизацию
app.use(mainRouter);
// app.use('/notes', notesRouter);
// app.use('/auth', authRouter);
// app.use('/api/notes', notesApiRouter);
// app.use('/api/auth', authApiRouter);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
