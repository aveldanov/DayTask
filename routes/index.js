const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //res.send('WORKS');
  res.render('index/welcome');
});

/* router.get('/team', (req, res) => {
  res.send('TEAM');
}); */

module.exports = router;