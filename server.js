var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var meetupsController = require('./server/controllers/meetups-controller');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);

app.listen(80, function(){
    console.log('I\'m listening');
});