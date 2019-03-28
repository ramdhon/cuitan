const router = require('express').Router();
const profiles = require('./profiles');

const login = require('./login');
const register = require('./register');


router.get('/', (req, res) => {
  // req.session.username = 'ramdhon';
  // console.log(req.session);
  res.render('../views');
})

router.use('/profiles', profiles);
router.use('/login', login);
router.use('/register', register);

module.exports = router;