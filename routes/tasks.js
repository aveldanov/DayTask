const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../helpers/auth');



router.get('/', ensureAuthenticated, (req, res) => {
  res.render('index/tasks');
});

//Process a task
router.post('/', (req,res)=>
{
  res.send('POSTED')
});

module.exports = router;