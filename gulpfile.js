const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const babel = require("gulp-babel");

const paths = {
  scss: {
    src: "./src/sass/**/*.scss", // Source of your SCSS files
    dest: "./src/css", // Destination for compiled and minified CSS
  },
  js: {
    src: "./src/**/*.js", // Source of your JS files
    dest: "./src/js/min", // Destination for minified JS
  },
};

function styles() {
  return gulp
    .src(paths.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest(paths.scss.dest));
}
function scripts() {
  return gulp
    .src(paths.js.src)
    .pipe(
      babel({
        presets: ["@babel/preset-env", "@babel/preset-react"],
      })
    )
    .pipe(concat("all.js"))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(rename("all.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest));
}
function watch() {
  gulp.watch(paths.scss.src, styles);
  gulp.watch(paths.js.src, scripts);
}

const build = gulp.series(gulp.parallel(styles, scripts), watch);

exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.default = build;
