import path from 'path'
import gulp from 'gulp'
import sass from 'gulp-sass'
import cleanCss from 'gulp-clean-css'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'
import concat from 'gulp-concat'
import browserify from 'browserify'
import babelify from 'babelify'
import src from 'vinyl-source-stream'

const paths = { style: { src: path.join(__dirname,
                                        'src',
                                        'stylesheet',
                                        '*.s[c|a]ss'),
                         dest: path.join(__dirname, 'dest') },
                script: { src: path.join(__dirname,
                                         'src',
                                         'scripts',
                                         'main.js'),
                          dest: path.join(__dirname, 'dest') } }

function stylize(source, dest) {
    return gulp.src(source)
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(rename({ basename: 'main',
                       suffix: '.min'}))
        .pipe(gulp.dest(dest))
}

function scriptify(source, dest) {
    return browserify({ entries: paths.script.src,
                              extensions: ['.js'],
                              debug: true })
        .transform(babelify,
                   { presets: ['es2015'] })
        .bundle()
        .pipe(src('main.min.js'))
        .pipe(gulp.dest(paths.script.dest))
}

const style = () => stylize(paths.style.src,
                            paths.style.dest)

const script = () => scriptify(paths.script.src,
                               paths.script.dest)

export function watch() {
    gulp.watch(path.join(__dirname, 'src', 'scripts', '*.js'),
               gulp.series(script))
    gulp.watch(paths.style.src, gulp.series(style))
}

const build = gulp.series(gulp.parallel(style,
                                        script))

export { style,
         script }
export default build
