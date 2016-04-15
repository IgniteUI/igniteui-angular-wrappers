System.register(['angular2/platform/browser', './samples'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, samples_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (samples_1_1) {
                samples_1 = samples_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(samples_1.AppComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map