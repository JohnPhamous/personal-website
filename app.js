var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/projects', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/projects.html'))
});

app.get('/emailsignatures', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/emailsignatures.html'))
});

app.listen(process.env.PORT || 3000, function(){
  console.log('Server started');
});



