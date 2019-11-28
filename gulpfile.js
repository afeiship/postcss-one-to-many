const postcss = require("gulp-postcss");
const gulp = require("gulp");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const one2many = require("./src/index");
const del = require("del");

// clean:
gulp.task("clean", () => {
  return del("dist");
});

// styles:
gulp.task("styles", function() {
  var plugins = [
    one2many(),
    autoprefixer({ browsers: ["last 1 version"] }),
    cssnano()
  ];
  return gulp
    .src("test/test.css")
    .pipe(postcss(plugins))
    .pipe(gulp.dest("test/dist"));
});

gulp.task("scripts", () => {
  return gulp.src(["./src/**"]).pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series(["clean", "styles", "scripts"]));
