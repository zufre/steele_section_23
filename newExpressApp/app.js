var express = require('express');

var app = express();

app.get('/', function(req,res) {
  res.send('Hi there, welcome to my assignement!')
})

app.get('/pig', function(req,res) {
  res.send('The pig says \'Oink\'')
})

app.get('/cow', function(req,res) {
  res.send('The cow says \'Moo\'')
});

app.get('/dog', function(req,res) {
  res.send('The dog says \'Woof Woof!\'')
});

app.get('/repeat/:word/:num', function(req,res) {
  var number = parseInt(req.params.num);
  if (number <  1) {
    res.send('Sorry, page not found...What are you doing with your life?')
  }else{
    var string ='';
  for (var i = 1; i < number; i++) {
    string += req.params.word + ' ';
  }
  string += req.params.word;
  res.send(string);
}

  
  
});



app.get('*', function(req,res) {
  res.send('Sorry, page not found...What are you doing with your life?')
})


app.listen(3000, process.env.IP, function() {
  console.log('server has started');
});

