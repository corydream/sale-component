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

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'book/_book')));


// 将任何请求都把index.html发送给前端，路由控制交给前端
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});




var server = app.listen(3300, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('请访问 http://%s:%s', host, port);
});