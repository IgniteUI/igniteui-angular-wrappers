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
var IgSplitterComponent = /** @class */ (function (_super) {
    __extends(IgSplitterComponent, _super);
    function IgSplitterComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Returns the element that represents this widget.
     */
    IgSplitterComponent.prototype.widget = function () { return; };
    ;
    /**
     * Expand the specified panel by index.
     *
     * @param index Specifies the index of the panel to expand.
     */
    IgSplitterComponent.prototype.expandAt = function (index) { return; };
    ;
    /**
     * Collapse the specified panel.
     *
     * @param index Specifies the index of the panel to collapse.
     */
    IgSplitterComponent.prototype.collapseAt = function (index) { return; };
    ;
    /**
     * Retrieves the jQuery element of the first panel.
     */
    IgSplitterComponent.prototype.firstPanel = function () { return; };
    ;
    /**
     * Retrieves the jQuery element of the second panel.
     */
    IgSplitterComponent.prototype.secondPanel = function () { return; };
    ;
    /**
     * Refresh splitter layout, use this method to re-render the splitter if some changes to the layout are applied.
     */
    IgSplitterComponent.prototype.refreshLayout = function () { return; };
    ;
    /**
     * You can set new size of the first panel after the splitter is rendered.
     *
     * @param size Specifies the new size of the first panel.
     */
    IgSplitterComponent.prototype.setFirstPanelSize = function (size) { return; };
    ;
    /**
     * You can set new size of the second panel after the splitter is rendered.
     *
     * @param size Specifies the new size of the second panel.
     */
    IgSplitterComponent.prototype.setSecondPanelSize = function (size) { return; };
    ;
    /**
     * Destroys the igSplitter widget
     */
    IgSplitterComponent.prototype.destroy = function () { return; };
    ;
    IgSplitterComponent = __decorate([
        core_1.Component({
            selector: "ig-splitter",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "orientation", "panels", "dragDelta", "resizeOtherSplitters"],
            outputs: ["collapsed", "expanded", "resizeStarted", "resizing", "resizeEnded", "layoutRefreshing", "layoutRefreshed"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgSplitterComponent);
    return IgSplitterComponent;
}(igcontentcontrolbase_1.IgContentControlBase));
exports.IgSplitterComponent = IgSplitterComponent;
//# sourceMappingURL=igsplitter.component.js.map