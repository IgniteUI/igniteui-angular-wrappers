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
var igcontentcontrolbase_1 = require("../igcontrolbase/igcontentcontrolbase");
var IgTileManagerComponent = /** @class */ (function (_super) {
    __extends(IgTileManagerComponent, _super);
    function IgTileManagerComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgTileManagerComponent.prototype.ngOnInit = function () {
        Object.defineProperty(this, "dataSource", {
            set: this.createSetter("dataSource"),
            enumerable: true,
            configurable: true
        });
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * Maximizes a given tile.
     *
     * @param $tileToMaximize Specifies the jQuery object of the tile element to be maximized.
     * @param animDuration Specifies the animation duration for this maximizing.
     * @param event Indicates the browser even which triggered this action (not API).
     */
    /**
         * Maximizes a given tile.
         *
         * @param $tileToMaximize Specifies the jQuery object of the tile element to be maximized.
         * @param animDuration Specifies the animation duration for this maximizing.
         * @param event Indicates the browser even which triggered this action (not API).
         */
    IgTileManagerComponent.prototype.maximize = /**
         * Maximizes a given tile.
         *
         * @param $tileToMaximize Specifies the jQuery object of the tile element to be maximized.
         * @param animDuration Specifies the animation duration for this maximizing.
         * @param event Indicates the browser even which triggered this action (not API).
         */
    function ($tileToMaximize, animDuration, event) { return; };
    ;
    /**
     * Minimizes the maximized tile. Has no effect if no maximized tile is present.
     *
     * @param animDuration Specifies the animation duration for this minimize.
     * @param event Indicates the browser even which triggered this action (not API).
     */
    /**
         * Minimizes the maximized tile. Has no effect if no maximized tile is present.
         *
         * @param animDuration Specifies the animation duration for this minimize.
         * @param event Indicates the browser even which triggered this action (not API).
         */
    IgTileManagerComponent.prototype.minimize = /**
         * Minimizes the maximized tile. Has no effect if no maximized tile is present.
         *
         * @param animDuration Specifies the animation duration for this minimize.
         * @param event Indicates the browser even which triggered this action (not API).
         */
    function (animDuration, event) { return; };
    ;
    /**
     * Returns the maximized tile or null if such is not present.
     * @return object|null Returns the maximized tile or null if such is not present.
     */
    /**
         * Returns the maximized tile or null if such is not present.
         * @return object|null Returns the maximized tile or null if such is not present.
         */
    IgTileManagerComponent.prototype.maximizedTile = /**
         * Returns the maximized tile or null if such is not present.
         * @return object|null Returns the maximized tile or null if such is not present.
         */
    function () { return; };
    ;
    /**
     * Returns an array with the tiles in minimized state or null if such are not present.
     * @return object|null Returns an array with the tiles in minimized state or null if such are not present.
     */
    /**
         * Returns an array with the tiles in minimized state or null if such are not present.
         * @return object|null Returns an array with the tiles in minimized state or null if such are not present.
         */
    IgTileManagerComponent.prototype.minimizedTiles = /**
         * Returns an array with the tiles in minimized state or null if such are not present.
         * @return object|null Returns an array with the tiles in minimized state or null if such are not present.
         */
    function () { return; };
    ;
    /**
     * Returns the splitter associated with this tile manager or
     *                 null if the tile manager was instantiated with maximizedTileIndex.
     * @return object|null Returns the splitter associated with this tile manager or null if the tile manager was instantiated with maximizedTileIndex.
     */
    /**
         * Returns the splitter associated with this tile manager or
         *                 null if the tile manager was instantiated with maximizedTileIndex.
         * @return object|null Returns the splitter associated with this tile manager or null if the tile manager was instantiated with maximizedTileIndex.
         */
    IgTileManagerComponent.prototype.splitter = /**
         * Returns the splitter associated with this tile manager or
         *                 null if the tile manager was instantiated with maximizedTileIndex.
         * @return object|null Returns the splitter associated with this tile manager or null if the tile manager was instantiated with maximizedTileIndex.
         */
    function () { return; };
    ;
    /**
     * Returns the [layout manager](ui.iglayoutmanager) associated with current tile manager.
     */
    /**
         * Returns the [layout manager](ui.iglayoutmanager) associated with current tile manager.
         */
    IgTileManagerComponent.prototype.layoutManager = /**
         * Returns the [layout manager](ui.iglayoutmanager) associated with current tile manager.
         */
    function () { return; };
    ;
    /**
     * Reflow the tile manager. Rearranging the tiles to fit in the container
     *
     * @param forceReflow Indicates whether the reflow should be forced. Useful in cases where the items size and position was changed manually.
     * @param animationDuration The animation duration to be used for this reflow only.
     * @param event Indicates the browser even which triggered this action (not API).
     */
    /**
         * Reflow the tile manager. Rearranging the tiles to fit in the container
         *
         * @param forceReflow Indicates whether the reflow should be forced. Useful in cases where the items size and position was changed manually.
         * @param animationDuration The animation duration to be used for this reflow only.
         * @param event Indicates the browser even which triggered this action (not API).
         */
    IgTileManagerComponent.prototype.reflow = /**
         * Reflow the tile manager. Rearranging the tiles to fit in the container
         *
         * @param forceReflow Indicates whether the reflow should be forced. Useful in cases where the items size and position was changed manually.
         * @param animationDuration The animation duration to be used for this reflow only.
         * @param event Indicates the browser even which triggered this action (not API).
         */
    function (forceReflow, animationDuration, event) { return; };
    ;
    /**
     * Returns the element that represents this widget.
     */
    /**
         * Returns the element that represents this widget.
         */
    IgTileManagerComponent.prototype.widget = /**
         * Returns the element that represents this widget.
         */
    function () { return; };
    ;
    /**
     * Causes the TileManager to data bind to the data source (local or remote) , and re-render all of the data as well.
     */
    /**
         * Causes the TileManager to data bind to the data source (local or remote) , and re-render all of the data as well.
         */
    IgTileManagerComponent.prototype.dataBind = /**
         * Causes the TileManager to data bind to the data source (local or remote) , and re-render all of the data as well.
         */
    function () { return; };
    ;
    /**
     * Deletes the widget instance (client object). It is no longer accessible and all its event handlers stop working. Destroys all child widgets. Removes auto-generated HTML content, which is outside the widget, e.g. detached popups, dropdowns, etc.
     */
    /**
         * Deletes the widget instance (client object). It is no longer accessible and all its event handlers stop working. Destroys all child widgets. Removes auto-generated HTML content, which is outside the widget, e.g. detached popups, dropdowns, etc.
         */
    IgTileManagerComponent.prototype.destroy = /**
         * Deletes the widget instance (client object). It is no longer accessible and all its event handlers stop working. Destroys all child widgets. Removes auto-generated HTML content, which is outside the widget, e.g. detached popups, dropdowns, etc.
         */
    function () { return; };
    ;
    IgTileManagerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-tile-manager",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "columnWidth", "columnHeight", "cols", "rows", "marginLeft", "marginTop", "rearrangeItems", "items", "dataSource", "minimizedState", "maximizedState", "maximizedTileIndex", "rightPanelCols", "rightPanelTilesWidth", "rightPanelTilesHeight", "showRightPanelScroll", "splitterOptions", "preventMaximizingSelector", "animationDuration", "dataSourceUrl", "responseDataKey", "responseDataType", "dataSourceType", "requestType", "responseContentType"],
                    outputs: ["dataBinding", "dataBound", "rendering", "rendered", "tileRendering", "tileRendered", "tileMaximizing", "tileMaximized", "tileMinimizing", "tileMinimized"]
                },] },
    ];
    /** @nocollapse */
    IgTileManagerComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgTileManagerComponent;
}(igcontentcontrolbase_1.IgContentControlBase));
exports.IgTileManagerComponent = IgTileManagerComponent;
//# sourceMappingURL=igtilemanager.component.js.map