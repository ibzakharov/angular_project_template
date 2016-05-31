"use strict";
var gulp = require('gulp');
var routes_1 = require('../routes');
function pipelineFunction() {
    return gulp.src(routes_1.default.application.images.files().toString())
        .pipe(gulp.dest(routes_1.default.build.images.path().toString()));
}
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
//# sourceMappingURL=copy-images.js.map