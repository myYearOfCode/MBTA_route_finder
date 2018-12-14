var gulp = require('gulp')
watch = require('gulp-watch')

gulp.task('default', function(){
  console.log("Hooray, you created a Gulp task.");
});

gulp.task('html', function(){
  console.log("imagine something useful being done here.");
})

gulp.task('watch', function(){
  watch('./index.html', function(){
    gulp.start('html');
  });
});
