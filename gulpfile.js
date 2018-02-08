var gulp = require( 'gulp' );
var ftp = require('vinyl-ftp');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

gulp.task('deploy', function() {
  var remotePath = '/';
  var conn = ftp.create({
    host: args.host,
    user: args.user,
    password: args.password
  });
  gulp.src(['./dist/**'])
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});
