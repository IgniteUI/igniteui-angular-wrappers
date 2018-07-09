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
var IgGridResizingFeature = /** @class */ (function (_super) {
    __extends(IgGridResizingFeature, _super);
    function IgGridResizingFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Destroys the resizing widget
     */
    /**
         * Destroys the resizing widget
         */
    IgGridResizingFeature.prototype.destroy = /**
         * Destroys the resizing widget
         */
    function () { return; };
    ;
    /**
     * Resizes a column to a specified width in pixels, percents or auto if no width is specified.
     *
     * @param column    An identifier for the column. If a number is provided it will be used as a columnIndex else if a strings is provided it will be used as a columnKey.
     * @param width    Width of the column in pixels or percents. If no width or "*" is specified the column will be auto-sized to the width of the data in it (including header and footer cells).
     */
    /**
         * Resizes a column to a specified width in pixels, percents or auto if no width is specified.
         *
         * @param column    An identifier for the column. If a number is provided it will be used as a columnIndex else if a strings is provided it will be used as a columnKey.
         * @param width    Width of the column in pixels or percents. If no width or "*" is specified the column will be auto-sized to the width of the data in it (including header and footer cells).
         */
    IgGridResizingFeature.prototype.resize = /**
         * Resizes a column to a specified width in pixels, percents or auto if no width is specified.
         *
         * @param column    An identifier for the column. If a number is provided it will be used as a columnIndex else if a strings is provided it will be used as a columnKey.
         * @param width    Width of the column in pixels or percents. If no width or "*" is specified the column will be auto-sized to the width of the data in it (including header and footer cells).
         */
    function (column, width) { return; };
    ;
    IgGridResizingFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'resizing',
                    inputs: ["disabled", "create", "allowDoubleClickToResize", "deferredResizing", "columnSettings", "handleThreshold", "inherit"],
                    outputs: ["columnResizing", "columnResizingRefused", "columnResized"]
                },] },
    ];
    /** @nocollapse */
    IgGridResizingFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridResizingFeature;
}(feature_1.Feature));
exports.IgGridResizingFeature = IgGridResizingFeature;
//# sourceMappingURL=iggridresizing.directive.js.map