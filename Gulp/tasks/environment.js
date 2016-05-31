"use strict";
var gulp = require('gulp');
var swig = require('gulp-swig');
var rename = require('gulp-rename');
var data = require('gulp-data');
var routes_1 = require('../routes');
var configuration_1 = require('../components/configuration');
function pipelineFunction() {
    var opts = {
        defaults: {
            cache: false
        }
    };
    return gulp
        .src(routes_1.default.application.environment.template().toString())
        .pipe(data(configuration_1.default))
        .pipe(swig(opts))
        .pipe(rename(routes_1.default.application.environment.config().toString()))
        .pipe(gulp.dest(routes_1.default.application.environment.path()));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
;
//# sourceMappingURL=environment.js.map