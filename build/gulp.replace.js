'use strict';
var through2 = require('through2');
var path = require('path');
var fs = require('fs');

module.exports = function(options) {
    return through2.obj(function(file, enc, cb) {
        var reGex = options.pattern || '';
        var instead = options.instead || '';
        if (reGex === '') {
            this.push(file)
            cb()
            return;
        }
        var str = file.contents.toString();
        var filePath = file.path;
        if (reGex.test(str)) {
            str = str.replace(reGex, function() {
                return instead
            })
            file.contents = new Buffer(str);
        }
        this.push(file)
        cb()
        return;
    })
}