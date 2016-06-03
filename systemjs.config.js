(function(global) {
  var ngVer = '@2.0.0-rc.1';
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
    'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api',
    '@angular':                   'https://npmcdn.com/@angular'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        {main: 'boot.ts', defaultExtension: 'ts'},
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };
  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];
  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    map[pkgName] = 'https://npmcdn.com/' + pkgName + ngVer;
  });
  var config = {
    map: map,
    packages: packages,
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true}
  }
  System.config(config);
})(this);