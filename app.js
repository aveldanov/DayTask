const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser= require('body-parser');
const methodOverride = require('method-override');
//NEW 
var handlebars = require('handlebars'),
    groupBy = require('handlebars-group-by'); 


//Load user model - should be above PASSPORT
require('./models/User');
require('./models/Task');


//Passport config
require('./config/passport')(passport);



//Load routes
const auth = require('./routes/auth');
const index = require('./routes/index');
const tasks = require('./routes/tasks');
const team = require('./routes/team');



//Load Keys file route

const keys = require('./config/keys');

// Handlebars Helpers
const {formatDate} = require('./helpers/hbs');
const exhb = exphbs.create({extname:'hbs'});
groupBy.register(exhb.handlebars,{});



//Map global promises
mongoose.Promise = global.Promise;

//Mongoose connect
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


const app = express();

//Body Parser Middleware to deal with POST Method
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middleware method override for put and delete requests

app.use(methodOverride('_method'));


//Handlebars - Middleware

app.engine('handlebars', exphbs({
  helpers: {
    formatDate: formatDate,
  },
  defaultLayout:'main'
}));
app.set('view engine', 'handlebars');
app.set('html', 'exhb.engine');





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
app.use('/tasks', tasks);
app.use('/team', team);




const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});