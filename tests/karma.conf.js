module.exports = function(config){
	config.set({

		basePath : '../',

		files : [
			
			"http://code.jquery.com/jquery-1.12.3.js",
			"http://code.jquery.com/ui/1.10.3/jquery-ui.min.js",
			"http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.core.js",
			"http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.lob.js",
			"https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js",

            // IE required polyfills, in this exact order
            "node_modules/es6-shim/es6-shim.min.js",
            "node_modules/systemjs/dist/system-polyfills.js",

            "node_modules/angular2/bundles/angular2-polyfills.js",
            "node_modules/systemjs/dist/system.src.js",
            "node_modules/rxjs/bundles/Rx.js",
            "node_modules/angular2/bundles/angular2.dev.js",
            'tests/karma-test-shim.js',
            
            { pattern: 'node_modules/angular2/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'src/**/*', included: false, watched: false },
            
            // spec files need to be loaded in the shim file IN CONTEXT of the main module, don't include:            
            { pattern: 'tests/unit/**/*.js', included: false, watched: true }
            
		],
            
        // list of files to exclude
        exclude: [
            'node_modules/angular2/**/*spec.js'
        ],

		autoWatch : true,

		frameworks: ['jasmine'],

		browsers : ['Chrome'],

		plugins : [
                    'karma-chrome-launcher',
                    'karma-jasmine'
                    // ,
                    // 'karma-junit-reporter'
                    ],

		/*junitReporter : {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}*/

	});
};
