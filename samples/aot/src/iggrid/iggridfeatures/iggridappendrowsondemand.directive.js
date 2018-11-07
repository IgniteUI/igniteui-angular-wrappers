"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    IgGridAppendRowsOnDemandFeature.prototype.destroy = function () { return; };
    ;
    /**
      * Loads the next chunk of data.
     */
    IgGridAppendRowsOnDemandFeature.prototype.nextChunk = function () { return; };
    ;
    IgGridAppendRowsOnDemandFeature = __decorate([
        core_1.Directive({
            selector: 'append-rows-on-demand',
            inputs: ["type", "chunkSize", "recordCountKey", "chunkSizeUrlKey", "chunkIndexUrlKey", "defaultChunkIndex", "currentChunkIndex", "loadTrigger", "loadMoreDataButtonText"],
            outputs: ["rowsRequesting", "rowsRequested"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IgGridAppendRowsOnDemandFeature);
    return IgGridAppendRowsOnDemandFeature;
}(feature_1.Feature));
exports.IgGridAppendRowsOnDemandFeature = IgGridAppendRowsOnDemandFeature;
//# sourceMappingURL=iggridappendrowsondemand.directive.js.map