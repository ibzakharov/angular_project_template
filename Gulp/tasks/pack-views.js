"use strict";
var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var routes_1 = require('../routes');
function pipelineFunction(applicationName, rootName) {
    return gulp.src(routes_1.default.application.views.files().toString())
        .pipe(templateCache({
        module: applicationName,
        root: rootName
    }))
        .pipe(gulp.dest(routes_1.default.build.scripts.path().toString()));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
;
//# sourceMappingURL=pack-views.js.map