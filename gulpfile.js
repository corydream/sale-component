/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require("gulp");
var env = require('gulp-env');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var util = require('gulp-util');




var ts = require("gulp-typescript");


/**
 * Check for prod flag during gulp task executions
 */
if (util.env.prod) {
    env.set({ NODE_ENV: "prod" });
} else {
    env.set({ NODE_ENV: "dev" });
}



gulp.task('tests', function() {
    console.log(1)
});

requireDir('./build/tasks', { recurse: true });