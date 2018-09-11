const express = require('express');
const router = express.Router();
const passport = require('passport');

// /auth/google/
/* router.get('/google', (req, res) => {
  res.send('auth');
}); */

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']

}));

router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  }));

/*   router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/team');
  }); */

router.get('/verify', (req,res)=>{
  if(req.user){
    console.log(req.user);
  }else{
    console.log('Not Auth');
  }
});

router.get('/logout', (req,res)=>{
  req.logout();
  res.redirect('/');
});


module.exports = router;