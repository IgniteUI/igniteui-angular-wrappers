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
var IgBulletGraphComponent = /** @class */ (function (_super) {
    __extends(IgBulletGraphComponent, _super);
    function IgBulletGraphComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Returns a string containing the names of all the ranges delimited with a \n symbol.
     */
    /**
         * Returns a string containing the names of all the ranges delimited with a \n symbol.
         */
    IgBulletGraphComponent.prototype.getRangeNames = /**
         * Returns a string containing the names of all the ranges delimited with a \n symbol.
         */
    function () { return; };
    ;
    /**
     * Adds a new range to the bullet graph.
     *
     * @param value     The range object to be added.
     */
    /**
         * Adds a new range to the bullet graph.
         *
         * @param value     The range object to be added.
         */
    IgBulletGraphComponent.prototype.addRange = /**
         * Adds a new range to the bullet graph.
         *
         * @param value     The range object to be added.
         */
    function (value) { return; };
    ;
    /**
     * Removes a range from the bullet graph.
     *
     * @param value     A JS object with properties set as follows: name: nameOfTheRangeToRemove, remove: true
     */
    /**
         * Removes a range from the bullet graph.
         *
         * @param value     A JS object with properties set as follows: name: nameOfTheRangeToRemove, remove: true
         */
    IgBulletGraphComponent.prototype.removeRange = /**
         * Removes a range from the bullet graph.
         *
         * @param value     A JS object with properties set as follows: name: nameOfTheRangeToRemove, remove: true
         */
    function (value) { return; };
    ;
    /**
     * Updates the specified range of the bullet graph.
     *
     * @param value     The range object to be updated.
     */
    /**
         * Updates the specified range of the bullet graph.
         *
         * @param value     The range object to be updated.
         */
    IgBulletGraphComponent.prototype.updateRange = /**
         * Updates the specified range of the bullet graph.
         *
         * @param value     The range object to be updated.
         */
    function (value) { return; };
    ;
    /**
     * Returns information about how the bullet graph is rendered.
     */
    /**
         * Returns information about how the bullet graph is rendered.
         */
    IgBulletGraphComponent.prototype.exportVisualData = /**
         * Returns information about how the bullet graph is rendered.
         */
    function () { return; };
    ;
    /**
     * Causes all pending changes of the bullet graph e.g. by changed property values to be rendered immediately.
     */
    /**
         * Causes all pending changes of the bullet graph e.g. by changed property values to be rendered immediately.
         */
    IgBulletGraphComponent.prototype.flush = /**
         * Causes all pending changes of the bullet graph e.g. by changed property values to be rendered immediately.
         */
    function () { return; };
    ;
    /**
     * Destroys widget.
     */
    /**
         * Destroys widget.
         */
    IgBulletGraphComponent.prototype.destroy = /**
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
    IgBulletGraphComponent.prototype.styleUpdated = /**
         * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
         */
    function () { return; };
    ;
    IgBulletGraphComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-bullet-graph",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "ranges", "rangeToolTipTemplate", "valueToolTipTemplate", "targetValueToolTipTemplate", "orientation", "rangeBrushes", "rangeOutlines", "minimumValue", "maximumValue", "targetValue", "targetValueName", "value", "valueName", "rangeInnerExtent", "rangeOuterExtent", "valueInnerExtent", "valueOuterExtent", "interval", "ticksPostInitial", "ticksPreTerminal", "labelInterval", "labelExtent", "labelsPostInitial", "labelsPreTerminal", "minorTickCount", "tickStartExtent", "tickEndExtent", "tickStrokeThickness", "tickBrush", "fontBrush", "valueBrush", "valueOutline", "valueStrokeThickness", "minorTickStartExtent", "minorTickEndExtent", "minorTickStrokeThickness", "minorTickBrush", "isScaleInverted", "backingBrush", "backingOutline", "backingStrokeThickness", "backingInnerExtent", "backingOuterExtent", "scaleStartExtent", "scaleEndExtent", "targetValueBrush", "targetValueBreadth", "targetValueInnerExtent", "targetValueOuterExtent", "targetValueOutline", "targetValueStrokeThickness", "transitionDuration", "showToolTipTimeout", "showToolTip", "font", "pixelScalingRatio"],
                    outputs: ["formatLabel", "alignLabel"]
                },] },
    ];
    /** @nocollapse */
    IgBulletGraphComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgBulletGraphComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgBulletGraphComponent = IgBulletGraphComponent;
//# sourceMappingURL=igbulletgraph.component.js.map