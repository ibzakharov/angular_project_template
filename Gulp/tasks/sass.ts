import * as gulp from 'gulp';
var sass = require('gulp-sass');
//var sourcemaps = require('gulp-sourcemaps');
import root from '../routes';
//var autoprefixer = require('gulp-autoprefixer');
//var gulpIf = require('gulp-if');
//import configuration from '../components/configuration'

export default function pipelineFunction() {
    //const content = root.content;
    //const config = configuration();
    //return gulp.src(content.sass.main().toString())
    //    .pipe(gulpIf(config.sourceMap === true, sourcemaps.init()))
    //    .pipe(sass({ indentedSyntax: true }).on('error', sass.logError))
    //    .pipe(autoprefixer({
    //        browsers: ['> 1%', 'last 2 version'],
    //        cascade: false
    //    }))
    //    .pipe(gulpIf(config.sourceMap === true, sourcemaps.write()))
    //    .pipe(gulp.dest(content.path()));
    return gulp.src(root.application.styles.files().toString())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(root.application.path().toString()));
};