const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('../views');
})

module.exports = routes;