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
var IgRadialMenuComponent = /** @class */ (function (_super) {
    __extends(IgRadialMenuComponent, _super);
    function IgRadialMenuComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgRadialMenuComponent.prototype.itemOption = function (itemKey, key, value) { return; };
    ;
    IgRadialMenuComponent.prototype.exportVisualData = function () { return; };
    ;
    IgRadialMenuComponent.prototype.flush = function () { return; };
    ;
    IgRadialMenuComponent.prototype.destroy = function () { return; };
    ;
    IgRadialMenuComponent.prototype.styleUpdated = function () { return; };
    ;
    IgRadialMenuComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-radial-menu",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "items", "currentOpenMenuItemName", "centerButtonContentWidth", "centerButtonContentHeight", "centerButtonClosedFill", "centerButtonClosedStroke", "centerButtonFill", "centerButtonHotTrackFill", "centerButtonHotTrackStroke", "centerButtonStroke", "centerButtonStrokeThickness", "font", "isOpen", "menuBackground", "menuItemOpenCloseAnimationDuration", "menuItemOpenCloseAnimationEasingFunction", "menuOpenCloseAnimationDuration", "menuOpenCloseAnimationEasingFunction", "minWedgeCount", "outerRingFill", "outerRingThickness", "outerRingStroke", "outerRingStrokeThickness", "rotationInDegrees", "rotationAsPercentageOfWedge", "wedgePaddingInDegrees", "pixelScalingRatio"],
                    outputs: ["formatLabel", "alignLabel", "valueChanged"]
                },] },
    ];
    /** @nocollapse */
    IgRadialMenuComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgRadialMenuComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgRadialMenuComponent = IgRadialMenuComponent;
//# sourceMappingURL=igradialmenu.component.js.map