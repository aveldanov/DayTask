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

router.get( '/google/callback', 
    passport.authenticate( 'google', { 
        successRedirect: '/team',
        failureRedirect: '/'
}));

module.exports = router;