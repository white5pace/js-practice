var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    pug          = require('gulp-pug');

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: 'learn-javascript'
    },
    notify: false
  })
});

gulp.task('sass', function(){
  return gulp.src('learn-javascript/sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(gulp.dest('learn-javascript/styles'))
    .pipe(browserSync.stream())
});

gulp.task('pug', function() {
  return gulp.src(['./learn-javascript/**/*.pug', '!learn-javascript/components/*.pug'])
    .pipe(pug({
      pretty: true,
    }))
    .pipe(gulp.dest(function (file) {
        return file.base;
    }));
});

gulp.task('watch', function(){
  gulp.watch("learn-javascript/**/*.html").on('change', browserSync.reload);
  gulp.watch("learn-javascript/**/*.js").on('change', browserSync.reload);
  gulp.watch("learn-javascript/**/*.css").on('change', browserSync.reload);
  gulp.watch('learn-javascript/sass/*.scss', gulp.parallel('sass'));
  gulp.watch('learn-javascript/**/*.pug', gulp.parallel('pug'));
});

gulp.task('default', gulp.parallel('watch', 'browser-sync'));
