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
var igcontentcontrolbase_1 = require("../igcontrolbase/igcontentcontrolbase");
var IgLayoutManagerComponent = /** @class */ (function (_super) {
    __extends(IgLayoutManagerComponent, _super);
    function IgLayoutManagerComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Triggers recalculation of the layout dimensions. Layouts may not need to be reflowed manually, if their sizes are in percentages (i.e. they are responsive by default)
     *                     this can be particularly useful with a grid layout, when the container has percentage sizes, but items are calculated in pixels and positioned absolutely in the container.
     *
     * @param forceReflow Indicates whether the reflow should be forced. Useful in cases where the items size and position was changed manually.
     * @param animationDuration The animation duration to be used for this reflow only. Supported only for Grid Layout mode.
     * @param event Indicates the browser even which triggered this action (not API).
     */
    IgLayoutManagerComponent.prototype.reflow = function (forceReflow, animationDuration, event) { return; };
    ;
    /**
     * Destroy is part of the jQuery UI widget API and does the following:
     *                     1. Remove custom CSS classes that were added.
     *                     2. Remove any elements that were added at widget's initialization and after that, which didn't below to the original markup
     *                     3. Unbind all events that were bound.
     */
    IgLayoutManagerComponent.prototype.destroy = function () { return; };
    ;
    IgLayoutManagerComponent = __decorate([
        core_1.Component({
            selector: "ig-layout-manager",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "borderLayout", "gridLayout", "height", "itemCount", "items", "layoutMode", "width"],
            outputs: ["internalResized", "internalResizing", "itemRendered", "itemRendering", "rendered"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgLayoutManagerComponent);
    return IgLayoutManagerComponent;
}(igcontentcontrolbase_1.IgContentControlBase));
exports.IgLayoutManagerComponent = IgLayoutManagerComponent;
//# sourceMappingURL=iglayoutmanager.component.js.map