const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const body_parser = require('body-parser');
const cookie_parser = require('cookie-parser');
const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();

app.use(helmet());

app.set('view engine', "pug");
app.use('/uploads', express.static('uploads'));

app.use(cookie_parser());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(middlewares.localsMiddleware);

app.use(routes.home, require('./routers/globalRouter'));
app.use(routes.users, require('./routers/userRouter'));
app.use(routes.videos, require('./routers/videoRouter'));

module.exports = app;