var gulp = require("gulp");
var gpClean = require("gulp-clean")
var runSequence = require('run-sequence');
var shell = require('gulp-shell')
var run = require("gulp-run");
var browserSync = require('browser-sync');
const convertLess = require("../less.convert");
const convertHtml = require("../html.convert")
const gulpConvertHtml = require("../gulp.htmlConvert")
const gulpConvertLess = require("../gulp.lessConvert");
const componentDir = ['./src/components/**/**']

const ngc = require('gulp-ngc');
const rollupConfig = './rollup-config';
var del = require('del');
var vinylPaths = require('vinyl-paths');
var replaceStr = require('../gulp.replace');



const tempComponentDir = ['./src/__temp_components/**/**.ts', '!./src/__temp_components/**/**.spec.ts']
const releaseComponentDir = ['./release']
const tsDir = ['./{src}/**/**.ts']
const tempDir = ['./{src}/**/**.html']

gulp.task('release:copy', function() {
    return gulp.src(componentDir)
        .pipe(gulp.dest('./src/__temp_components'))
});
gulp.task('release:clean', function() {
    return gulp.src(releaseComponentDir)
        .pipe(gpClean());
});

gulp.task('release:cleanTemp', ['release:build'], function() {
    return gulp.src('./src/__temp_components')
        .pipe(gpClean());
});

gulp.task('release:cleanLessHtml', function(cb) {
    return gulp.src(['./src/__temp_components/**/**.less', './src/__temp_components/**/**.html', './src/__temp_components/**/**.spec.ts'])
        .pipe(gpClean());
});

gulp.task('release:build', ['release:convert'], () => {
    return ngc('tsconfig-build.json');
});

gulp.task('release:convertHtml', function() {
    return gulp.src(tempComponentDir).pipe(gulpConvertHtml()).pipe(gulp.dest('./src/__temp_components'))
})
gulp.task('release:convertLess', function() {
    return gulp.src(tempComponentDir).pipe(gulpConvertLess()).pipe(gulp.dest('./src/__temp_components'))
})
gulp.task('release:convert', ['release:clean', 'release:copy'], function() {
    return gulp.src(tempComponentDir).pipe(gulpConvertLess()).pipe(gulpConvertHtml()).pipe(gulp.dest('./src/__temp_components'))
})

gulp.task('release:rollup', () => {
    run('"node_modules/.bin/rollup" --config rollup.config.js').exec('')
});
gulp.task('release:replace', ['release:build'], () => {
    return gulp.src(['./release/**/**.ts', './release/**/**.js'])
        .pipe(replaceStr({
            pattern: /ng\-zorro\-antd\/index/g,
            instead: 'ng-zorro-antd'
        })).pipe(gulp.dest('./release'));
});

gulp.task('release:default', ['release:clean', 'release:copy', 'release:convert']) //, 'release:build', 'release:cleanTemp', 'release:replace'