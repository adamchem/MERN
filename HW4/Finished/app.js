var express = require('express');
var fs = require('fs');

var app = express();
var file1 = fs.readFileSync(__dirname + '/Web.html', 'utf8');
var file2 = fs.readFileSync(__dirname + '/Web_forn.html', 'utf8');
var err404 = fs.readFileSync(__dirname + '/err404.html', 'utf8');
var port = process.env.PORT || 3000;

app.use('/pic', express.static(__dirname + '/pic'));
app.use('/css', express.static(__dirname + '/css'));

app.get('/', function(req, res) {
	res.send(file1);
});

app.get('/form', function(req, res) {
	res.send(file2);
});

app.get('*', function(req, res) {
	res.send(err404);
});

app.listen(port);