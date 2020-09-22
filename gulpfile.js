const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const { src, series, parallel, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

let jsPaths = 'assets/js/*.js';
let datajsPaths = 'assets/data/*.js';
let cssPath = 'assets/css/**/*.css'

function copyHtml() {
    return src('*.html').pipe(gulp.dest('build'));
    }

function imgTask() {
        return src('assets/img/*').pipe(imagemin()).pipe(gulp.dest('build/assets/img'));
}

function jsTask() {
    return src(jsPaths)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/assets/js'));
}

function datajsTask(){
    return src(jsPaths)
    .pipe(sourcemaps.init())
    .pipe(concat('data.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/assets/js'));
}

function cssTask() {
    return src(cssPath)
        .pipe(sourcemaps.init())
        .pipe(concat('style.css'))
        .pipe(postcss([autoprefixer(), cssnano()])) //not all plugins work with postcss only the ones mentioned in their documentation
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/assets/css'));
    }


exports.copyHtml = copyHtml;
exports.imgTask = imgTask;
exports.jsTask = jsTask;
exports.cssTask = cssTask;
exports.datajsTask = datajsTask;

exports.default = parallel(copyHtml,imgTask,datajsTask,jsTask,cssTask);