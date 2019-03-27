const app = require('express')();
const PORT = 3000;
const routes = require('./routes');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`app running on port:${PORT}`);
})