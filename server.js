var express = require('express');
var path = require('path');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var app = express();
var port = 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'client')));

app.use('/', index);
app.use('api', tasks);

app.listen(port, function(){

    console.log('Server running on port 3000....');
} ); 