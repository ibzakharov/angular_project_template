import * as gulp from 'gulp';
import root from '../routes';

function pipelineFunction() {
    return gulp.src(root.application.localizations.files().toString())
        .pipe(gulp.dest(root.build.localizations.path().toString()));

};

export default pipelineFunction;