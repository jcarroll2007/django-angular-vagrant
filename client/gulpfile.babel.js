'use strict';

import gulp     from 'gulp';
import path     from 'path';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import yargs    from 'yargs';
import slash    from 'slash';

gulp.task('component', () => {
  const name = yargs.argv.name;
  const parentPath = yargs.argv.path;
  const outputPath = slash(path.join(__dirname, 'src', parentPath, name));

  return gulp.src('./generators/component/*.**')
    .pipe(template({
      name: name,
      path: slash(path.join(parentPath, name)),
      state: yargs.argv.state || name,
      moduleName: yargs.argv['module-name'] || name
    }))
    .pipe(rename((thePath) => {
      thePath.basename = thePath.basename.replace('component', name);
    }))
    .pipe(gulp.dest(outputPath));
});