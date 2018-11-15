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
let lessFilePool = [];
let handledLessFileCount = 0;

let tsFileTester = /\.ts$/;
let stylesRegex = /styleUrls *:(\s*\[[^\]]*?\])/g;
let stringRegex = /(['"])((?:[^\\]\\\1|.)*?)\1/g;
let lessNumRegex = /style_(\d+)_less/g;

let log4js = require('log4js');


function getTsFile(path, parse) {
    try {
        if (fs.statSync(path).isFile() && tsFileTester.test(path)) {
            parse(path)
        } else if (fs.statSync(path).isDirectory() && path.indexOf(genDistPath) < 0) {
            // 单是一个文件夹且不是dist文件夹的情况下
            let paths = fs.readdirSync(path);

            paths.forEach(function(p) {

                getTsFile(pathUtil.join(path, p), parse);
            })
        }
    } catch (err) {
        throw err;
    }
}

function transformStyleUrls(path) {
    let content = fs.readFileSync(path);
    if (stylesRegex.test(content)) {
        let contentTemp = content.toString().replace(stylesRegex, function(match, urls) {
            return "styles:" + urls.replace(stringRegex, function(match, quote, url) {
                lessFilePool.push(pathUtil.resolve(pathUtil.dirname(path), url))
                let result = 'style_' + handledLessFileCount + '_less';
                handledLessFileCount += 1;

                return result;
            })
        })
        fs.writeFileSync(path, contentTemp);
    }
}

function doneOne() {
    handledLessFileCount += 1;
    // 说明所有处理完成。
    if (handledLessFileCount === lessFilePool.length) {
        writeBack();
    }
}

function writeBack() {
    console.log("开始将css写入组件");
    getTsFile(genPath, writeBackCss);
    console.log('完成css写入');
}


log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');
const logger2 = log4js.getLogger('cheese2');

function writeBackCss(path) {
    let content = fs.readFileSync(path);
    if (lessNumRegex.test(content)) {
        let contentTemp = content.toString().replace(lessNumRegex, function(match, index) {
            return '`' + lessFilePool[index] + '`';
        });
        fs.writeFileSync(path, contentTemp);
    }
}

function processLess() {
    let index = 0;
    while (index < lessFilePool.length) {
        (function(index) {
            // debugger
            fs.readFile(lessFilePool[index], function(e, data) {
                logger2.error(lessFilePool[index])
                less.render(data.toString(), {
                    filename: lessFilePool[index]
                }, function(e, output) {
                    if (!output) {
                        logger.error(e)
                    }
                    lessFilePool[index] = output ? typeof output.css != 'undefined' && output.css.replace(/\\e/g, function(match, e) {
                        // 对content中的类似'\e630'中的\e进行处理
                        return '\\\\e';
                    }).replace(/\\E/g, function(match, e) {
                        // 对content中的类似'\E630'中的\E进行处理
                        return '\\\\E';
                    }).replace(/\\20/g, function(match, e) {
                        // 对content中的类似'\20'中的\20进行处理
                        return '\\\\20';
                    }).replace(/`/g, function(match, e) {
                        // 处理css中`符号
                        return "'";
                    }) : '';

                    doneOne();
                })
            })
        })(index);
        index += 1
    }
}

function process() {
    // 把所有ts文件，引入的less文件的完整路径放到全局list里面, 并且对源文件进行占坑
    getTsFile(genPath, transformStyleUrls);
    // 重置文件处理进度的计数器
    handledLessFileCount = 0;
    // 对list里面的每一个less文件进行翻译并触发css回写
    console.log("开始将less转化为css");
    processLess();
}

console.log('准备转换less');
// 转换操作
module.exports = process;