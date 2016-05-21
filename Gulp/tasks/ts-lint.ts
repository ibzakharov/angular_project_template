import * as gutil from 'gulp-util';
import * as gulp from 'gulp';
var tslint = require('gulp-tslint');
import path = require('path');
var es = require('event-stream');
var fs = require('fs');

import root from '../routes';
//import Folders from '../Folders';

export default function pipelineFunction(event?: gulp.WatchEvent) {

    const files: string[] = event !== undefined ? [event.path] : [
        root.application.scripts.typescripts().toString(),
        root.application.scripts.typings().Not(),
        //`${Folders.clientUnitTests}/**/*.ts`,
        //`!${Folders.clientUnitTests}/typings/**/*.ts`,
        //`${Folders.gulp}/**/*.ts`,
        //`!${Folders.gulp}/typings/**/*.ts`
    ];

    const reporter = es.map((file, cb) => {
        if (event !== undefined) {
            const failures = JSON.parse(file.tslint.output);
            if (failures.length === 0) {

                const prefix = `[${gutil.colors.cyan('gulp-tslint')}]`;
                const fileName = path.basename(event.path);
                gutil.log(prefix, gutil.colors.green(`${fileName} doesn't have errors`));
            }
        }
    });

    const getConfiguration = () => {
        return JSON.parse(fs.readFileSync('tslint.json'));
    };

    const config = {
        configuration: getConfiguration()
    };

    return gulp.src(files)
        .pipe(tslint(config))
        .pipe(tslint.report('verbose', {
            emitError: false,
            summarizeFailureOutput: true
        }))
        .pipe(reporter);
};