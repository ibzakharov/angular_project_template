"use strict";
var gulp = require('gulp');
var ts = require('gulp-typescript');
var routes_1 = require('../routes');
function pipelineFunction() {
    var application = routes_1.default.application.scripts;
    var src = [
        application.typescripts().toString()
    ];
    var tsResult = gulp.src(src)
        .pipe(ts({
        experimentalDecorators: true,
        declarationFiles: false,
        noExternalResolve: false,
        target: 'es5'
    }));
    return tsResult.js.pipe(gulp.dest(routes_1.default.application.path()));
}
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
//# sourceMappingURL=compile-typescript.js.map