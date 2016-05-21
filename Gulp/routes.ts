import file from "./components/FilePath";
import path = require('path');

var root = {
    path: () => path.resolve('../client'),
    packageJson: () => new file(root.path(), 'package.json'),
    projectFile: () => new file(root.path(), 'App.csproj'),
    typings: () => new file(root.path(), '/typings/**/*.ts'),
    bower: () => new file(root.path(), 'bower_components'),
    application: {
        path: () => new file(root.path(), 'app').toString(),
        scripts: {
            typescripts: () => new file(root.application.path(), '/**/*.ts'),
            typings: () => new file(root.application.path(), '/**/typings/**/*.ts')
        },
        reference: () => new file(root.application.path(), 'references.ts').toString(),
        obj: () => new file(root.path(), 'obj/**/*'),
        jade: () => new file(root.path(), '/**/*.jade'),
        jadeTemplate: () => new file(root.path(), '/**/_*.jade'),
        index: () => new file(root.path(), 'index.html'),
        jadeScripts: () => new file(root.path(), '_scripts.jade'),
        environment: {
            path: () => new file(root.application.path(), 'configServices').toString(),
            template: () => new file(root.application.environment.path(), 'environmentConfig.template.ts'),
            config: () => new file(root.application.environment.path(), 'environmentConfig.ts')
        },
        views: {
            files: () => new file(root.application.path(), '/**/*.html')
        },
        localizations: {
            path: () => new file(root.path(), 'i18n').toString(),
            files: () => new file(root.application.localizations.path(), '/**/*.json')
        },
        images: {
            path: () => new file(root.path(), 'img').toString(),
            files: () => new file(root.application.images.path(), '/**/*')
        },
        fontsBootstrap: {
            path: () => new file(root.path(), 'bower_components/bootstrap/fonts').toString(),
            files: () => new file(root.application.fontsBootstrap.path(), '/**/*')
        },
        typings: {
            path: () => new file(root.path(), 'typings').toString(),
            files: () => new file(root.application.typings.path(), '/**/*.d.ts')
        },
        styles: {
            path: () => new file(root.application.path(), 'styles').toString(),
            files: () => new file(root.application.path(), '/**/*.sass')
        }
    },
    content: {
        path: () => new file(root.path(), 'Content').toString(),
        sass: {
            files: () => new file(root.content.path(), '/**/*.scss'),
            main: () => new file(root.content.path(), '/main.scss')
        },
        css: {
            files: () => new file(root.content.path(), '/**/*.css'),
            main: () => new file(root.content.path(), '/main.css')
        }
    },
    build: {
        path: () => new file(root.path(), 'build').toString(),
        scripts: {
            path: () => new file(root.build.path(), 'js'),
            templates: () => new file(root.build.scripts.path().toString(), 'templates.js')
        },
        localizations: {
            path: () => new file(root.build.path(), 'i18n').toString(),
            files: () => new file(root.build.localizations.path(), '/**/*.json')
        },
        images: {
            path: () => new file(root.build.path(), 'img').toString(),
            files: () => new file(root.build.images.path(), '/**/*')
        },
        fonts: {
            path: () => new file(root.build.path(), 'fonts').toString(),
            files: () => new file(root.build.fonts.path(), '/**/*')
        },
        views: {
            path: () => new file(root.build.path(), 'app').toString()
        },
        index: () => new file(root.build.path(), 'index.html'),
        styles: {
            path: () => new file(root.build.path(), 'css')
        },
        files: () => new file(root.build.path(), '/**/*')
    },
    deploy: {
        path: () => path.resolve('../public_html')
    }
};

export default root;