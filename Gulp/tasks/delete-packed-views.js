"use strict";
var del = require('del');
var routes_1 = require('../routes');
function pipelineFunction() {
    var build = routes_1.default.build;
    return del(build.scripts.templates().toString(), { force: true });
}
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
//# sourceMappingURL=delete-packed-views.js.map