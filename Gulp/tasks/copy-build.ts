import * as gulp from 'gulp';
import * as util from 'gulp-util';
import root from '../routes';

function pipelineFunction() {
    var deployDir = util.env.DEPLOY_DIR;
    util.log('deploy dir=' + deployDir);

    if (util.env.DEPLOY_DIR === undefined)
        return gulp.src([]);

    var files: string[] = [root.build.files().toString()];

    return gulp.src(files)
        .pipe(gulp.dest(deployDir));
};

export default pipelineFunction;