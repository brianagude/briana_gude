var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')
var browsersync = require('browser-sync').create()

sass.compiler = require('node-sass');

gulp.task('html', function(){
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist'))
})

gulp.task('sass', function(){
  return gulp.src('src/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleancss({compatibility: 'ie8'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(browsersync.stream())
})

gulp.task('js', function(){
  gulp.src('src/*.js')
  .pipe(gulp.dest('dist'))
  .pipe(browsersync.stream())
})

gulp.task('watch', function() {
  browsersync.init({
    server: {baseDir: 'dist'}
  })

  gulp.watch('src/*.html', ['html']).on('change', browsersync.reload)
  gulp.watch('src/*.scss', ['sass'])
  gulp.watch('src/*.js', ['java'])
})

gulp.task('default', ['html', 'sass', 'js', 'watch'])
