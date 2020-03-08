// Initialize modules
const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
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
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.reload({stream: true}));
}


function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src).on('change', browserSync.reload);
    gulp.watch(paths.html.src).on('change', browserSync.reload);
}


function server() {
    browserSync.init({
        open: false,
        // watch: true,
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
exports.server = server;