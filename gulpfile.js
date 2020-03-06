// Initialize modules
const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();


var paths = {
    styles: {
        src: './scss/**/*.scss',
        dest: './css/'
    },
    scripts: {
        src: './js/**/*.js',
        dest: './scripts/'
    },
    html: {
        src: './*.html',
        dest: './'
    }
};


function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dest));
}


function watch() {
    gulp.watch(paths.styles.src, styles).on('change', browserSync.reload);
    gulp.watch(paths.scripts.src).on('change', browserSync.reload);
    gulp.watch(paths.html.src).on('change', browserSync.reload);
}


function serve() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });
    watch();
}



// exports.styles = styles;
// exports.scripts = scripts;
// exports.watch = watch;
exports.serve = serve;