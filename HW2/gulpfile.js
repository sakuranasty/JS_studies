const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const less = require('gulp-less');



function styles(){
	return gulp.src('./src/precss/styles.less')
			   .pipe(less())
			   /*.pipe(concat('main.css'))
			   .pipe(autoprefixer({
		            browsers: ['>0.1%'],
		            cascade: false
		        }))
			   .pipe(cleanCSS({
			   		level: 2
			   	}))*/
			   .pipe(gulp.dest('./src/css'))
			   .pipe(browserSync.stream());

};

gulp.task('styles', styles); 

gulp.task('watch', function(){
	browserSync.init({
        server: {
            baseDir: "./src"
        }
    });

	gulp.watch('./src/precss/**/*.less', styles);
});
