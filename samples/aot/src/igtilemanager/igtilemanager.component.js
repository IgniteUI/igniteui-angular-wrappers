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
var IgTileManagerComponent = /** @class */ (function (_super) {
    __extends(IgTileManagerComponent, _super);
    function IgTileManagerComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    Object.defineProperty(IgTileManagerComponent.prototype, "dataSource", {
        set: function (value) {
            this._dataSource = value;
            var widget = jQuery(this._el).data(this._widgetName);
            if (widget) {
                jQuery(this._el)[this._widgetName]("option", "dataSource", this._dataSource);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    IgTileManagerComponent.prototype.ngOnInit = function () {
        if (this._dataSource === null || this._dataSource === undefined) {
            this._dataSource = this.options["dataSource"];
        }
        if (!this.options["dataSource"] && this._dataSource) {
            this.options["dataSource"] = this._dataSource;
        }
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * Maximizes a given tile.
     *
     * @param $tileToMaximize Specifies the jQuery object of the tile element to be maximized.
     * @param animDuration Specifies the animation duration for this maximizing.
     * @param event Indicates the browser even which triggered this action (not API).
     */
    IgTileManagerComponent.prototype.maximize = function ($tileToMaximize, animDuration, event) { return; };
    ;
    /**
     * Minimizes the maximized tile. Has no effect if no maximized tile is present.
     *
     * @param animDuration Specifies the animation duration for this minimize.
     * @param event Indicates the browser even which triggered this action (not API).
     */
    IgTileManagerComponent.prototype.minimize = function (animDuration, event) { return; };
    ;
    /**
     * Returns the maximized tile or null if such is not present.
     * @return object|null Returns the maximized tile or null if such is not present.
     */
    IgTileManagerComponent.prototype.maximizedTile = function () { return; };
    ;
    /**
     * Returns an array with the tiles in minimized state or null if such are not present.
     * @return object|null Returns an array with the tiles in minimized state or null if such are not present.
     */
    IgTileManagerComponent.prototype.minimizedTiles = function () { return; };
    ;
    /**
     * Returns the splitter associated with this tile manager or
     *                 null if the tile manager was instantiated with maximizedTileIndex.
     * @return object|null Returns the splitter associated with this tile manager or null if the tile manager was instantiated with maximizedTileIndex.
     */
    IgTileManagerComponent.prototype.splitter = function () { return; };
    ;
    /**
     * Returns the [layout manager](ui.iglayoutmanager) associated with current tile manager.
     */
    IgTileManagerComponent.prototype.layoutManager = function () { return; };
    ;
    /**
     * Reflow the tile manager. Rearranging the tiles to fit in the container
     *
     * @param forceReflow Indicates whether the reflow should be forced. Useful in cases where the items size and position was changed manually.
     * @param animationDuration The animation duration to be used for this reflow only.
     * @param event Indicates the browser even which triggered this action (not API).
     */
    IgTileManagerComponent.prototype.reflow = function (forceReflow, animationDuration, event) { return; };
    ;
    /**
     * Returns the element that represents this widget.
     */
    IgTileManagerComponent.prototype.widget = function () { return; };
    ;
    /**
     * Causes the TileManager to data bind to the data source (local or remote) , and re-render all of the data as well.
     */
    IgTileManagerComponent.prototype.dataBind = function () { return; };
    ;
    /**
     * Deletes the widget instance (client object). It is no longer accessible and all its event handlers stop working. Destroys all child widgets. Removes auto-generated HTML content, which is outside the widget, e.g. detached popups, dropdowns, etc.
     */
    IgTileManagerComponent.prototype.destroy = function () { return; };
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IgTileManagerComponent.prototype, "dataSource", null);
    IgTileManagerComponent = __decorate([
        core_1.Component({
            selector: "ig-tile-manager",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "columnWidth", "columnHeight", "cols", "rows", "marginLeft", "marginTop", "rearrangeItems", "items", "dataSource", "minimizedState", "maximizedState", "maximizedTileIndex", "rightPanelCols", "rightPanelTilesWidth", "rightPanelTilesHeight", "showRightPanelScroll", "splitterOptions", "preventMaximizingSelector", "animationDuration", "dataSourceUrl", "responseDataKey", "responseDataType", "dataSourceType", "requestType", "responseContentType"],
            outputs: ["dataBinding", "dataBound", "rendering", "rendered", "tileRendering", "tileRendered", "tileMaximizing", "tileMaximized", "tileMinimizing", "tileMinimized"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgTileManagerComponent);
    return IgTileManagerComponent;
}(igcontentcontrolbase_1.IgContentControlBase));
exports.IgTileManagerComponent = IgTileManagerComponent;
//# sourceMappingURL=igtilemanager.component.js.map