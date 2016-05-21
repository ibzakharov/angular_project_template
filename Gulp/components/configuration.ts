import * as fs from 'fs';
var argv = require('yargs')
    .default('environment', 'debug')
    .usage('Usage: $0 <command> --environment [name]')
    .alias('env', 'environment')
    .demand('environment')
    .help('h')
    .argv;
import root from '../routes';

export default function configuration() {
    const packageJson = root.packageJson().toString();
    var params = JSON.parse(fs.readFileSync(packageJson, 'utf8')).environments;
    if (params[argv.environment] === undefined)
        throw new Error(`environment ${argv.environment} not found`);

    return params[argv.environment];
}
