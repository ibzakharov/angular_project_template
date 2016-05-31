"use strict";
var gulp = require('gulp');
var inject = require('gulp-inject');
var FilePath_1 = require('../components/FilePath');
var Path = require('path');
var routes_1 = require('../routes');
function pipelineFunction() {
    var transform = function (filepath, file, index, length) {
        var path = Path.normalize('.' + filepath);
        var application = Path.normalize(routes_1.default.path());
        var tsfile = Path.relative(application, path);
        var jsfile = tsfile.replace(/\\/g, '/').replace('.ts', '.js');
        return "+script(\"" + jsfile + "\")";
    };
    var jsOptions = {
        starttag: '//js',
        endtag: '//end-js',
        transform: transform
    };
    var application = routes_1.default.application;
    var controller = new FilePath_1.default(application.path(), '/js/**/*.ts');
    var controllerSource = [
        controller.toString(),
        new FilePath_1.default(application.path(), '/**/*.d.ts').Not()
    ];
    return gulp.src(routes_1.default.application.jadeScripts().toString())
        .pipe(inject(gulp.src(controllerSource, { read: false }), jsOptions))
        .pipe(gulp.dest(routes_1.default.path()));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
;
//# sourceMappingURL=inject-scripts.js.map