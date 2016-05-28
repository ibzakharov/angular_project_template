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

    var jsOptions = {
        starttag: '//js',
        endtag: '//end-js',
        transform: transform
    };

    var application = root.application;
    var controller = new file(application.path(), '/js/**/*.ts');

    var controllerSource: string[] = [
        controller.toString(),
        new file(application.path(), '/**/*.d.ts').Not()
    ];

    return gulp.src(root.application.jadeScripts().toString())
        .pipe(inject(gulp.src(controllerSource, { read: false }), jsOptions))
        .pipe(gulp.dest(root.path()));
};