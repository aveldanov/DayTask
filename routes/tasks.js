const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../helpers/auth');
const mongoose = require('mongoose');
const Task = mongoose.model('tasks');
const User = mongoose.model('users');

//

router.get('/', ensureAuthenticated, (req, res) => {
  Task.find({
    user: req.user.id
  })
    .then(tasks => {
      console.log(tasks);
      res.render('index/tasks', {
        tasks: tasks
      });

    });

});

//Process a task
router.post('/add', (req, res) => {
  //res.send('POSTED');
  /* console.log(req.body);
  res.send('posted'); */

  const newTask = {
    body: req.body.body,
    user: req.user.id
  }


    new Task(newTask)
      .save()
      .then(task => {
        res.redirect('/tasks');
      });



  //Delete Story

  router.delete('/:id', (req, res) => {
    res.send('delete');
    console.log(req.params.id);
    /*Task.remove({_id:req.params.id})
    .then(()=>{
      res.redirect('/tasks');
    }) */

  });




});





module.exports = router;