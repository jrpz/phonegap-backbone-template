var gulp      = require('gulp'),
    gutil     = require('gulp-util'),
    concat    = require('gulp-concat'),
    sass      = require('gulp-sass'),
    minifyCss = require('gulp-minify'),
    rename    = require('gulp-rename');

var paths = {
  sass: ['./styles/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function (done) {
  gulp.src('./styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/app.css'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css'}))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch'), function () {
  gulp.watch(paths.sass, ['sass']);
}