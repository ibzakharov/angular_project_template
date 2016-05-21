import * as gulp from 'gulp';
import root from '../routes';

function pipelineFunction() {
    return gulp.src(root.application.images.files().toString())
        .pipe(gulp.dest(root.build.images.path().toString()));

};

export default pipelineFunction;