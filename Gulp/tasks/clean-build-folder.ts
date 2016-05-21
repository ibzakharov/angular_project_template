import * as del from 'del';
import root from '../routes';

export default function pipelineFunction() {
    const build = root.build;
    const folders = [
        build.index().toString(),
        build.styles.path().toString(),
        build.fonts.path().toString(),
        build.scripts.path().toString(),
        build.localizations.path(),
        build.images.path(),
        build.views.path()
    ];
    return del(folders, { force: true });
};