var gulp = require('gulp') ;
var sass = require('gulp-sass') ;

// sass compiler: runs through the list of clients,
gulp.task('sass', function () {
    console.log('compiling css... ' )
    gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});


gulp.task('watch', function(){
  console.log('starting sass watch...')
  gulp.watch('./scss/**/*.scss', ['sass'])
});

gulp.task('default',  ['watch', 'sass']) ;
