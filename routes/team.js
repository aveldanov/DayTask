const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../helpers/auth');
const mongoose = require('mongoose');
const Task = mongoose.model('tasks');
const User = mongoose.model('users');



router.get('/', ensureAuthenticated, (req, res) => {
  Task.find({

  })
  .populate('user')
  .then(tasks =>{
    res.render('index/team',{
      tasks:tasks
    });

  });
});

module.exports = router;