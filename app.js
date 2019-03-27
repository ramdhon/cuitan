const bodyParser = require('body-parser');
const express = require('express');

const port = 8080;
const app = express();

const index = require('./routes/index');
const cuit = require('./routes/cuit');
const comment = require('./routes/comment');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/comments', comment)
app.use('/cuits', cuit);
app.use('/', index)

app.listen(port, ()=>{
  console.log('server is running')
})
