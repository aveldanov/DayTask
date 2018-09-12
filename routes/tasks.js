const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../helpers/auth');
const mongoose = require('mongoose');
const Task = mongoose.model('tasks');
const User = mongoose.model('users');

//

router.get('/', ensureAuthenticated, (req, res) => {
  Task.find({

  })
  .then(tasks =>{
    res.render('index/tasks', {
      tasks:tasks
    });

  });

});

//Process a task
router.post('/', (req,res)=>
{
  //res.send('POSTED');
  /* console.log(req.body);
  res.send('posted'); */

  const newTask = {
    body: req.body.body,
    user: req.user.id
  }

  //create a task
  new Task(newTask)
  .save()
  .then(task => {
    res.redirect('/tasks');
  })

});

module.exports = router;