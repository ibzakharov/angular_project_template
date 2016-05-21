import * as gulp from 'gulp';
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var gitshasuffix = require("gulp-gitshasuffix");

import root from '../routes';

export default function pipelineFunction() {

    var condition = file => {
        var reg = /.min.js$/g;
        return reg.test(file.path) === false;
    };

    let gitshasuffixOptions = { length: 40 };

    return gulp
        .src(root.application.index().toString())
        .pipe(usemin(
            {
                //scripts: [uglify(), 'concat']
                //scripts: [uglify(), 'concat', gitshasuffix(gitshasuffixOptions)],
                //vendors: [gulpIf(condition, uglify()), 'concat', gitshasuffix(gitshasuffixOptions)],
                //css: [cssnano({ zindex: false, reduceIdents: false, mergeIdents: false, discardUnused: false }), 'concat', gitshasuffix(gitshasuffixOptions)]
            }))
        .pipe(gulp.dest(root.build.path()));
};