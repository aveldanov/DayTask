const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/',(req,res)=>{
  res.send('WORKS');
});

const port = process.env.PORT;

app.listen(port, ()=>{
  console.log(`Server started on port ${port}`);
});