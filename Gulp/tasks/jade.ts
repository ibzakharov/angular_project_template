import * as gulp from 'gulp';
var rename = require('gulp-rename');
var jade = require('gulp-jade');
import FilePath from '../components/FilePath';

import root from '../routes';

function pipelineFunction() {
    let jadeFiles = [
        root.application.jade().toString(),
        root.application.jadeTemplate().Not(),
        root.application.obj().Not(),
        new FilePath(root.bower().toString(), '/**/*').Not()
    ];

    return gulp
        .src(jadeFiles)
        .pipe(jade({ doctype: 'html', pretty: true }).on('error', console.log))
        .pipe(rename(filepath => filepath.extname = ".html"))
        .pipe(gulp.dest(root.path()));
};

export default pipelineFunction;