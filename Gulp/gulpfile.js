///<reference path="typings/index.d.ts"/>
"use strict";
var gulp = require('gulp');
var sass_1 = require('./tasks/sass');
var ts_lint_1 = require('./tasks/ts-lint');
var environment_1 = require('./tasks/environment');
var jade_1 = require('./tasks/jade');
var uglify_1 = require('./tasks/uglify');
var pack_views_1 = require('./tasks/pack-views');
var clean_build_folder_1 = require('./tasks/clean-build-folder');
var copy_localization_1 = require('./tasks/copy-localization');
var copy_images_1 = require('./tasks/copy-images');
var copy_fonts_1 = require('./tasks/copy-fonts');
var copy_views_1 = require('./tasks/copy-views');
var copy_build_1 = require('./tasks/copy-build');
var compile_typescript_1 = require('./tasks/compile-typescript');
var inject_scripts_1 = require('./tasks/inject-scripts');
//import metadata from './tasks/metadata';
var routes_1 = require('./routes');
var purge_1 = require('./tasks/purge');
//import Folders from './Folders';
//import tsReference from './tasks/ts-references';
var pug_lint_1 = require('./tasks/pug-lint');
//var gulp = require('gulp'),
var puglint = require('gulp-pug-lint');
gulp.task('gulp-pug-lint', function () {
    return gulp
        .src(routes_1.default.application.jade().toString())
        .pipe(puglint());
});
var Purge;
(function (Purge) {
    'use strict';
    Purge.name = 'purge';
    gulp.task(Purge.name, function () { return purge_1.default(); });
})(Purge || (Purge = {}));
//namespace Metadata {
//    'use strict';
//    export const name = 'metadata';
//    gulp.task(name, () => metadata());
//}
var Css;
(function (Css) {
    'use strict';
    Css.name = 'css';
    gulp.task(Css.name, sass_1.default);
})(Css || (Css = {}));
var TsLint;
(function (TsLint) {
    'use strict';
    TsLint.name = 'ts-lint';
    gulp.task(TsLint.name, function () { return ts_lint_1.default(); });
})(TsLint || (TsLint = {}));
var JadeLint;
(function (JadeLint) {
    'use strict';
    JadeLint.name = 'jade-lint';
    gulp.task(JadeLint.name, function () { return pug_lint_1.default(); });
})(JadeLint || (JadeLint = {}));
//namespace TsReference {
//    'use strict';
//    export const name = 'tsreference';
//    gulp.task(name, () => tsReference());
//}
var Jade;
(function (Jade) {
    'use strict';
    var InjectScripts;
    (function (InjectScripts) {
        'use strict';
        InjectScripts.name = 'inject-scripts';
        gulp.task(InjectScripts.name, function () { return inject_scripts_1.default(); });
    })(InjectScripts || (InjectScripts = {}));
    Jade.name = 'jade';
    gulp.task(Jade.name, [InjectScripts.name], jade_1.default);
})(Jade || (Jade = {}));
var Environment;
(function (Environment) {
    'use strict';
    Environment.name = 'environment';
    gulp.task(Environment.name, function () { return environment_1.default(); });
})(Environment || (Environment = {}));
var Typescript;
(function (Typescript) {
    'use strict';
    Typescript.name = 'typescript';
    gulp.task(Typescript.name, [Environment.name], compile_typescript_1.default);
})(Typescript || (Typescript = {}));
var Compile;
(function (Compile) {
    'use strict';
    Compile.name = 'compile';
    var dependencies = [
        Css.name,
        Jade.name,
        Typescript.name
    ];
    gulp.task(Compile.name, dependencies);
})(Compile || (Compile = {}));
var Build;
(function (Build) {
    'use strict';
    var CleanBuildFolder;
    (function (CleanBuildFolder) {
        CleanBuildFolder.name = 'clean-build-folder';
        gulp.task(CleanBuildFolder.name, clean_build_folder_1.default);
    })(CleanBuildFolder || (CleanBuildFolder = {}));
    var PackViews;
    (function (PackViews) {
        PackViews.name = 'pack-views';
        var dependencies = [
            CleanBuildFolder.name,
            Jade.name
        ];
        gulp.task(PackViews.name, dependencies, function () { return pack_views_1.default('timetrack', 'app'); });
    })(PackViews || (PackViews = {}));
    var CopyLocalization;
    (function (CopyLocalization) {
        CopyLocalization.name = 'copy-localization';
        gulp.task(CopyLocalization.name, [CleanBuildFolder.name], copy_localization_1.default);
    })(CopyLocalization || (CopyLocalization = {}));
    var CopyImages;
    (function (CopyImages) {
        CopyImages.name = 'copy-images';
        gulp.task(CopyImages.name, [CleanBuildFolder.name], copy_images_1.default);
    })(CopyImages || (CopyImages = {}));
    var CopyFonts;
    (function (CopyFonts) {
        CopyFonts.name = 'copy-fonts';
        gulp.task(CopyFonts.name, [CleanBuildFolder.name], copy_fonts_1.default);
    })(CopyFonts || (CopyFonts = {}));
    var CopyViews;
    (function (CopyViews) {
        CopyViews.name = 'copy-views';
        gulp.task(CopyViews.name, [CleanBuildFolder.name], copy_views_1.default);
    })(CopyViews || (CopyViews = {}));
    var Uglify;
    (function (Uglify) {
        Uglify.name = 'uglify';
        var dependencies = [
            //PackViews.name,
            Compile.name,
            CopyViews.name,
            //CopyLocalization.name,
            //CopyImages.name,
            CopyFonts.name,
        ];
        gulp.task(Uglify.name, dependencies, uglify_1.default);
    })(Uglify || (Uglify = {}));
    //namespace CleanUpAfterBuild {
    //    export const name = 'clean-up-after-build';
    //    gulp.task(name, [Uglify.name], () => deletePackedView());
    //}
    Build.name = 'build';
    //gulp.task(name, [CleanUpAfterBuild.name]);
    gulp.task(Build.name, [Uglify.name]);
})(Build || (Build = {}));
var Deploy;
(function (Deploy) {
    'use strict';
    var Copy;
    (function (Copy) {
        Copy.name = 'copy-build';
        gulp.task(Copy.name, copy_build_1.default);
    })(Copy || (Copy = {}));
    Deploy.name = 'deploy';
    gulp.task(Deploy.name, [Copy.name]);
})(Deploy || (Deploy = {}));
var Default;
(function (Default) {
    'use strict';
    Default.name = 'default';
    gulp.task(Default.name, [Build.name], function () {
        var ts = [
            routes_1.default.application.scripts.typescripts().toString(),
            routes_1.default.application.scripts.typings().Not(),
        ];
        var jade = [
            routes_1.default.application.jade().toString()
        ];
        gulp.watch(jade, pug_lint_1.default);
        gulp.watch(ts, ts_lint_1.default);
        //        gulp.watch(ts, purge);
        gulp.watch(routes_1.default.application.styles.files().toString(), [Css.name]);
        //        const environmentFiles = [
        //            root.application.environment.template().toString(),
        //            root.packageJson().toString()
        //        ];
        //        gulp.watch(environmentFiles, [Environment.name]);
        gulp.watch(routes_1.default.application.jade().toString(), [Jade.name]);
        //        gulp.watch(root.application.jade().toString(), purge);
    });
})(Default || (Default = {}));
//# sourceMappingURL=gulpfile.js.map