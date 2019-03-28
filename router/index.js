const router = require('express').Router();
const profiles = require('./profiles');


router.get('/', (req, res) => {
  req.session.username = 'ramdhon';
  console.log(req.session);
  res.render('../views');
})

router.use('/profiles', profiles);


module.exports = router;