var express = require('express');
var app= express();
var apiController = require('./src/controller/apiController');
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname+'/public'));
app.set('view engine', 'ejs');

apiController(app); 
app.listen(port);
