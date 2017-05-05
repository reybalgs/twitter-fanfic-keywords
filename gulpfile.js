var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');

gulp.task('css', function(){
  return gulp.src('assets/less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/css'))
});

gulp.watch('assets/less/*.less', {}, [ 'css' ]);

gulp.task('default', [ 'css' ]);
