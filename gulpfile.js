var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var sass = require('gulp-sass');

gulp.task('clean', function(cb){
  return del(["build/**/*", "!build/**/.gitkeep"], cb);
});

gulp.task('copy', function(){
  return gulp.src(['node_modules/@salesforce-ux/design-system/assets/**/*', '!node_modules/@salesforce-ux/design-system/assets/styles/**/*'])
    .pipe(gulp.dest('./build/assets'))
});

gulp.task('sass', function (){
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/assets/styles'));
});

gulp.task('default', function(){
  runSequence(
    'clean',
    ['copy', 'sass']
  );
})