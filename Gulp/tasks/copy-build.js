"use strict";
var gulp = require('gulp');
var util = require('gulp-util');
var routes_1 = require('../routes');
function pipelineFunction() {
    var deployDir = util.env.DEPLOY_DIR;
    util.log('deploy dir=' + deployDir);
    if (util.env.DEPLOY_DIR === undefined)
        return gulp.src([]);
    var files = [routes_1.default.build.files().toString()];
    return gulp.src(files)
        .pipe(gulp.dest(deployDir));
}
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
//# sourceMappingURL=copy-build.js.map