import * as gulp from 'gulp';
var swig = require('gulp-swig');
var rename = require('gulp-rename');
var data = require('gulp-data');

import root from '../routes';
import config from '../components/configuration'

export default function pipelineFunction() {

    var opts = {
        defaults: {
            cache: false
        }
    };

    return gulp
        .src(root.application.environment.template().toString())
        .pipe(data(config))
        .pipe(swig(opts))
        .pipe(rename(root.application.environment.config().toString()))
        .pipe(gulp.dest(root.application.environment.path()));

};