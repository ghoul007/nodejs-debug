var express = require('express');
var expressHandlebars = require('express-handlebars');
var http = require('http');

var PORT = 8000;


var app = express();
app.engine('html', expressHandlebars());
app.set('view engine', 'html');
app.set('views', __dirname);
app.get('/', function(req, res) {
    res.render('index', {message: "Hello ghoul"});
});

http.Server(app).listen(PORT, function() {
    console.log("HTTP server listening on port %s", PORT);
});