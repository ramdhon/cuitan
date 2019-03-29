const express = require('express') ;
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

const parseErrorMessage = require('./helpers/parseErrorMessage');

app.locals.parseErrorMessage = parseErrorMessage;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session({
  secret: 'cuit-cuitan'
}))

app.use('/', router);

app.listen(PORT, () => {
  console.log(`app running on port:${PORT}`);
})