var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./app/inputs/sass/all.scss').pipe(sass()).pipe(gulp.dest('./app/inputs/'))
});

gulp.task('watch',function(){
    gulp.watch('./app/inputs/sass/all.scss',['sass']);
});
gulp.task('default', ['sass','watch']);