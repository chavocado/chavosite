//dependencies
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//routes
var index = require('./routes/index');
//PORT SET HERE
app.set('port', process.env.PORT || 5000);

//serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//catchall
app.use('/', index);

//listen
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});
