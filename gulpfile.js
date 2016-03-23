var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();


gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: "./"
	});

	// gulp.watch("./scss/*.scss", ['sass', 'sass-minify']).on('change', browserSync.reload);
	gulp.watch("./*.html").on('change', browserSync.reload);
	gulp.watch("./css/*.css").on('change', browserSync.reload);

});




gulp.task('sass', function(){
	gulp.src('./scss/look.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css/'))
	.pipe(browserSync.stream());
});

gulp.task('sass-minify', function(){
	gulp.src('./scss/look.scss')
	.pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('./css/minify/'));
});




gulp.task('watch', function(){
	gulp.watch('scss/**/*.scss', ['sass', 'sass-minify']);
});

gulp.task('default', ['serve', 'watch'], function(){
	
});