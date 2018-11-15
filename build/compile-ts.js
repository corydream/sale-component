/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require("gulp");
var replace = require('gulp-replace');
var sourcemaps = require("gulp-sourcemaps");
var inlineNg2Template = require("gulp-inline-ng2-template");
var ts = require("gulp-typescript");
var mergeStream = require('merge-stream');


var typings = ["src/typings.d.ts"];

module.exports = function(tsSources, options, destination) {
    // always include typings to the sources;
    // this function is always called after the "triage" task so the tmp typings file exists
    var allSources = typings.concat(tsSources);

    var tsConfig = {
        typescript: require('typescript'),
        declaration: true,
        sourceMap: true,
        "module": "commonjs",
        "moduleResolution": "node",
        "noEmitOnError": true,
        "noImplicitAny": false,
        "outDir": "public",
        "rootDir": ".",
        "target": "es5",
        "inlineSources": true,
        "stripInternal": true,
        "baseUrl": ""
    };
    if (options.module) {
        tsConfig.module = options.module;
    }
    var tsProject = ts.createProject("tsconfig.json", tsConfig);

    var prod = process.env.NODE_ENV === "prod";

    var stream = gulp.src(allSources, { base: "src/" })
        // replace .scss references in styleUrls: [...] in the files
        // .pipe(replace(/styleUrls\s*:\s*\[([^\]]*)\]/g, function(match, group) {
        //     // here, match = styleUrls: [...]  and group = string inside []
        //     return match.replace(group, group.replace(/\.less/g, ".css"));
        // }));
    if (!prod) {
        stream = stream.pipe(sourcemaps.init());
    }




    if (options.inlineTemplates) {
        stream = stream.pipe(inlineNg2Template({
            base: "dist",
            target: 'es5',
            useRelativePaths: true,
            styleProcessor: function(path, ext, file, callback) {
                try {
                    var csso = require('csso');
                    var autoprefixer = require('autoprefixer');
                    var stylus = require('stylus');
                    var postcssLess = require('postcss-less');
                    var postcss = require('postcss');
                    var accord = require('accord');
                    var less = accord.load('less');
                    var through2 = require('through2');

                    var gulpLess = require('gulp-less');

                    // less.render(file, {
                    //     compress: false,
                    //     paths: []
                    // }).then(function(res) {
                    //     console.log(res.result)
                    // }).then(function(file) {
                    //     callback(null, file);
                    // })

                    // var css = less([autoprefixer]).process(file, {
                    //     syntax: less.parser
                    // }).css;

                    less.render(file, {
                        compress: false,
                        paths: ['../src']
                    }).then(function(res) {
                        console.log(res.result)

                        callback(null, "'" + res.result + "'");

                    })


                    // var css = postcss([
                    //     autoprefixer
                    // ]).process(file, { syntax: postcssLess }).then(function(result) {
                    //     if (path.indexOf('button') > 0) {
                    //         console.log(result.css)

                    //     }
                    // });
                    // css = csso.minify(css).css;
                    // console.log(path, css)


                } catch (err) { callback(err); }

            }
        }));
    }



    stream = stream.pipe(tsProject());
    if (!prod) {
        stream = stream.pipe(sourcemaps.write(".", { sourceRoot: "/src" }));
    }

    if (!options.internal && prod) {
        // Merge the two output streams, so this task is finished when the IO of both operations are done.
        return mergeStream([
            stream.js,
            stream.dts
        ]);
    } else {
        return stream;
    }
};