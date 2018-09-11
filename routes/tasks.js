const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../helpers/auth');



router.get('/', ensureAuthenticated, (req, res) => {
  res.render('index/tasks');
});

module.exports = router;