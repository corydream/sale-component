"use strict";

let fs = require('fs');
let pathUtil = require('path');
let less = require("less");

var rimraf = require('rimraf');
var through2 = require('through2');
var gutil = require('gulp-util');
var path = require('path');

let genDistPath = pathUtil.join(__dirname, '../src', '__temp_components', 'release');
let genPath = pathUtil.join(__dirname, '../src', '__temp_components');
let htmlFilePool = [];
let handledTemplateFileCount = 0;

let tsFileTester = /\.ts$/;
let stylesRegex = /styleUrls *:(\s*\[[^\]]*?\])/g;
let htmlRegex = /templateUrl *: ['"][.|\n]*(.*?)[.|\n]*['"]/g;
let stringRegex = /(['"])((?:[^\\]\\\1|.)*?)\1/g;
let htmlNumRegex = /template_(\d+)_html/g;

function getTsFile(path, parse) {
    try {
        if (fs.statSync(path).isFile() && tsFileTester.test(path)) {
            parse(path)
        } else if (fs.statSync(path).isDirectory() && path.indexOf(genDistPath) < 0) {
            // 单是一个文件夹且不是dist文件夹的情况下
            let paths = fs.readdirSync(path);
            paths.forEach(function (p) {
                getTsFile(pathUtil.join(path, p), parse);
            })
        }
    } catch (err) {
        throw err;
    }
}

function transformStyleUrls(path) {
    let content = fs.readFileSync(path);
    if (htmlRegex.test(content)) {
        let contentTemp = content.toString().replace(htmlRegex, function (match, urls) {
            return 'template:' + urls.replace(htmlRegex, function (match, quote, url) {
                htmlFilePool.push(pathUtil.join(pathUtil.dirname(path), url))
                let result = 'template_' + handledTemplateFileCount + '_html';
                handledTemplateFileCount += 1;
                return result;
            })
        })
        fs.writeFileSync(path, contentTemp);
    }
}

function transformTemplate(path) {
    let content = fs.readFileSync(path);
    if (htmlRegex.test(content)) {
        let contentTemp = content.toString().replace(htmlRegex, function (match, urls) {
            htmlFilePool.push(pathUtil.join(pathUtil.dirname(path), urls))
            let result = 'template_' + handledTemplateFileCount + '_html';
            handledTemplateFileCount += 1;
            return "template:" + result
        })
        fs.writeFileSync(path, contentTemp);
    }
}

function doneOne() {
    handledTemplateFileCount += 1;
    // 说明所有处理完成。
    if (handledTemplateFileCount === htmlFilePool.length) {
        writeBack();
    }
}

function writeBack() {
    console.log("将html写入组件");
    getTsFile(genPath, writeBackHtml);
    console.log('完成');
}

function writeBackHtml(path) {
    let content = fs.readFileSync(path);
    if (htmlNumRegex.test(content)) {
        let contentTemp = content.toString().replace(htmlNumRegex, function (match, index) {
            return '`' + htmlFilePool[index] + '`';
        });
        fs.writeFileSync(path, contentTemp);
    }
}

function processHtml() {
    let index = 0;
    while (index < htmlFilePool.length) {
        (function (index) {
            fs.readFile(htmlFilePool[index], function (e, data) {
                /* less.render(data.toString(), {
                    filename: htmlFilePool[index]
                }, function (e, output) {
                    htmlFilePool[index] = output.css.replace(/\\e/g, function (match, e) {
                        // 对content中的类似'\e630'中的\e进行处理
                        return '\\\\e';
                    }).replace(/\\E/g, function (match, e) {
                        // 对content中的类似'\E630'中的\E进行处理
                        return '\\\\E';
                    }).replace(/\\20/g, function (match, e) {
                        // 对content中的类似'\20'中的\20进行处理
                        return '\\\\20';
                    }).replace(/`/g, function (match, e) {
                        // 处理css中`符号
                        return "'";
                    });
                    doneOne();
                }) */
                htmlFilePool[index] = data.toString()
                doneOne();
            })
        })(index);
        index += 1
    }
}

function process() {
    // 把所有ts文件，引入的less文件的完整路径放到全局list里面, 并且对源文件进行占坑
    console.log('获取需要转化的html模版');
    getTsFile(genPath, transformTemplate);
    // 重置文件处理进度的计数器
    handledTemplateFileCount = 0;
    // 对list里面的每一个less文件进行翻译并触发css回写
    console.log("开始转化html");
   processHtml();
}

console.log('准备转好html');

module.exports = process;