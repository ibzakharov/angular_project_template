import * as gulp from 'gulp';
import root from '../routes';

function pipelineFunction() {

    let fonts = [
        root.application.fontsBootstrap.files().toString()
    ];

    return gulp.src(fonts)
        .pipe(gulp.dest(root.build.fonts.path().toString()));

};

export default pipelineFunction;