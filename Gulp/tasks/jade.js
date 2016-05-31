"use strict";
var gulp = require('gulp');
var rename = require('gulp-rename');
var jade = require('gulp-jade');
var FilePath_1 = require('../components/FilePath');
var routes_1 = require('../routes');
function pipelineFunction() {
    var jadeFiles = [
        routes_1.default.application.jade().toString(),
        routes_1.default.application.jadeTemplate().Not(),
        routes_1.default.application.obj().Not(),
        new FilePath_1.default(routes_1.default.bower().toString(), '/**/*').Not()
    ];
    return gulp
        .src(jadeFiles)
        .pipe(jade({ doctype: 'html', pretty: true }).on('error', console.log))
        .pipe(rename(function (filepath) { return filepath.extname = ".html"; }))
        .pipe(gulp.dest(routes_1.default.path()));
}
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
//# sourceMappingURL=jade.js.map