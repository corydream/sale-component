var express = require("express")
var bodyParser = require("body-parser")
var fs = require("fs")
var path = require("path")


// import { platformServer, renderModuleFactory } from '@angular/platform-server'
// import { enableProdMode } from '@angular/core'
// import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory'
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));


// app.engine('html', (_, options, callback) => {
//     const opts = { document: template, url: options.req.url };

//     renderModuleFactory(AppServerModuleNgFactory, opts)
//         .then(html => callback(null, html));
// });



// app.get('*.*', express.static(join(__dirname, 'dist')));

// app.get('*', (req, res) => {
//     res.render('index', { req });
// });


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});




var server = app.listen(3304, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});