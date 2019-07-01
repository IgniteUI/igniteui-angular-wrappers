// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    files: [
        'http://code.jquery.com/jquery-1.12.3.js',
        'http://code.jquery.com/ui/1.10.3/jquery-ui.min.js',
        'http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.core.js',
        'http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.lob.js',
        'http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.dv.js'
    ],
    crossOriginAttribute: false,
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../coverage/igniteui-angular-wrappers'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
