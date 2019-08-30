var gulp         = require('gulp'),
    browserSync  = require('browser-sync');

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: 'learn-javascript'
    },
    notify: false
  })
});

gulp.task('watch', function(){
  gulp.watch("learn-javascript/**/*.html").on('change', browserSync.reload);
  gulp.watch("learn-javascript/**/*.js").on('change', browserSync.reload);
  gulp.watch("learn-javascript/**/*.css").on('change', browserSync.reload);
});
gulp.task('default', gulp.parallel('watch', 'browser-sync'));
