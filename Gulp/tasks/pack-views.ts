import * as gulp from 'gulp';
var templateCache = require('gulp-angular-templatecache');

import root from '../routes';

export default function pipelineFunction(applicationName: string, rootName: string) {
    return gulp.src(root.application.views.files().toString())
        .pipe(templateCache({
            module: applicationName,
            root: rootName
            }))
        .pipe(gulp.dest(root.build.scripts.path().toString()));
};