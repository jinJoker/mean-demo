var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var meetupsController = require('./server/controllers/meetups-controller');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/meetups', meetupsController.create);

app.listen(3000, function(){
    console.log('I\'m listening');
});