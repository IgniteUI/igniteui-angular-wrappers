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
var IgZoombarComponent = /** @class */ (function (_super) {
    __extends(IgZoombarComponent, _super);
    function IgZoombarComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Destroys the Zoombar widget
     */
    IgZoombarComponent.prototype.destroy = function () { return; };
    ;
    /**
     * Returns the main zoombar element
     */
    IgZoombarComponent.prototype.widget = function () { return; };
    ;
    /**
     * Returns the ID of the element the zoombar is initialized on
     */
    IgZoombarComponent.prototype.id = function () { return; };
    ;
    /**
     * Returns the DIV that is the topmost container of the zoombar widget
     */
    IgZoombarComponent.prototype.container = function () { return; };
    ;
    /**
     * Returns the element the clone widget is initialized on
     */
    IgZoombarComponent.prototype.clone = function () { return; };
    ;
    /**
     * Gets or sets the current zoom window
     *
     * @param left     The left parameter of the new zoom window in percentages
     * @param width     The width parameter of the new zoom window in percentages
     */
    IgZoombarComponent.prototype.zoom = function (left, width) { return; };
    ;
    IgZoombarComponent = __decorate([
        core_1.Component({
            selector: "ig-zoombar",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "target", "clone", "width", "height", "zoomAction", "zoomWindowMoveDistance", "defaultZoomWindow", "zoomWindowMinWidth", "hoverStyleAnimationDuration", "windowPanDuration", "tabIndex"],
            outputs: ["zoomChanging", "zoomChanged", "providerCreated", "windowDragStarting", "windowDragStarted", "windowDragging", "windowDragEnding", "windowDragEnded", "windowResizing", "windowResized"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgZoombarComponent);
    return IgZoombarComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgZoombarComponent = IgZoombarComponent;
//# sourceMappingURL=igzoombar.component.js.map