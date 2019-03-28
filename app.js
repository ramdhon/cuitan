const express = require('express') ;
const app = express();
const PORT = 3000;
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');

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