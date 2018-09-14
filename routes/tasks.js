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
router.post('/', (req, res) => {
  //res.send('POSTED');
  /* console.log(req.body);
  res.send('posted'); */

  const newTask = {
    body: req.body.body,
    user: req.user.id
  }
  //console.log(newTask);

  //console.log(task);
  //console.log(req.body.body);
  //create a task
  /*   new Task(newTask)
      .save()
      .then(task => {
        res.redirect('/tasks');
      }) */



  /*   new Task(newTask)
      .save()
      .then(task => {
       // console.log(task);
        User.findByIdAndUpdate(
          req.user.id,
          {$push:{tasks:req.body.body}},
          (err,user)=>{
            if(err){
              console.log(err);
            }else{
              console.log(user);
            }
  
          }
        )
      }); */
  //console.log(newTask.body);
  //new Task(newTask)
  //.save()

 
 /* new Task(newTask)
  .save()
  .then(task =>{
    
  }); */


  Task.findOne({
    user: req.user.id,
  }) 




    .then(task => {
       if(task==null){
      new Task(newTask)
          .save()
          .then(task => {
            res.redirect('/tasks');
          })}else{ 






      // task.push(newTask);
      //console.log(task);
      const newTask = {
        body: req.body.body,
        user: req.user.id
      }
      //   console.log(newTask.body);
      task.body.push(newTask.body);
      console.log(task.body);

      task.save()
        .then(task => {
          res.redirect('/tasks');
        });
      //console.log(task);
      /*    const newTask = {
          body: req.body.body,
          user: req.user.id
        } 
         Task.update(
         
          {user:req.user.id},
          {$push: {body:task.body}},
         ) */


      //console.log(newTask.body);
        }


    })











});




















/*   new Task(newTask)
    .save()
    .then(task => {
      User.findByIdAndUpdate(req.user.id, {
        $push: { tasks: task }, function(err, user) {
          if (err) {
            next(err);
          } else {
            res.redirect(`/tasks`);
          }
        }
      }
 
      )
      console.log(req.user.id);
    }); */

module.exports = router;