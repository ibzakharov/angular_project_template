import * as del from 'del';
import root from '../routes';

function pipelineFunction() {
    const build = root.build;
    return del(build.scripts.templates().toString(), { force: true });
};

export default pipelineFunction;