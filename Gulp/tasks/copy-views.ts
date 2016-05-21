import * as gulp from 'gulp';
import root from '../routes';

function pipelineFunction() {

    let htmls = [
        root.application.views.files().toString()
    ];

    return gulp.src(htmls)
        .pipe(gulp.dest(root.build.views.path().toString()));

};

export default pipelineFunction;