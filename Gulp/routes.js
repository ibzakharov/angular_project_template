"use strict";
var FilePath_1 = require("./components/FilePath");
var path = require('path');
var root = {
    path: function () { return path.resolve('../client'); },
    packageJson: function () { return new FilePath_1.default(root.path(), 'package.json'); },
    projectFile: function () { return new FilePath_1.default(root.path(), 'App.csproj'); },
    typings: function () { return new FilePath_1.default(root.path(), '/typings/**/*.ts'); },
    bower: function () { return new FilePath_1.default(root.path(), 'bower_components'); },
    application: {
        path: function () { return new FilePath_1.default(root.path(), 'app').toString(); },
        scripts: {
            typescripts: function () { return new FilePath_1.default(root.application.path(), '/**/*.ts'); },
            typings: function () { return new FilePath_1.default(root.application.path(), '/**/typings/**/*.ts'); }
        },
        reference: function () { return new FilePath_1.default(root.application.path(), 'references.ts').toString(); },
        obj: function () { return new FilePath_1.default(root.path(), 'obj/**/*'); },
        jade: function () { return new FilePath_1.default(root.path(), '/**/*.jade'); },
        jadeTemplate: function () { return new FilePath_1.default(root.path(), '/**/_*.jade'); },
        index: function () { return new FilePath_1.default(root.path(), 'index.html'); },
        jadeScripts: function () { return new FilePath_1.default(root.path(), '_scripts.jade'); },
        environment: {
            path: function () { return new FilePath_1.default(root.application.path(), 'configServices').toString(); },
            template: function () { return new FilePath_1.default(root.application.environment.path(), 'environmentConfig.template.ts'); },
            config: function () { return new FilePath_1.default(root.application.environment.path(), 'environmentConfig.ts'); }
        },
        views: {
            files: function () { return new FilePath_1.default(root.application.path(), '/**/*.html'); }
        },
        localizations: {
            path: function () { return new FilePath_1.default(root.path(), 'i18n').toString(); },
            files: function () { return new FilePath_1.default(root.application.localizations.path(), '/**/*.json'); }
        },
        images: {
            path: function () { return new FilePath_1.default(root.path(), 'img').toString(); },
            files: function () { return new FilePath_1.default(root.application.images.path(), '/**/*'); }
        },
        fontsBootstrap: {
            path: function () { return new FilePath_1.default(root.path(), 'bower_components/bootstrap/fonts').toString(); },
            files: function () { return new FilePath_1.default(root.application.fontsBootstrap.path(), '/**/*'); }
        },
        typings: {
            path: function () { return new FilePath_1.default(root.path(), 'typings').toString(); },
            files: function () { return new FilePath_1.default(root.application.typings.path(), '/**/*.d.ts'); }
        },
        styles: {
            path: function () { return new FilePath_1.default(root.application.path(), 'styles').toString(); },
            files: function () { return new FilePath_1.default(root.application.path(), '/**/*.sass'); }
        }
    },
    content: {
        path: function () { return new FilePath_1.default(root.path(), 'Content').toString(); },
        sass: {
            files: function () { return new FilePath_1.default(root.content.path(), '/**/*.scss'); },
            main: function () { return new FilePath_1.default(root.content.path(), '/main.scss'); }
        },
        css: {
            files: function () { return new FilePath_1.default(root.content.path(), '/**/*.css'); },
            main: function () { return new FilePath_1.default(root.content.path(), '/main.css'); }
        }
    },
    build: {
        path: function () { return new FilePath_1.default(root.path(), 'build').toString(); },
        scripts: {
            path: function () { return new FilePath_1.default(root.build.path(), 'js'); },
            templates: function () { return new FilePath_1.default(root.build.scripts.path().toString(), 'templates.js'); }
        },
        localizations: {
            path: function () { return new FilePath_1.default(root.build.path(), 'i18n').toString(); },
            files: function () { return new FilePath_1.default(root.build.localizations.path(), '/**/*.json'); }
        },
        images: {
            path: function () { return new FilePath_1.default(root.build.path(), 'img').toString(); },
            files: function () { return new FilePath_1.default(root.build.images.path(), '/**/*'); }
        },
        fonts: {
            path: function () { return new FilePath_1.default(root.build.path(), 'fonts').toString(); },
            files: function () { return new FilePath_1.default(root.build.fonts.path(), '/**/*'); }
        },
        views: {
            path: function () { return new FilePath_1.default(root.build.path(), 'app').toString(); }
        },
        index: function () { return new FilePath_1.default(root.build.path(), 'index.html'); },
        styles: {
            path: function () { return new FilePath_1.default(root.build.path(), 'css'); }
        },
        files: function () { return new FilePath_1.default(root.build.path(), '/**/*'); }
    },
    deploy: {
        path: function () { return path.resolve('../public_html'); }
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = root;
//# sourceMappingURL=routes.js.map