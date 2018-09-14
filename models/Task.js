const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const TaskSchema = new Schema({
  body: [{
    type: String,
    required: true
  }],
  completed: {
    type: Boolean,
    default: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//Create collection and add schema and create collection 
mongoose.model('tasks', TaskSchema);