'use strict';

import gulp     from 'gulp';
import path     from 'path';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import yargs    from 'yargs';
import slash    from 'slash';
import _        from 'lodash';

let base = 'src';


/**
 * extraArgs: an array of strings that will be piped through to the templating system.
 */
class Generator {
    constructor(type, extraArgs) {
        this.type = type;
        this.base = path.join(base, (type + 's'));
        this.src = path.join('./generators', this.type, '*.**');
        this.extraArgs = extraArgs;
    }

    getArguments() {
        const args = {
            'name': yargs.argv.name,
            'path': yargs.argv.path || '',
            'moduleName': yargs.argv.name || yargs.argv.name,
        };

        _.forEach(this.extraArgs, (arg) => {
            args[arg] = yargs.argv[arg] || '';
        });

        return args;
    }

    run() {
        const self = this,
            args = this.getArguments(),
            outputPath = slash(path.join(
                __dirname,
                this.base,
                args.path,
                args.name,
            ));

        return gulp.src(this.src)
            .pipe(template(args))
            .pipe(rename((_path) => {
                _path.basename = _path.basename
                    .replace(('base-' + self.type), args.name);
            }))
            .pipe(gulp.dest(outputPath));
    }
}

gulp.task('component', () => {
    const generator = new Generator('component');
    return generator.run();
});

gulp.task('view', () => {
    const generator = new Generator('view', ['ribbon']);
    return generator.run();
});