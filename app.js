const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');


//Load user model - should be above PASSPORT
require('./models/User');


//Passport config
require('./config/passport')(passport);



//Load routes
const auth = require('./routes/auth');
const index = require('./routes/index');
const team = require('./routes/team');
const tasks = require('./routes/tasks');


//Load Keys file route

const keys = require('./config/keys');

//Map global promises
mongoose.Promise = global.Promise;

//Mongoose connect
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


const app = express();

//Handlebars - Middleware

app.engine('handlebars', exphbs({
  defaultLayout:'main'
}))
app.set('view engine', 'handlebars');


//Use routes (anything that goes to /auth -> goes to auth route)

//Should be ABOVE the use_auth route
app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));



//Passport middleware

app.use(passport.initialize());
app.use(passport.session());
//Set globar vars

app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

//Set static folder 
app.use(express.static(path.join(__dirname, 'public')));
//Use routes
app.use('/auth', auth);
app.use('/', index);
app.use('/team', team);
app.use('/tasks', team);




const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});