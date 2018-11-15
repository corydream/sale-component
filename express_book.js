var express = require("express")
var session = require("express-session")
var winston = require("winston")
var expressWinston = require("express-winston")
var morgan = require("morgan")
var bodyParser = require("body-parser")
var fs = require("fs")
var path = require("path")


var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '_book')));

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('请访问 http://%s:%s', host, port);
});