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
var IgLinearGaugeComponent = /** @class */ (function (_super) {
    __extends(IgLinearGaugeComponent, _super);
    function IgLinearGaugeComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Returns a string containing the names of all the ranges delimited with a \n symbol.
     */
    /**
         * Returns a string containing the names of all the ranges delimited with a \n symbol.
         */
    IgLinearGaugeComponent.prototype.getRangeNames = /**
         * Returns a string containing the names of all the ranges delimited with a \n symbol.
         */
    function () { return; };
    ;
    /**
     * Adds a new range to the linear gauge.
     *
     * @param value     The range object to be added.
     */
    /**
         * Adds a new range to the linear gauge.
         *
         * @param value     The range object to be added.
         */
    IgLinearGaugeComponent.prototype.addRange = /**
         * Adds a new range to the linear gauge.
         *
         * @param value     The range object to be added.
         */
    function (value) { return; };
    ;
    /**
     * Removes a range from the linear gauge.
     *
     * @param value     A JS object with properties set as follows: name: nameOfTheRangeToRemove, remove: true
     */
    /**
         * Removes a range from the linear gauge.
         *
         * @param value     A JS object with properties set as follows: name: nameOfTheRangeToRemove, remove: true
         */
    IgLinearGaugeComponent.prototype.removeRange = /**
         * Removes a range from the linear gauge.
         *
         * @param value     A JS object with properties set as follows: name: nameOfTheRangeToRemove, remove: true
         */
    function (value) { return; };
    ;
    /**
     * Updates the specified range of the linear gauge.
     *
     * @param value     The range object to be updated.
     */
    /**
         * Updates the specified range of the linear gauge.
         *
         * @param value     The range object to be updated.
         */
    IgLinearGaugeComponent.prototype.updateRange = /**
         * Updates the specified range of the linear gauge.
         *
         * @param value     The range object to be updated.
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
    IgLinearGaugeComponent.prototype.getValueForPoint = /**
         * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
         *
         * @param x
         * @param y
         */
    function (x, y) { return; };
    ;
    /**
     * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
     *
     * @param x The x coordinate of the point.
     * @param y The y coordinate of the point.
     */
    /**
         * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
         *
         * @param x The x coordinate of the point.
         * @param y The y coordinate of the point.
         */
    IgLinearGaugeComponent.prototype.needleContainsPoint = /**
         * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
         *
         * @param x The x coordinate of the point.
         * @param y The y coordinate of the point.
         */
    function (x, y) { return; };
    ;
    /**
     * Returns information about how the linear gauge is rendered.
     */
    /**
         * Returns information about how the linear gauge is rendered.
         */
    IgLinearGaugeComponent.prototype.exportVisualData = /**
         * Returns information about how the linear gauge is rendered.
         */
    function () { return; };
    ;
    /**
     * Causes all pending changes of the linear gauge e.g. by changed property values to be rendered immediately.
     */
    /**
         * Causes all pending changes of the linear gauge e.g. by changed property values to be rendered immediately.
         */
    IgLinearGaugeComponent.prototype.flush = /**
         * Causes all pending changes of the linear gauge e.g. by changed property values to be rendered immediately.
         */
    function () { return; };
    ;
    /**
     * Destroys widget.
     */
    /**
         * Destroys widget.
         */
    IgLinearGaugeComponent.prototype.destroy = /**
         * Destroys widget.
         */
    function () { return; };
    ;
    /**
     * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
     */
    /**
         * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
         */
    IgLinearGaugeComponent.prototype.styleUpdated = /**
         * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
         */
    function () { return; };
    ;
    IgLinearGaugeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-linear-gauge",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "ranges", "rangeToolTipTemplate", "needleToolTipTemplate", "orientation", "rangeBrushes", "rangeOutlines", "minimumValue", "maximumValue", "value", "needleShape", "needleName", "rangeInnerExtent", "scaleInnerExtent", "rangeOuterExtent", "scaleOuterExtent", "needleInnerExtent", "needleOuterExtent", "needleInnerBaseWidth", "needleOuterBaseWidth", "needleInnerPointWidth", "needleOuterPointWidth", "needleInnerPointExtent", "needleOuterPointExtent", "interval", "ticksPostInitial", "ticksPreTerminal", "labelInterval", "labelExtent", "labelsPostInitial", "labelsPreTerminal", "minorTickCount", "tickStartExtent", "tickEndExtent", "tickStrokeThickness", "tickBrush", "fontBrush", "needleBreadth", "needleBrush", "needleOutline", "needleStrokeThickness", "minorTickStartExtent", "minorTickEndExtent", "minorTickStrokeThickness", "minorTickBrush", "isScaleInverted", "backingBrush", "backingOutline", "backingStrokeThickness", "backingInnerExtent", "backingOuterExtent", "scaleStartExtent", "scaleEndExtent", "scaleBrush", "scaleOutline", "scaleStrokeThickness", "isNeedleDraggingEnabled", "transitionDuration", "showToolTipTimeout", "showToolTip", "font", "pixelScalingRatio"],
                    outputs: ["formatLabel", "alignLabel", "valueChanged"]
                },] },
    ];
    /** @nocollapse */
    IgLinearGaugeComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgLinearGaugeComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgLinearGaugeComponent = IgLinearGaugeComponent;
//# sourceMappingURL=iglineargauge.component.js.map