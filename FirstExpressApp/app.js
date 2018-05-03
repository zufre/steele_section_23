var express = require("express");

var app = express();

app.get("/", function(req, res){
  res.send('Hi there');
});

app.get("/bye", function(req, res) {
  res.send('Good bye');
});

app.get('/dog', function(req, res) {
  console.log('some made a rquest to /dog')
  res.send('Miaw');
});

app.get('/r/:subredditName', function(req, res) {
  var subreddit = req.params.subredditName;
  res.send('WELCOME TO THE ' + subreddit.toUpperCase() + ' SUBREDDIT');
});


app.get('/r/:subredditName/comment/:id/:title', function(req, res) {
  console.log(req.params);
  res.send('Welcome to comments');
});

app.get('*', function(req, res) {

  res.send('You are a star!');
});



app.listen(3000, process.env.IP, function() {
  console.log('server has started');
});