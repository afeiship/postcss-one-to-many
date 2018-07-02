const gulp = require('gulp');
const del = require('del');

gulp.task('clean', () => {
  return del('dist');
});

gulp.task('default', ['clean'], () => {
  return gulp.src([
    './src/**'
  ]).pipe(gulp.dest('dist'));
});
