import * as gulp from 'gulp';
var inject = require('gulp-inject');
import file from '../components/FilePath';
import Path = require('path');
import root from '../routes';

export default function pipelineFunction() {

    let transform = (filepath, file, index, length) => {
        var path = Path.normalize('.' + filepath);
        var application = Path.normalize(root.path());
        var tsfile = Path.relative(application, path);
        var jsfile = tsfile.replace(/\\/g, '/').replace('.ts', '.js');
        return `+script("${jsfile}")`;
    };

    var controllerOptions = {
        starttag: '//controllers',
        endtag: '//end-controllers',
        transform: transform
    };

    var serviceOptions = {
        starttag: '//services',
        endtag: '//end-services',
        transform: transform
    };

    var configOptions = {
        starttag: '//configs',
        endtag: '//end-configs',
        transform: transform
    };

    var entityOptions = {
        starttag: '//entities',
        endtag: '//end-entities',
        transform: transform
    };

    var directiveOptions = {
        starttag: '//directives',
        endtag: '//end-directives',
        transform: transform
    };

    var application = root.application;
    var controller = new file(application.path(), '/controllers/**/*.ts');
    var service = new file(application.path(), '/services/**/*.ts');
    var config = new file(application.path(), '/configs/**/*.ts');
    var entity = new file(application.path(), '/entities/**/*.ts');
    var directive = new file(application.path(), '/directives/**/*.ts');

    var controllerSource: string[] = [
        controller.toString(),
        new file(application.path(), '/**/*.d.ts').Not()
    ];

    var serviceSource: string[] = [
        service.toString(),
        new file(application.path(), '/**/*.d.ts').Not()
    ];

    var configSource: string[] = [
        config.toString(),
        new file(application.path(), '/**/*.d.ts').Not()
    ];

    var entitySource: string[] = [
        entity.toString(),
        new file(application.path(), '/**/*.d.ts').Not()
    ];

    var directiveSource: string[] = [
        directive.toString(),
        new file(application.path(), '/**/*.d.ts').Not()
    ];

    return gulp.src(root.application.jadeScripts().toString())
        .pipe(inject(gulp.src(controllerSource, { read: false }), controllerOptions))
        .pipe(inject(gulp.src(serviceSource, { read: false }), serviceOptions))
        .pipe(inject(gulp.src(configSource, { read: false }), configOptions))
        .pipe(inject(gulp.src(entitySource, { read: false }), entityOptions))
        .pipe(inject(gulp.src(directiveSource, { read: false }), directiveOptions))
        .pipe(gulp.dest(root.path()));
};