"use strict";
var gulp = require('gulp');
var routes_1 = require('../routes');
function pipelineFunction() {
    var htmls = [
        routes_1.default.application.views.files().toString()
    ];
    return gulp.src(htmls)
        .pipe(gulp.dest(routes_1.default.build.views.path().toString()));
}
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
//# sourceMappingURL=copy-views.js.map