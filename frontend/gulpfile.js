var gulp = require( 'gulp' );
var ftp = require('vinyl-ftp');
var minimist = require('minimist');
var googleWebFonts = require('gulp-google-webfonts');

var args = minimist(process.argv.slice(2));

/*
* FTP Deploy
*/

gulp.task('deploy', function() {
  if (args.branch == 'master') {
    //Deploy to FTP
    console.log('Deploying...');
    var remotePath = '/';
    var conn = ftp.create({
      host: args.host,
      user: args.user,
      password: args.password
    });
    gulp.src(['./dist/**'])
      .pipe(conn.newer(remotePath))
      .pipe(conn.dest(remotePath));
    console.log('Deployed!');
  } else {
    console.log('Skipping deploy...');
  }
});

/*
* Local Fonts
*/

var options = {
  fontsDir: '',
  cssDir: '',
  cssFilename: 'fonts.css'
};

gulp.task('fonts', function () {
  return gulp.src('./fonts.list')
    .pipe(googleWebFonts(options))
    .pipe(gulp.dest('./src/assets/fonts'))
    ;
});
