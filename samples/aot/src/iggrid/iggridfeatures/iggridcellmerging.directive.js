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
var core_1 = require("@angular/core");
var feature_1 = require("../feature");
var IgGridCellMergingFeature = /** @class */ (function (_super) {
    __extends(IgGridCellMergingFeature, _super);
    function IgGridCellMergingFeature(el) {
        return _super.call(this, el) || this;
    }
    IgGridCellMergingFeature.prototype.destroy = function () { return; };
    ;
    IgGridCellMergingFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'cell-merging',
                    inputs: ["disabled", "create", "initialState", "inherit"],
                    outputs: ["cellsMerging", "cellsMerged"]
                },] },
    ];
    /** @nocollapse */
    IgGridCellMergingFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridCellMergingFeature;
}(feature_1.Feature));
exports.IgGridCellMergingFeature = IgGridCellMergingFeature;
//# sourceMappingURL=iggridcellmerging.directive.js.map