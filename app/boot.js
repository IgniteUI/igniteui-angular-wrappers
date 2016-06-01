System.register(['@angular/platform-browser-dynamic', './samples'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, samples_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (samples_1_1) {
                samples_1 = samples_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(samples_1.AppComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map