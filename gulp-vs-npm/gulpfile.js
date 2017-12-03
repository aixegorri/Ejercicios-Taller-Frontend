const gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', () => {
	return gulp
		.src( './styles.scss' )
		.pipe( sass() )
		.pipe( gulp.dest('./') )
});

gulp.task('default', ['sass'], () => {
	gulp.watch('./styles.scss', ['sass'])
})