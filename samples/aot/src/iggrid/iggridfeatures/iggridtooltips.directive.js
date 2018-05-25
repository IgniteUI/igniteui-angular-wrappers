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
var IgGridTooltipsFeature = /** @class */ (function (_super) {
    __extends(IgGridTooltipsFeature, _super);
    function IgGridTooltipsFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Destroys the tooltip widget.
     */
    /**
         * Destroys the tooltip widget.
         */
    IgGridTooltipsFeature.prototype.destroy = /**
         * Destroys the tooltip widget.
         */
    function () { return; };
    ;
    /**
     * Returns the ID of the parent div element bounding the ruler and the tooltip container
     */
    /**
         * Returns the ID of the parent div element bounding the ruler and the tooltip container
         */
    IgGridTooltipsFeature.prototype.id = /**
         * Returns the ID of the parent div element bounding the ruler and the tooltip container
         */
    function () { return; };
    ;
    IgGridTooltipsFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'tooltips',
                    inputs: ["disabled", "create", "visibility", "style", "showDelay", "hideDelay", "columnSettings", "fadeTimespan", "cursorLeftOffset", "cursorTopOffset", "inherit"],
                    outputs: ["tooltipShowing", "tooltipShown", "tooltipHiding", "tooltipHidden"]
                },] },
    ];
    /** @nocollapse */
    IgGridTooltipsFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridTooltipsFeature;
}(feature_1.Feature));
exports.IgGridTooltipsFeature = IgGridTooltipsFeature;
//# sourceMappingURL=iggridtooltips.directive.js.map