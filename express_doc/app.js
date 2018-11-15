var express = require('express');
var markdown = require('markdown-js');
var fs = require('fs');
var markdown = require("markdown").markdown;
var glob = require('glob');



glob('../*(!node_modules)/**.md', function(err, files) {
    console.log(files)
    files.map(function(path) {
        console.log(path)
    })
})