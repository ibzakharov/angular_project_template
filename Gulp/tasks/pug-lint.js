"use strict";
var gulp = require('gulp');
var puglint = require('gulp-pug-lint');
var routes_1 = require('../routes');
function pipelineFunction() {
    var files = [
        routes_1.default.application.jade().toString()
    ];
    return gulp.src(files)
        .pipe(puglint());
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
;
//# sourceMappingURL=pug-lint.js.map