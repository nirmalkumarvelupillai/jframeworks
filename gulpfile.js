var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');

var bs = require('browser-sync').create();
var server = require( 'gulp-develop-server' );

gulp.task('build',function(){
    console.log("Start build process for JFrameworks...");

    // compile typescript files
    var tsProject = ts.createProject(path.resolve('tsconfig.json'));
    gulp.src(path.resolve('./src/**/*.ts'))
        .pipe(tsProject())
        .js
        .pipe(gulp.dest(path.resolve('./dist')));    
});

gulp.task('copy-assets',function(){
    // copy of assets
    gulp.src(['js','css','html','jpeg','png'].map(ext=>path.resolve('./src/**/*.'+ext)))
        .pipe(gulp.dest(path.resolve('./dist/')));
});

gulp.task('ts-watcher',['build'],function(done){
    bs.reload();
    done();
});

gulp.task('asset-watcher',['copy-assets'],function(done){
    bs.reload();
    done();
});

gulp.task('serve',['build','copy-assets'],function(){

    var tswatcher = gulp.watch(path.resolve('./src/**/*.ts'), ['ts-watcher']);
    tswatcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

    var assetwatcher = gulp.watch(
                            [
                                'js',
                                'css',
                                'html',
                                'jpeg',
                                'png'
                            ].map(ext=>path.resolve('./src/**/*.'+ext))
                            , ['asset-watcher']
                        );
    assetwatcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

});

 
// run server 
gulp.task( 'server:start', ['serve'], function() {
    server.listen( { path: './index.js' } ,function(error){
        if( ! error ) bs.init({proxy: 'http://localhost:9000'});
    });
});
 
// restart server if app.js changed 
gulp.task( 'server:restart', function() {
    server.restart( function( error ) {
        if( ! error ) bs.reload();
    });
});


gulp.task('default', ['server:start'],function(){
    console.log("Project start");

    gulp.watch( [ './index.js' ], ['server:restart']);
});