"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var feature_1 = require("../feature");
var core_1 = require("@angular/core");
var IgGridAppendRowsOnDemandFeature = /** @class */ (function (_super) {
    __extends(IgGridAppendRowsOnDemandFeature, _super);
    function IgGridAppendRowsOnDemandFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
      * Destroys the append rows on demand widget
     */
    /**
          * Destroys the append rows on demand widget
         */
    IgGridAppendRowsOnDemandFeature.prototype.destroy = /**
          * Destroys the append rows on demand widget
         */
    function () { return; };
    ;
    /**
      * Loads the next chunk of data.
     */
    /**
          * Loads the next chunk of data.
         */
    IgGridAppendRowsOnDemandFeature.prototype.nextChunk = /**
          * Loads the next chunk of data.
         */
    function () { return; };
    ;
    IgGridAppendRowsOnDemandFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'append-rows-on-demand',
                    inputs: ["type", "chunkSize", "recordCountKey", "chunkSizeUrlKey", "chunkIndexUrlKey", "defaultChunkIndex", "currentChunkIndex", "loadTrigger", "loadMoreDataButtonText"],
                    outputs: ["rowsRequesting", "rowsRequested"]
                },] },
    ];
    /** @nocollapse */
    IgGridAppendRowsOnDemandFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridAppendRowsOnDemandFeature;
}(feature_1.Feature));
exports.IgGridAppendRowsOnDemandFeature = IgGridAppendRowsOnDemandFeature;
//# sourceMappingURL=iggridappendrowsondemand.directive.js.map