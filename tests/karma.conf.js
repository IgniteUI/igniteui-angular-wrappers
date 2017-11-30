module.exports = function(config){
    var cfg = {
        basePath : '../',

        frameworks: ['jasmine'],

        files : [
            
            'http://code.jquery.com/jquery-1.12.3.js',
            'http://code.jquery.com/ui/1.10.3/jquery-ui.min.js',
            'http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.core.js',
            'http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.lob.js',
            'http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.dv.js',
            'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js',


            { pattern: 'node_modules/traceur/bin/traceur.js', included: true, watched: false },
            { pattern: 'node_modules/traceur/bin/traceur.js.map', included: false, watched: false },
            // System.js for module loading
            'node_modules/systemjs/dist/system.src.js',

            // Polyfills
            'node_modules/core-js/client/shim.js',
            'node_modules/reflect-metadata/Reflect.js',

            // zone.js
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/proxy.js',
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

            // Paths loaded via module imports:
            // Angular itself
            {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},

            // Angular and RxJS

            'tests/karma-test-shim.js',

            { pattern: 'samples/data/*.js', included: false, watched: false },
            { pattern: 'samples/data/*.js.map', included: false, watched: false },

            { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

            // paths loaded via module imports
            { pattern: 'dist/npm/**/*.*', included: false, watched: true },
            
            // spec files need to be loaded in the shim file IN CONTEXT of the main module, don't include:            
            { pattern: 'tests/unit/**/*.js', included: false, watched: false },
            { pattern: 'tests/unit/**/*.js.map', included: false, watched: false }
        ],

        // list of files to exclude
        exclude: [
            'node_modules/**/*spec.js'
        ],

        autoWatch : true,

        browsers : ['Chrome'],

        singleRun: true,

        customLaunchers: {
                Chrome_travis_ci: {
                        base: 'Chrome',
                        flags: ['--no-sandbox']
                }
        },

        plugins : [
                    'karma-chrome-launcher',
                    'karma-jasmine',
                    'karma-junit-reporter',
                    'karma-coverage'
                    ],
                    
        reporters: ['progress', 'coverage'],

        preprocessors: {
            'dist/npm/**/*.js': ['coverage']
        },

        coverageReporter: {
            reporters:[
                { type: 'lcov', dir:'coverage/karma-tmp/' },
                { type: 'json', dir:'coverage/karma-tmp', file: 'coverage.json' }
            ],
        },

        browserNoActivityTimeout: 20000
    };

    if (process.env.TRAVIS) {
        cfg.browsers = ['Chrome_travis_ci'];
    }
    config.set(cfg);
};
