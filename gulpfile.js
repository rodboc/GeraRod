var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./dev"
    });

    gulp.watch("dev/resources/scss/*.scss", ['sass']);
    gulp.watch("dev/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("dev/resources/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dev/assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);