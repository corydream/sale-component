'use strict'
var rimraf = require('rimraf')
var through2 = require('through2')
var gutil = require('gulp-util')
var path = require('path')
var fs = require('fs')
var less = require('less')

module.exports = function (options) {
  return through2.obj(function (file, enc, cb) {
    let stylesRegex = /styleUrls *:(\s*\[[^\]]*?\])/g
    let stringRegex = /(['"])((?:[^\\]\\\1|.)*?)\1/g
    let lessNumRegex = /style_(\d+)_less/g

    var str = file.contents.toString()
    var crentPath = file.path
    var tempPath = []
    var _this = this
    if (stylesRegex.test(str)) {
      var contentTemp = str.replace(stylesRegex, function (match, urls) {
        var handledLessFileCount = 0
        return 'styles:' + urls.replace(stringRegex, function (match, quote, url) {
            tempPath.push(path.join(path.dirname(crentPath), url))
            let result = 'style_' + handledLessFileCount + '_less'
            handledLessFileCount++
            return result
          })
      })
      // 获取less字符串，并且用less处理，然后替换原来的文档的标记
      // fs.readFile(tempPath, function(e, data) {
      //     contentTemp = contentTemp.replace(/template__html/, function(match, index) {
      //         return '`' + data.toString() + '`'
      //     })
      //     file.contents = new Buffer(contentTemp)
      //     _this.push(file)
      //     process.nextTick(cb)
      // })

      var index = 0
      var lessComplete = 0

      while (index < tempPath.length) {
        (function (index) {
          // debugger
          fs.readFile(tempPath[index], function (e, data) {
            less.render(data.toString(), {
              filename: tempPath[index]
            }, function (e, output) {
              var text = output.css.replace(/\\e/g, function (match, e) {
                // 对content中的类似'\e630'中的\e进行处理
                return '\\\\e'
              }).replace(/\\E/g, function (match, e) {
                // 对content中的类似'\E630'中的\E进行处理
                return '\\\\E'
              }).replace(/\\20/g, function (match, e) {
                // 对content中的类似'\20'中的\20进行处理
                return '\\\\20'
              }).replace(/\\26/g, function (match, e) {
                // 对content中的类似'\26'中的\26进行处理
                return '\\\\26'
              }).replace(/`/g, function (match, e) {
                // 处理css中`符号
                return "'"
              })

              lessComplete++
              contentTemp = contentTemp.toString().replace(lessNumRegex, function (match, index) {
                return '`' + text + '`'
              })
              if (lessComplete === tempPath.length) {
                file.contents = new Buffer(contentTemp)
                _this.push(file)
                process.nextTick(cb)
              }
            })
          })
        })(index)
        index += 1
      }
    } else {
      this.push(file)
      cb()
    }

    return
  })
}
