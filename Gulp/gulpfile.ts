///<reference path="typings/index.d.ts"/>

const gulp = require('gulp');

import sass from './tasks/sass';
import tslint from './tasks/ts-lint';
import environment from './tasks/environment';
import jade from './tasks/jade';
import uglify from './tasks/uglify';
import templateCache from './tasks/pack-views';
import cleanBuildFolder from './tasks/clean-build-folder';
import copyLocalization from './tasks/copy-localization';
import copyImages from './tasks/copy-images';
import copyFonts from './tasks/copy-fonts';
import copyViews from './tasks/copy-views';
import copyBuild from './tasks/copy-build';
import typescript from './tasks/compile-typescript';
import deletePackedView from './tasks/delete-packed-views';
import injectScripts from './tasks/inject-scripts';
//import metadata from './tasks/metadata';
import root from './routes';
import purge from './tasks/purge';
//import Folders from './Folders';
//import tsReference from './tasks/ts-references';
import jadeLint from './tasks/pug-lint';


//var gulp = require('gulp'),
var    puglint = require('gulp-pug-lint');

gulp.task('gulp-pug-lint', function () {
    return gulp
        .src(root.application.jade().toString())
        .pipe(puglint());
});

namespace Purge {
    'use strict';
    export const name = 'purge';
    gulp.task(name, () => purge());
}

//namespace Metadata {
//    'use strict';
//    export const name = 'metadata';
//    gulp.task(name, () => metadata());
//}

namespace Css {
    'use strict';
    export const name = 'css';
    gulp.task(name, sass);
}

namespace TsLint {
    'use strict';
    export const name = 'ts-lint';
    gulp.task(name, () => tslint());
}

namespace JadeLint {
    'use strict';
    export const name = 'jade-lint';
    gulp.task(name, () => jadeLint());
}

//namespace TsReference {
//    'use strict';
//    export const name = 'tsreference';
//    gulp.task(name, () => tsReference());
//}

namespace Jade {
    'use strict';
    namespace InjectScripts {
        'use strict';
        export const name = 'inject-scripts';
        gulp.task(name, () => injectScripts());
    }

    export const name = 'jade';
    gulp.task(name, [InjectScripts.name], jade);
}

namespace Environment {
    'use strict';
    export const name = 'environment';
    gulp.task(name, () => environment());
}

namespace Typescript {
    'use strict';
    export const name = 'typescript';
    gulp.task(name, [Environment.name], typescript);
}

namespace Compile {
    'use strict';
    export const name = 'compile';
    const dependencies: string[] = [
        Css.name,
        Jade.name,
        Typescript.name
    ];
    gulp.task(name, dependencies);
}

namespace Build {
    'use strict';

    namespace CleanBuildFolder {
        export const name = 'clean-build-folder';
        gulp.task(name, cleanBuildFolder);
    }

    namespace PackViews {
        export const name = 'pack-views';
        const dependencies: string[] = [
            CleanBuildFolder.name,
            Jade.name
        ];
        gulp.task(name, dependencies, () => templateCache('timetrack', 'app'));
    }

    namespace CopyLocalization {
        export const name = 'copy-localization';
        gulp.task(name, [CleanBuildFolder.name], copyLocalization);
    }

    namespace CopyImages {
        export const name = 'copy-images';
        gulp.task(name, [CleanBuildFolder.name], copyImages);
    }

    namespace CopyFonts {
        export const name = 'copy-fonts';
        gulp.task(name, [CleanBuildFolder.name], copyFonts);
    }

    namespace CopyViews {
        export const name = 'copy-views';
        gulp.task(name, [CleanBuildFolder.name], copyViews);
    }

    namespace Uglify {
        export const name = 'uglify';
        const dependencies: string[] = [
            //PackViews.name,
            Compile.name,
            CopyViews.name,
            //CopyLocalization.name,
            //CopyImages.name,
            CopyFonts.name,
            //Metadata.name
        ];
        gulp.task(name, dependencies, uglify);
    }

    //namespace CleanUpAfterBuild {
    //    export const name = 'clean-up-after-build';
    //    gulp.task(name, [Uglify.name], () => deletePackedView());
    //}

    export const name = 'build';
    //gulp.task(name, [CleanUpAfterBuild.name]);
    gulp.task(name, [Uglify.name]);
}

namespace Deploy {
    'use strict';

    namespace Copy {
        export const name = 'copy-build';
        gulp.task(name, copyBuild);
    }

    export const name = 'deploy';
    gulp.task(name, [Copy.name]);
}

namespace Default {
    'use strict';
    export const name = 'default';


    gulp.task(name, [Build.name], () => {
        const ts = [
            root.application.scripts.typescripts().toString(),
            root.application.scripts.typings().Not(),
//            `${Folders.clientUnitTests}/**/*.ts`,
//            `!${Folders.clientUnitTests}/typings/**/*`,
//            `!${Folders.clientUnitTests}/node_modules/**/*`,
//            `${Folders.gulp}/**/*.ts`,
//            `!${Folders.gulp}/typings/**/*.ts`,
//            `!${Folders.gulp}/node_modules/**/*`
        ];

        const jade = [
            root.application.jade().toString()
        ];

        gulp.watch(jade, jadeLint);
        gulp.watch(ts, tslint);
//        gulp.watch(ts, purge);
        gulp.watch(root.application.styles.files().toString(), [Css.name]);

//        const environmentFiles = [
//            root.application.environment.template().toString(),
//            root.packageJson().toString()
//        ];
//        gulp.watch(environmentFiles, [Environment.name]);
        gulp.watch(root.application. jade().toString(), [Jade.name]);
//        gulp.watch(root.application.jade().toString(), purge);
    });
}