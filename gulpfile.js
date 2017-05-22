var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');

gulp.task('css', function(){
  return gulp.src('assets/less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/css'))
});

gulp.task('browser-sync', function() {
    try {
        var browserSync = require('browser-sync').create();

        browserSync.init({
            proxy: 'localhost:8000',
            files: [
                'assets/css/*.css',
                'assets/bundles/*.js'
            ],
            ghostMode: true
        });
    } catch(e) {}
});

gulp.watch('assets/less/*.less', {}, [ 'css' ]);

gulp.task('default', [ 'css', 'browser-sync' ]);
