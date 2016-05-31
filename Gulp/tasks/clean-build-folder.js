"use strict";
var del = require('del');
var routes_1 = require('../routes');
function pipelineFunction() {
    var build = routes_1.default.build;
    var folders = [
        build.index().toString(),
        build.styles.path().toString(),
        build.fonts.path().toString(),
        build.scripts.path().toString(),
        build.localizations.path(),
        build.images.path(),
        build.views.path()
    ];
    return del(folders, { force: true });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
;
//# sourceMappingURL=clean-build-folder.js.map