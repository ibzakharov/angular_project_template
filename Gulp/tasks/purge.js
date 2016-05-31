"use strict";
var FilePath_1 = require('../components/FilePath');
var del = require('del');
var q = require('q');
var routes_1 = require('../routes');
function pipelineFunction(event) {
    if (event !== undefined) {
        if (event.type !== 'deleted') {
            return q();
        }
        var files = [
            event.path.replace(/\\/g, '/').replace('.ts', '.js'),
            event.path.replace(/\\/g, '/').replace('.ts', '.js.map'),
            event.path.replace(/\\/g, '/').replace('.jade', '.html'),
            event.path.replace(/\\/g, '/').replace('.sass', '.css')
        ];
        return del(files, { force: true });
    }
    else {
        var files = [
            new FilePath_1.default(routes_1.default.application.path(), '/**/*.js').toString(),
            new FilePath_1.default(routes_1.default.application.path(), '/**/*.js.map').toString(),
            routes_1.default.application.views.files().toString(),
            new FilePath_1.default(routes_1.default.application.path(), '/**/*.css').toString()
        ];
        return del(files, { force: true });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
;
//# sourceMappingURL=purge.js.map