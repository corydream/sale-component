var gulp = require("gulp");
var gpClean = require("gulp-clean")
var runSequence = require('run-sequence');
var shell = require('gulp-shell')
var run = require("gulp-run");
var browserSync = require('browser-sync');

const markdownDir = ['./{src,doc}/**/**.md', './**.md']
gulp.task('markdown:copy', ['markdown:clean'], function() {
    return gulp.src(markdownDir)
        .pipe(gulp.dest('book'))
});

gulp.task('markdown:copy2', function() {
    return gulp.src(markdownDir)
        .pipe(gulp.dest('book'))
});

gulp.task('markdown:clean', function() {
    return gulp.src('book', { read: false })
        .pipe(gpClean());
});

gulp.task('markdown:browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./_book"
        },
        port: 8088
    });
});
gulp.task('markdown:build', function() {
    run('gitbook build').exec('', function() {
        run('echo docs:build DONE!').exec('', function() {
            run('').exec('').pipe(browserSync.reload({ stream: true }));
        })
    });

})


gulp.task('markdown:watch', function() {
    gulp.watch(markdownDir, ['markdown:build'])
});



gulp.task('markdown:default', ['markdown:build', 'markdown:watch', 'markdown:browser-sync']);


gulp.task('mark:move', [
    'markdown:copy'
], function() {});

gulp.task('markdown:pm2', ['markdown:build'], function() {
    run('npm run pm2book').exec('').pipe();
})