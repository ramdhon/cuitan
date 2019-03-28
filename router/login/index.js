const login = require('express').Router();

login.get('/', (req, res) => {
  res.render('../views/login.ejs');
})

login.post('/', (req, res) => {
  res.send(req.body);
})

module.exports = login;