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
var IgZoombarComponent = /** @class */ (function (_super) {
    __extends(IgZoombarComponent, _super);
    function IgZoombarComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Destroys the Zoombar widget
     */
    /**
         * Destroys the Zoombar widget
         */
    IgZoombarComponent.prototype.destroy = /**
         * Destroys the Zoombar widget
         */
    function () { return; };
    ;
    /**
     * Returns the main zoombar element
     */
    /**
         * Returns the main zoombar element
         */
    IgZoombarComponent.prototype.widget = /**
         * Returns the main zoombar element
         */
    function () { return; };
    ;
    /**
     * Returns the ID of the element the zoombar is initialized on
     */
    /**
         * Returns the ID of the element the zoombar is initialized on
         */
    IgZoombarComponent.prototype.id = /**
         * Returns the ID of the element the zoombar is initialized on
         */
    function () { return; };
    ;
    /**
     * Returns the DIV that is the topmost container of the zoombar widget
     */
    /**
         * Returns the DIV that is the topmost container of the zoombar widget
         */
    IgZoombarComponent.prototype.container = /**
         * Returns the DIV that is the topmost container of the zoombar widget
         */
    function () { return; };
    ;
    /**
     * Returns the element the clone widget is initialized on
     */
    /**
         * Returns the element the clone widget is initialized on
         */
    IgZoombarComponent.prototype.clone = /**
         * Returns the element the clone widget is initialized on
         */
    function () { return; };
    ;
    /**
     * Gets or sets the current zoom window
     *
     * @param left     The left parameter of the new zoom window in percentages
     * @param width     The width parameter of the new zoom window in percentages
     */
    /**
         * Gets or sets the current zoom window
         *
         * @param left     The left parameter of the new zoom window in percentages
         * @param width     The width parameter of the new zoom window in percentages
         */
    IgZoombarComponent.prototype.zoom = /**
         * Gets or sets the current zoom window
         *
         * @param left     The left parameter of the new zoom window in percentages
         * @param width     The width parameter of the new zoom window in percentages
         */
    function (left, width) { return; };
    ;
    IgZoombarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-zoombar",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "target", "clone", "width", "height", "zoomAction", "zoomWindowMoveDistance", "defaultZoomWindow", "zoomWindowMinWidth", "hoverStyleAnimationDuration", "windowPanDuration", "tabIndex"],
                    outputs: ["zoomChanging", "zoomChanged", "providerCreated", "windowDragStarting", "windowDragStarted", "windowDragging", "windowDragEnding", "windowDragEnded", "windowResizing", "windowResized"]
                },] },
    ];
    /** @nocollapse */
    IgZoombarComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgZoombarComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgZoombarComponent = IgZoombarComponent;
//# sourceMappingURL=igzoombar.component.js.map