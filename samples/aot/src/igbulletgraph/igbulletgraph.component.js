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
var IgBulletGraphComponent = /** @class */ (function (_super) {
    __extends(IgBulletGraphComponent, _super);
    function IgBulletGraphComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Returns a string containing the names of all the ranges delimited with a \n symbol.
     */
    IgBulletGraphComponent.prototype.getRangeNames = function () { return; };
    ;
    /**
     * Adds a new range to the bullet graph.
     *
     * @param value     The range object to be added.
     */
    IgBulletGraphComponent.prototype.addRange = function (value) { return; };
    ;
    /**
     * Removes a range from the bullet graph.
     *
     * @param value     A JS object with properties set as follows: name: nameOfTheRangeToRemove, remove: true
     */
    IgBulletGraphComponent.prototype.removeRange = function (value) { return; };
    ;
    /**
     * Updates the specified range of the bullet graph.
     *
     * @param value     The range object to be updated.
     */
    IgBulletGraphComponent.prototype.updateRange = function (value) { return; };
    ;
    /**
     * Returns information about how the bullet graph is rendered.
     */
    IgBulletGraphComponent.prototype.exportVisualData = function () { return; };
    ;
    /**
     * Causes all pending changes of the bullet graph e.g. by changed property values to be rendered immediately.
     */
    IgBulletGraphComponent.prototype.flush = function () { return; };
    ;
    /**
     * Destroys widget.
     */
    IgBulletGraphComponent.prototype.destroy = function () { return; };
    ;
    /**
     * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
     */
    IgBulletGraphComponent.prototype.styleUpdated = function () { return; };
    ;
    IgBulletGraphComponent = __decorate([
        core_1.Component({
            selector: "ig-bullet-graph",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "ranges", "rangeToolTipTemplate", "valueToolTipTemplate", "targetValueToolTipTemplate", "orientation", "rangeBrushes", "rangeOutlines", "minimumValue", "maximumValue", "targetValue", "targetValueName", "value", "valueName", "rangeInnerExtent", "rangeOuterExtent", "valueInnerExtent", "valueOuterExtent", "interval", "ticksPostInitial", "ticksPreTerminal", "labelInterval", "labelExtent", "labelsPostInitial", "labelsPreTerminal", "minorTickCount", "tickStartExtent", "tickEndExtent", "tickStrokeThickness", "tickBrush", "fontBrush", "valueBrush", "valueOutline", "valueStrokeThickness", "minorTickStartExtent", "minorTickEndExtent", "minorTickStrokeThickness", "minorTickBrush", "isScaleInverted", "backingBrush", "backingOutline", "backingStrokeThickness", "backingInnerExtent", "backingOuterExtent", "scaleStartExtent", "scaleEndExtent", "targetValueBrush", "targetValueBreadth", "targetValueInnerExtent", "targetValueOuterExtent", "targetValueOutline", "targetValueStrokeThickness", "transitionDuration", "showToolTipTimeout", "showToolTip", "font", "pixelScalingRatio"],
            outputs: ["formatLabel", "alignLabel"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgBulletGraphComponent);
    return IgBulletGraphComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgBulletGraphComponent = IgBulletGraphComponent;
//# sourceMappingURL=igbulletgraph.component.js.map