"use strict";
var Path = require('path');
var FilePath = (function () {
    function FilePath(route, name) {
        var _this = this;
        this.route = route;
        this.name = name;
        this.Not = function () {
            return "!" + _this.fullName;
        };
        this.ext = Path.extname(name);
        this.fullName = Path.join(route, name);
    }
    FilePath.prototype.toString = function () {
        return this.fullName;
    };
    return FilePath;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FilePath;
//# sourceMappingURL=FilePath.js.map