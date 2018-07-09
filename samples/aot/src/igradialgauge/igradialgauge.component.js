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
var igcontrolbase_1 = require("../igcontrolbase/igcontrolbase");
var IgRadialGaugeComponent = /** @class */ (function (_super) {
    __extends(IgRadialGaugeComponent, _super);
    function IgRadialGaugeComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Returns a string containing the names of all the ranges delimited with a \n symbol.
     */
    /**
         * Returns a string containing the names of all the ranges delimited with a \n symbol.
         */
    IgRadialGaugeComponent.prototype.getRangeNames = /**
         * Returns a string containing the names of all the ranges delimited with a \n symbol.
         */
    function () { return; };
    ;
    /**
     * Adds a new range to the radial gauge.
     *
     * @param value
     */
    /**
         * Adds a new range to the radial gauge.
         *
         * @param value
         */
    IgRadialGaugeComponent.prototype.addRange = /**
         * Adds a new range to the radial gauge.
         *
         * @param value
         */
    function (value) { return; };
    ;
    /**
     * Removes a specified range.
     *
     * @param value
     */
    /**
         * Removes a specified range.
         *
         * @param value
         */
    IgRadialGaugeComponent.prototype.removeRange = /**
         * Removes a specified range.
         *
         * @param value
         */
    function (value) { return; };
    ;
    /**
     * Updates the range.
     *
     * @param value
     */
    /**
         * Updates the range.
         *
         * @param value
         */
    IgRadialGaugeComponent.prototype.updateRange = /**
         * Updates the range.
         *
         * @param value
         */
    function (value) { return; };
    ;
    /**
     * Clears the ranges in the radial gauge.
     */
    /**
         * Clears the ranges in the radial gauge.
         */
    IgRadialGaugeComponent.prototype.clearRanges = /**
         * Clears the ranges in the radial gauge.
         */
    function () { return; };
    ;
    /**
     * Scales a value on the gauge's main scale to an angle around the center point of the gauge, in radians.
     *
     * @param value
     */
    /**
         * Scales a value on the gauge's main scale to an angle around the center point of the gauge, in radians.
         *
         * @param value
         */
    IgRadialGaugeComponent.prototype.scaleValue = /**
         * Scales a value on the gauge's main scale to an angle around the center point of the gauge, in radians.
         *
         * @param value
         */
    function (value) { return; };
    ;
    /**
     * Unscales a value from an angle in radians to the represented value along the main scale of the gauge.
     *
     * @param value
     */
    /**
         * Unscales a value from an angle in radians to the represented value along the main scale of the gauge.
         *
         * @param value
         */
    IgRadialGaugeComponent.prototype.unscaleValue = /**
         * Unscales a value from an angle in radians to the represented value along the main scale of the gauge.
         *
         * @param value
         */
    function (value) { return; };
    ;
    /**
     * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
     *
     * @param x
     * @param y
     */
    /**
         * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
         *
         * @param x
         * @param y
         */
    IgRadialGaugeComponent.prototype.getValueForPoint = /**
         * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
         *
         * @param x
         * @param y
         */
    function (x, y) { return; };
    ;
    /**
     * Gets the point on the gauge for a given scale value and extent.
     *
     * @param value
     * @param extent
     */
    /**
         * Gets the point on the gauge for a given scale value and extent.
         *
         * @param value
         * @param extent
         */
    IgRadialGaugeComponent.prototype.getPointForValue = /**
         * Gets the point on the gauge for a given scale value and extent.
         *
         * @param value
         * @param extent
         */
    function (value, extent) { return; };
    ;
    /**
     * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
     *
     * @param x
     * @param y
     */
    /**
         * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
         *
         * @param x
         * @param y
         */
    IgRadialGaugeComponent.prototype.needleContainsPoint = /**
         * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
         *
         * @param x
         * @param y
         */
    function (x, y) { return; };
    ;
    /**
     * Exports the visual data for the radial gauge.
     */
    /**
         * Exports the visual data for the radial gauge.
         */
    IgRadialGaugeComponent.prototype.exportVisualData = /**
         * Exports the visual data for the radial gauge.
         */
    function () { return; };
    ;
    /**
     * Flushes the gauge.
     */
    /**
         * Flushes the gauge.
         */
    IgRadialGaugeComponent.prototype.flush = /**
         * Flushes the gauge.
         */
    function () { return; };
    ;
    /**
     * Destroys widget.
     */
    /**
         * Destroys widget.
         */
    IgRadialGaugeComponent.prototype.destroy = /**
         * Destroys widget.
         */
    function () { return; };
    ;
    /**
     * Returns true if the style was updated for the radial gauge.
     */
    /**
         * Returns true if the style was updated for the radial gauge.
         */
    IgRadialGaugeComponent.prototype.styleUpdated = /**
         * Returns true if the style was updated for the radial gauge.
         */
    function () { return; };
    ;
    IgRadialGaugeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-radial-gauge",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "ranges", "rangeBrushes", "rangeOutlines", "minimumValue", "maximumValue", "interval", "centerX", "centerY", "value", "scaleStartAngle", "scaleEndAngle", "scaleSweepDirection", "transitionDuration", "transitionEasingFunction", "needleBrush", "needleOutline", "needleStartExtent", "needleEndExtent", "needleShape", "needleStartWidthRatio", "needleEndWidthRatio", "needleBaseFeatureWidthRatio", "needleBaseFeatureExtent", "needlePointFeatureWidthRatio", "needlePointFeatureExtent", "needlePivotWidthRatio", "needlePivotInnerWidthRatio", "needlePivotShape", "scaleStartExtent", "needlePivotBrush", "needlePivotOutline", "needleStrokeThickness", "needlePivotStrokeThickness", "scaleEndExtent", "labelExtent", "labelInterval", "tickStartExtent", "tickEndExtent", "tickStrokeThickness", "tickBrush", "fontBrush", "minorTickStartExtent", "minorTickEndExtent", "minorTickStrokeThickness", "minorTickBrush", "minorTickCount", "scaleBrush", "backingBrush", "backingOutline", "backingStrokeThickness", "backingOuterExtent", "backingOversweep", "scaleOversweep", "scaleOversweepShape", "backingCornerRadius", "backingInnerExtent", "backingShape", "radiusMultiplier", "duplicateLabelOmissionStrategy", "isNeedleDraggingEnabled", "isNeedleDraggingConstrained", "font", "transitionProgress", "pixelScalingRatio"],
                    outputs: ["formatLabel", "alignLabel", "valueChanged"]
                },] },
    ];
    /** @nocollapse */
    IgRadialGaugeComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgRadialGaugeComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgRadialGaugeComponent = IgRadialGaugeComponent;
//# sourceMappingURL=igradialgauge.component.js.map