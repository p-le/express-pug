const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path = require('path');
const Mailer = require('./libs/mailer');
const errorhandler = require('errorhandler');
const helmet = require('helmet');
const indexRouter = require('./routes/index');
const config = require('./config');

const app = express();
app.use(helmet())
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieParser())
  .use(cookieSession({
    secret: '2711',
    cookie: {
      maxAge: 3600000
    }
  }))
  .use(express.static(path.resolve(__dirname, 'public')));

if (process.env.NODE_ENV === 'dev') {
  app.use(errorhandler());
}

app.locals.mailer = new Mailer();

app.set('port', process.env.PORT || 8000)
  .set('view engine', 'pug')
  .set('views', path.resolve(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'Unimex Auto',
    config: config
  });
});

app.listen(app.get('port'), () => console.log(`App listening on ${app.get('port')}`));