"use strict";
var gulp = require('gulp');
var routes_1 = require('../routes');
function pipelineFunction() {
    var fonts = [
        routes_1.default.application.fontsBootstrap.files().toString()
    ];
    return gulp.src(fonts)
        .pipe(gulp.dest(routes_1.default.build.fonts.path().toString()));
}
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
//# sourceMappingURL=copy-fonts.js.map