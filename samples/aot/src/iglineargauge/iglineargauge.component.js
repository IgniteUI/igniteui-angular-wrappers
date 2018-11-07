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
var IgLinearGaugeComponent = /** @class */ (function (_super) {
    __extends(IgLinearGaugeComponent, _super);
    function IgLinearGaugeComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Returns a string containing the names of all the ranges delimited with a \n symbol.
     */
    IgLinearGaugeComponent.prototype.getRangeNames = function () { return; };
    ;
    /**
     * Adds a new range to the linear gauge.
     *
     * @param value     The range object to be added.
     */
    IgLinearGaugeComponent.prototype.addRange = function (value) { return; };
    ;
    /**
     * Removes a range from the linear gauge.
     *
     * @param value     A JS object with properties set as follows: name: nameOfTheRangeToRemove, remove: true
     */
    IgLinearGaugeComponent.prototype.removeRange = function (value) { return; };
    ;
    /**
     * Updates the specified range of the linear gauge.
     *
     * @param value     The range object to be updated.
     */
    IgLinearGaugeComponent.prototype.updateRange = function (value) { return; };
    ;
    /**
     * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
     *
     * @param x
     * @param y
     */
    IgLinearGaugeComponent.prototype.getValueForPoint = function (x, y) { return; };
    ;
    /**
     * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
     *
     * @param x The x coordinate of the point.
     * @param y The y coordinate of the point.
     */
    IgLinearGaugeComponent.prototype.needleContainsPoint = function (x, y) { return; };
    ;
    /**
     * Returns information about how the linear gauge is rendered.
     */
    IgLinearGaugeComponent.prototype.exportVisualData = function () { return; };
    ;
    /**
     * Causes all pending changes of the linear gauge e.g. by changed property values to be rendered immediately.
     */
    IgLinearGaugeComponent.prototype.flush = function () { return; };
    ;
    /**
     * Destroys widget.
     */
    IgLinearGaugeComponent.prototype.destroy = function () { return; };
    ;
    /**
     * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
     */
    IgLinearGaugeComponent.prototype.styleUpdated = function () { return; };
    ;
    IgLinearGaugeComponent = __decorate([
        core_1.Component({
            selector: "ig-linear-gauge",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "ranges", "rangeToolTipTemplate", "needleToolTipTemplate", "orientation", "rangeBrushes", "rangeOutlines", "minimumValue", "maximumValue", "value", "needleShape", "needleName", "rangeInnerExtent", "scaleInnerExtent", "rangeOuterExtent", "scaleOuterExtent", "needleInnerExtent", "needleOuterExtent", "needleInnerBaseWidth", "needleOuterBaseWidth", "needleInnerPointWidth", "needleOuterPointWidth", "needleInnerPointExtent", "needleOuterPointExtent", "interval", "ticksPostInitial", "ticksPreTerminal", "labelInterval", "labelExtent", "labelsPostInitial", "labelsPreTerminal", "minorTickCount", "tickStartExtent", "tickEndExtent", "tickStrokeThickness", "tickBrush", "fontBrush", "needleBreadth", "needleBrush", "needleOutline", "needleStrokeThickness", "minorTickStartExtent", "minorTickEndExtent", "minorTickStrokeThickness", "minorTickBrush", "isScaleInverted", "backingBrush", "backingOutline", "backingStrokeThickness", "backingInnerExtent", "backingOuterExtent", "scaleStartExtent", "scaleEndExtent", "scaleBrush", "scaleOutline", "scaleStrokeThickness", "isNeedleDraggingEnabled", "transitionDuration", "showToolTipTimeout", "showToolTip", "font", "pixelScalingRatio"],
            outputs: ["formatLabel", "alignLabel", "valueChanged"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgLinearGaugeComponent);
    return IgLinearGaugeComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgLinearGaugeComponent = IgLinearGaugeComponent;
//# sourceMappingURL=iglineargauge.component.js.map