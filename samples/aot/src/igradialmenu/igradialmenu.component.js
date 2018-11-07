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
    IgRadialMenuComponent = __decorate([
        core_1.Component({
            selector: "ig-radial-menu",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "items", "currentOpenMenuItemName", "centerButtonContentWidth", "centerButtonContentHeight", "centerButtonClosedFill", "centerButtonClosedStroke", "centerButtonFill", "centerButtonHotTrackFill", "centerButtonHotTrackStroke", "centerButtonStroke", "centerButtonStrokeThickness", "font", "isOpen", "menuBackground", "menuItemOpenCloseAnimationDuration", "menuItemOpenCloseAnimationEasingFunction", "menuOpenCloseAnimationDuration", "menuOpenCloseAnimationEasingFunction", "minWedgeCount", "outerRingFill", "outerRingThickness", "outerRingStroke", "outerRingStrokeThickness", "rotationInDegrees", "rotationAsPercentageOfWedge", "wedgePaddingInDegrees", "pixelScalingRatio"],
            outputs: ["formatLabel", "alignLabel", "valueChanged"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgRadialMenuComponent);
    return IgRadialMenuComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgRadialMenuComponent = IgRadialMenuComponent;
//# sourceMappingURL=igradialmenu.component.js.map