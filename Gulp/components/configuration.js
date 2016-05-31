"use strict";
var fs = require('fs');
var argv = require('yargs')
    .default('environment', 'debug')
    .usage('Usage: $0 <command> --environment [name]')
    .alias('env', 'environment')
    .demand('environment')
    .help('h')
    .argv;
var routes_1 = require('../routes');
function configuration() {
    var packageJson = routes_1.default.packageJson().toString();
    var params = JSON.parse(fs.readFileSync(packageJson, 'utf8')).environments;
    if (params[argv.environment] === undefined)
        throw new Error("environment " + argv.environment + " not found");
    return params[argv.environment];
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configuration;
//# sourceMappingURL=configuration.js.map