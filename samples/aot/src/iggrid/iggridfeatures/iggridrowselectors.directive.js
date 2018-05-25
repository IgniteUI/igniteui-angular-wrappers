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
var IgGridRowSelectorsFeature = /** @class */ (function (_super) {
    __extends(IgGridRowSelectorsFeature, _super);
    function IgGridRowSelectorsFeature(el) {
        return _super.call(this, el) || this;
    }
    IgGridRowSelectorsFeature.prototype.destroy = function () { return; };
    ;
    IgGridRowSelectorsFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'row-selectors',
                    inputs: ["disabled", "create", "enableRowNumbering", "enableCheckBoxes", "rowNumberingSeed", "rowSelectorColumnWidth", "requireSelection", "showCheckBoxesOnFocus", "inherit", "enableSelectAllForPaging", "selectAllForPagingTemplate", "deselectAllForPagingTemplate"],
                    outputs: ["rowSelectorClicked", "checkBoxStateChanging", "checkBoxStateChanged"]
                },] },
    ];
    /** @nocollapse */
    IgGridRowSelectorsFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridRowSelectorsFeature;
}(feature_1.Feature));
exports.IgGridRowSelectorsFeature = IgGridRowSelectorsFeature;
//# sourceMappingURL=iggridrowselectors.directive.js.map