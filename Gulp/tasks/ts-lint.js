"use strict";
var gutil = require('gulp-util');
var gulp = require('gulp');
var tslint = require('gulp-tslint');
var path = require('path');
var es = require('event-stream');
var fs = require('fs');
var routes_1 = require('../routes');
//import Folders from '../Folders';
function pipelineFunction(event) {
    var files = event !== undefined ? [event.path] : [
        routes_1.default.application.scripts.typescripts().toString(),
        routes_1.default.application.scripts.typings().Not(),
    ];
    var reporter = es.map(function (file, cb) {
        if (event !== undefined) {
            var failures = JSON.parse(file.tslint.output);
            if (failures.length === 0) {
                var prefix = "[" + gutil.colors.cyan('gulp-tslint') + "]";
                var fileName = path.basename(event.path);
                gutil.log(prefix, gutil.colors.green(fileName + " doesn't have errors"));
            }
        }
    });
    var getConfiguration = function () {
        return JSON.parse(fs.readFileSync('tslint.json'));
    };
    var config = {
        configuration: getConfiguration()
    };
    return gulp.src(files)
        .pipe(tslint(config))
        .pipe(tslint.report('verbose', {
        emitError: false,
        summarizeFailureOutput: true
    }))
        .pipe(reporter);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
;
//# sourceMappingURL=ts-lint.js.map