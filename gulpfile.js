var 
  gulp = require("gulp"),
  sass = require("gulp-sass"),
  cleanCss = require("gulp-clean-css"),
  sourcemaps = require("gulp-sourcemaps"),
  browserSync = require("browser-sync").create(),
  imagemin = require("gulp-imagemin"),
  del = require("del"),
  runSequence = require("run-sequence");

sass.compiler = require("node-sass");

gulp.task("build", function(callback) {
  runSequence("clean:dist", ["sass", "html", "java", "images"], callback);
});

gulp.task("clean:dist", function() {
  return del.sync("dist");
});

gulp.task("sass", function() {
  return gulp
    .src("src/css/*")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', function (err) {
      console.log(err.toString());

      this.emit('end');
    })
    .pipe(
      cleanCss({
        compatibility: "ie8"
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("html", function() {
  return gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

gulp.task("java", function() {
  return gulp
    .src("src/js/*")
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("images", function() {
  return gulp
    .src("src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"));
});

gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
  
  gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
  gulp.watch("src/css/global.scss", ["sass"]).on("change", browserSync.reload);
  gulp.watch("src/css/app.scss", ["sass"]).on("change", browserSync.reload);
  gulp.watch("src/js/*", ["java"]);
  gulp.watch("src/img/*", ["images"]);
});

gulp.task("default", ["html", "sass", "java", "images", "watch"]);
