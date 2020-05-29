const { series,parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"] //NOTE: "env" quer dizer a versão mais nova do javascript
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
    // return cb()
}

function fim(cb) {
    console.log('Fim!!!');
    return cb()    
}

exports.default = parallel(transformacaoJS,fim)