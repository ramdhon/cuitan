const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');

const app = express();
const port = 8080;

const index = require('./routes/index');
const user = require('./routes/user');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use('/users', user);
app.use('/', index);

app.listen(port, () => {
  console.log('server is running');
})
