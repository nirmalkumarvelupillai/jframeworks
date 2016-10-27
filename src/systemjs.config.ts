(function(global){
    var config = {
        map: {
            'app':'dist',
            '@angular': 'node_modules/@angular',
            'rxjs': 'node_modules/rxjs'
        },
        packages: {
            'dist': { main: 'boot.js', defaultExtension: 'js' },
            'rxjs': { defaultExtension: 'js' },
        }
    };

    [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ].forEach(pkgName=>config.packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' });

    System.config(config);
    
})(this);