"use strict";
var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var gitshasuffix = require("gulp-gitshasuffix");
var routes_1 = require('../routes');
function pipelineFunction() {
    var condition = function (file) {
        var reg = /.min.js$/g;
        return reg.test(file.path) === false;
    };
    var gitshasuffixOptions = { length: 40 };
    return gulp
        .src(routes_1.default.application.index().toString())
        .pipe(usemin({}))
        .pipe(gulp.dest(routes_1.default.build.path()));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
;
//# sourceMappingURL=uglify.js.map