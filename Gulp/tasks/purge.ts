import FilePath from '../components/FilePath';
import * as gutil from 'gulp-util';
import * as gulp from 'gulp';
var del = require('del');
var q = require('q');

import root from '../routes';

export default function pipelineFunction(event?: gulp.WatchEvent) {

    if (event !== undefined) {
        if (event.type !== 'deleted') {
            return q();
        }

        const files: string[] = [
            event.path.replace(/\\/g, '/').replace('.ts', '.js'),
            event.path.replace(/\\/g, '/').replace('.ts', '.js.map'),
            event.path.replace(/\\/g, '/').replace('.jade', '.html'),
            event.path.replace(/\\/g, '/').replace('.sass', '.css')
        ];

        return del(files, { force: true });
    } else {
        const files: string[] = [
            new FilePath(root.application.path(), '/**/*.js').toString(),
            new FilePath(root.application.path(), '/**/*.js.map').toString(),
            root.application.views.files().toString(),
            new FilePath(root.application.path(), '/**/*.css').toString()
        ];


        return del(files, { force: true });
    }
};