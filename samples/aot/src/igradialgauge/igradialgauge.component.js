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
    IgRadialGaugeComponent.prototype.getRangeNames = function () { return; };
    ;
    /**
     * Adds a new range to the radial gauge.
     *
     * @param value
     */
    IgRadialGaugeComponent.prototype.addRange = function (value) { return; };
    ;
    /**
     * Removes a specified range.
     *
     * @param value
     */
    IgRadialGaugeComponent.prototype.removeRange = function (value) { return; };
    ;
    /**
     * Updates the range.
     *
     * @param value
     */
    IgRadialGaugeComponent.prototype.updateRange = function (value) { return; };
    ;
    /**
     * Clears the ranges in the radial gauge.
     */
    IgRadialGaugeComponent.prototype.clearRanges = function () { return; };
    ;
    /**
     * Scales a value on the gauge's main scale to an angle around the center point of the gauge, in radians.
     *
     * @param value
     */
    IgRadialGaugeComponent.prototype.scaleValue = function (value) { return; };
    ;
    /**
     * Unscales a value from an angle in radians to the represented value along the main scale of the gauge.
     *
     * @param value
     */
    IgRadialGaugeComponent.prototype.unscaleValue = function (value) { return; };
    ;
    /**
     * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
     *
     * @param x
     * @param y
     */
    IgRadialGaugeComponent.prototype.getValueForPoint = function (x, y) { return; };
    ;
    /**
     * Gets the point on the gauge for a given scale value and extent.
     *
     * @param value
     * @param extent
     */
    IgRadialGaugeComponent.prototype.getPointForValue = function (value, extent) { return; };
    ;
    /**
     * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
     *
     * @param x
     * @param y
     */
    IgRadialGaugeComponent.prototype.needleContainsPoint = function (x, y) { return; };
    ;
    /**
     * Exports the visual data for the radial gauge.
     */
    IgRadialGaugeComponent.prototype.exportVisualData = function () { return; };
    ;
    /**
     * Flushes the gauge.
     */
    IgRadialGaugeComponent.prototype.flush = function () { return; };
    ;
    /**
     * Destroys widget.
     */
    IgRadialGaugeComponent.prototype.destroy = function () { return; };
    ;
    /**
     * Returns true if the style was updated for the radial gauge.
     */
    IgRadialGaugeComponent.prototype.styleUpdated = function () { return; };
    ;
    IgRadialGaugeComponent = __decorate([
        core_1.Component({
            selector: "ig-radial-gauge",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "ranges", "rangeBrushes", "rangeOutlines", "minimumValue", "maximumValue", "interval", "centerX", "centerY", "value", "scaleStartAngle", "scaleEndAngle", "scaleSweepDirection", "transitionDuration", "transitionEasingFunction", "needleBrush", "needleOutline", "needleStartExtent", "needleEndExtent", "needleShape", "needleStartWidthRatio", "needleEndWidthRatio", "needleBaseFeatureWidthRatio", "needleBaseFeatureExtent", "needlePointFeatureWidthRatio", "needlePointFeatureExtent", "needlePivotWidthRatio", "needlePivotInnerWidthRatio", "needlePivotShape", "scaleStartExtent", "needlePivotBrush", "needlePivotOutline", "needleStrokeThickness", "needlePivotStrokeThickness", "scaleEndExtent", "labelExtent", "labelInterval", "tickStartExtent", "tickEndExtent", "tickStrokeThickness", "tickBrush", "fontBrush", "minorTickStartExtent", "minorTickEndExtent", "minorTickStrokeThickness", "minorTickBrush", "minorTickCount", "scaleBrush", "backingBrush", "backingOutline", "backingStrokeThickness", "backingOuterExtent", "backingOversweep", "scaleOversweep", "scaleOversweepShape", "backingCornerRadius", "backingInnerExtent", "backingShape", "radiusMultiplier", "duplicateLabelOmissionStrategy", "isNeedleDraggingEnabled", "isNeedleDraggingConstrained", "font", "transitionProgress", "pixelScalingRatio"],
            outputs: ["formatLabel", "alignLabel", "valueChanged"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgRadialGaugeComponent);
    return IgRadialGaugeComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgRadialGaugeComponent = IgRadialGaugeComponent;
//# sourceMappingURL=igradialgauge.component.js.map