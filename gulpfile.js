const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

const path = {
  scripts: 'src/scripts/**/*.js',
  styles: 'src/scss/**/*.sass'
}

gulp.task('scripts', () => {
  gulp.src(path.scripts)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015', 'stage-0']
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('styles', () => {
  gulp.src(path.styles)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('public/css'))
});

gulp.task('watch', () => {
  gulp.watch(path.scripts, ['scripts']);
  gulp.watch(path.styles, ['styles']);
});

gulp.task('default', ['watch', 'scripts', 'styles']);

