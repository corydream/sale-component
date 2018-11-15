'use strict';
var through2 = require('through2');
var path = require('path');
var fs = require('fs');

module.exports = function(options) {
    return through2.obj(function(file, enc, cb) {
        let htmlRegex = /templateUrl *: ['"][.|\n]*(.*?)[.|\n]*['"]/g;
        var str = file.contents.toString();
        var crentPath = file.path;
        var tempPath = ''
        var _this = this;
        if (htmlRegex.test(str)) {
            var contentTemp = str.replace(htmlRegex, function(match, urls) {
                    tempPath = path.join(path.dirname(crentPath), urls);
                    let result = 'template__html';
                    return "template:" + result
                })
                // 获取模版，替换原来的文档
            fs.readFile(tempPath, function(e, data) {
                contentTemp = contentTemp.replace(/template__html/, function(match, index) {
                    return '`' + data.toString() + '`';
                });
                file.contents = new Buffer(contentTemp);
                _this.push(file)
                process.nextTick(cb);
            })

        } else {
            this.push(file)
            cb()
        }

        return;

    })
}