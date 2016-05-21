import * as gulp from 'gulp';
var ts = require('gulp-typescript');
import root from '../routes';

function pipelineFunction() {

    var application = root.application.scripts;
    var src: string[] = [
        application.typescripts().toString()
    ];
    var tsResult = gulp.src(src)
        .pipe(ts({
            experimentalDecorators: true,
            declarationFiles: false,
            noExternalResolve: false,
            target: 'es5'
        }));

    return tsResult.js.pipe(gulp.dest(root.application.path()));
};

export default pipelineFunction;