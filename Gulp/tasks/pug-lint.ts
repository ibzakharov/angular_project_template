const gulp = require('gulp');
const puglint = require('gulp-pug-lint');
import root from '../routes';

export default function pipelineFunction() {

    const files: string[] = [
        root.application.jade().toString()
    ];

    return gulp.src(files)
        .pipe(puglint());
};