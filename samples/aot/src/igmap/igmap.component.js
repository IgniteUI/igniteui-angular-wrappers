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
var IgMapComponent = /** @class */ (function (_super) {
    __extends(IgMapComponent, _super);
    function IgMapComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgMapComponent.prototype.option = function () { return; };
    ;
    IgMapComponent.prototype.ngOnInit = function () {
        Object.defineProperty(this, "dataSource", {
            set: this.createSetter("dataSource"),
            enumerable: true,
            configurable: true
        });
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * Destroys the widget.
     */
    /**
         * Destroys the widget.
         */
    IgMapComponent.prototype.destroy = /**
         * Destroys the widget.
         */
    function () { return; };
    ;
    /**
     * Returns the ID of parent element holding the map.
     */
    /**
         * Returns the ID of parent element holding the map.
         */
    IgMapComponent.prototype.id = /**
         * Returns the ID of parent element holding the map.
         */
    function () { return; };
    ;
    /**
     * Exports the map to a PNG image.
     *
     * @param width The width of the image.
     * @param height The height of the image.
     */
    /**
         * Exports the map to a PNG image.
         *
         * @param width The width of the image.
         * @param height The height of the image.
         */
    IgMapComponent.prototype.exportImage = /**
         * Exports the map to a PNG image.
         *
         * @param width The width of the image.
         * @param height The height of the image.
         */
    function (width, height) { return; };
    ;
    /**
     * Notify the map that styles it draws colors from may have been updated.
     */
    /**
         * Notify the map that styles it draws colors from may have been updated.
         */
    IgMapComponent.prototype.styleUpdated = /**
         * Notify the map that styles it draws colors from may have been updated.
         */
    function () { return; };
    ;
    /**
     * Resets the zoom level of the map to default.
     */
    /**
         * Resets the zoom level of the map to default.
         */
    IgMapComponent.prototype.resetZoom = /**
         * Resets the zoom level of the map to default.
         */
    function () { return; };
    ;
    /**
     * Adds a new item to the data source and notifies the map.
     *
     * @param item     The item that we want to add to the data source.
     * @param targetName     The name of the series bound to the data source.
     */
    /**
         * Adds a new item to the data source and notifies the map.
         *
         * @param item     The item that we want to add to the data source.
         * @param targetName     The name of the series bound to the data source.
         */
    IgMapComponent.prototype.addItem = /**
         * Adds a new item to the data source and notifies the map.
         *
         * @param item     The item that we want to add to the data source.
         * @param targetName     The name of the series bound to the data source.
         */
    function (item, targetName) { return; };
    ;
    /**
     * Inserts a new item to the data source and notifies the map.
     *
     * @param item     the new item that we want to insert in the data source.
     * @param index     The index in the data source where the new item will be inserted.
     * @param targetName     The name of the series bound to the data source.
     */
    /**
         * Inserts a new item to the data source and notifies the map.
         *
         * @param item     the new item that we want to insert in the data source.
         * @param index     The index in the data source where the new item will be inserted.
         * @param targetName     The name of the series bound to the data source.
         */
    IgMapComponent.prototype.insertItem = /**
         * Inserts a new item to the data source and notifies the map.
         *
         * @param item     the new item that we want to insert in the data source.
         * @param index     The index in the data source where the new item will be inserted.
         * @param targetName     The name of the series bound to the data source.
         */
    function (item, index, targetName) { return; };
    ;
    /**
     * Deletes an item from the data source and notifies the map.
     *
     * @param index     The index in the data source from where the item will be been removed.
     * @param targetName     The name of the series bound to the data source.
     */
    /**
         * Deletes an item from the data source and notifies the map.
         *
         * @param index     The index in the data source from where the item will be been removed.
         * @param targetName     The name of the series bound to the data source.
         */
    IgMapComponent.prototype.removeItem = /**
         * Deletes an item from the data source and notifies the map.
         *
         * @param index     The index in the data source from where the item will be been removed.
         * @param targetName     The name of the series bound to the data source.
         */
    function (index, targetName) { return; };
    ;
    /**
     * Updates an item in the data source and notifies the map.
     *
     * @param index     The index of the item in the data source that we want to change.
     * @param item     The new item object that will be set in the data source.
     * @param targetName     The name of the series bound to the data source.
     */
    /**
         * Updates an item in the data source and notifies the map.
         *
         * @param index     The index of the item in the data source that we want to change.
         * @param item     The new item object that will be set in the data source.
         * @param targetName     The name of the series bound to the data source.
         */
    IgMapComponent.prototype.setItem = /**
         * Updates an item in the data source and notifies the map.
         *
         * @param index     The index of the item in the data source that we want to change.
         * @param item     The new item object that will be set in the data source.
         * @param targetName     The name of the series bound to the data source.
         */
    function (index, item, targetName) { return; };
    ;
    /**
     * Notifies the the map that an item has been set in an associated data source.
     *
     * @param dataSource The data source in which the change happened.
     * @param index The index in the items source that has been changed.
     * @param newItem the new item that has been set in the collection.
     * @param oldItem the old item that has been overwritten in the collection.
     */
    /**
         * Notifies the the map that an item has been set in an associated data source.
         *
         * @param dataSource The data source in which the change happened.
         * @param index The index in the items source that has been changed.
         * @param newItem the new item that has been set in the collection.
         * @param oldItem the old item that has been overwritten in the collection.
         */
    IgMapComponent.prototype.notifySetItem = /**
         * Notifies the the map that an item has been set in an associated data source.
         *
         * @param dataSource The data source in which the change happened.
         * @param index The index in the items source that has been changed.
         * @param newItem the new item that has been set in the collection.
         * @param oldItem the old item that has been overwritten in the collection.
         */
    function (dataSource, index, newItem, oldItem) { return; };
    ;
    /**
     * Notifies the the map that the items have been cleared from an associated data source.
     *                 It's not necessary to notify more than one target of a change if they share the same items source.
     *
     * @param dataSource The data source in which the change happened.
     */
    /**
         * Notifies the the map that the items have been cleared from an associated data source.
         *                 It's not necessary to notify more than one target of a change if they share the same items source.
         *
         * @param dataSource The data source in which the change happened.
         */
    IgMapComponent.prototype.notifyClearItems = /**
         * Notifies the the map that the items have been cleared from an associated data source.
         *                 It's not necessary to notify more than one target of a change if they share the same items source.
         *
         * @param dataSource The data source in which the change happened.
         */
    function (dataSource) { return; };
    ;
    /**
     * Notifies the the target series that an item has been inserted at the specified index in its data source.
     *                 It's not necessary to notify more than one target of a change if they share the same items source.
     *
     * @param dataSource The data source in which the change happened.
     * @param index The index in the items source where the new item has been inserted.
     * @param newItem the new item that has been set in the collection.
     */
    /**
         * Notifies the the target series that an item has been inserted at the specified index in its data source.
         *                 It's not necessary to notify more than one target of a change if they share the same items source.
         *
         * @param dataSource The data source in which the change happened.
         * @param index The index in the items source where the new item has been inserted.
         * @param newItem the new item that has been set in the collection.
         */
    IgMapComponent.prototype.notifyInsertItem = /**
         * Notifies the the target series that an item has been inserted at the specified index in its data source.
         *                 It's not necessary to notify more than one target of a change if they share the same items source.
         *
         * @param dataSource The data source in which the change happened.
         * @param index The index in the items source where the new item has been inserted.
         * @param newItem the new item that has been set in the collection.
         */
    function (dataSource, index, newItem) { return; };
    ;
    /**
     * Notifies the the target series that an item has been removed from the specified index in its data source.
     *                 It's not necessary to notify more than one target of a change if they share the same items source.
     *
     * @param dataSource The data source in which the change happened.
     * @param index The index in the items source from where the old item has been removed.
     * @param oldItem the old item that has been removed from the collection.
     */
    /**
         * Notifies the the target series that an item has been removed from the specified index in its data source.
         *                 It's not necessary to notify more than one target of a change if they share the same items source.
         *
         * @param dataSource The data source in which the change happened.
         * @param index The index in the items source from where the old item has been removed.
         * @param oldItem the old item that has been removed from the collection.
         */
    IgMapComponent.prototype.notifyRemoveItem = /**
         * Notifies the the target series that an item has been removed from the specified index in its data source.
         *                 It's not necessary to notify more than one target of a change if they share the same items source.
         *
         * @param dataSource The data source in which the change happened.
         * @param index The index in the items source from where the old item has been removed.
         * @param oldItem the old item that has been removed from the collection.
         */
    function (dataSource, index, oldItem) { return; };
    ;
    /**
     * Notifies the target series or axis that it should scroll the requested data item into view.
     *
     * @param targetName The name of the series or axis notify.
     * @param item The data item to bring into view, if possible.
     */
    /**
         * Notifies the target series or axis that it should scroll the requested data item into view.
         *
         * @param targetName The name of the series or axis notify.
         * @param item The data item to bring into view, if possible.
         */
    IgMapComponent.prototype.scrollIntoView = /**
         * Notifies the target series or axis that it should scroll the requested data item into view.
         *
         * @param targetName The name of the series or axis notify.
         * @param item The data item to bring into view, if possible.
         */
    function (targetName, item) { return; };
    ;
    /**
     * Either xAxis or yAxis (longitude or latitude) that it should scale the requested value into map space from axis space.
     * 				For example you can use this method if you want to find where longitude 50 stands scaled to map's width.
     *
     * @param targetName Either xAxis or yAxis to notify.
     * @param unscaledValue The value in axis space to translate into map space.
     */
    /**
         * Either xAxis or yAxis (longitude or latitude) that it should scale the requested value into map space from axis space.
         * 				For example you can use this method if you want to find where longitude 50 stands scaled to map's width.
         *
         * @param targetName Either xAxis or yAxis to notify.
         * @param unscaledValue The value in axis space to translate into map space.
         */
    IgMapComponent.prototype.scaleValue = /**
         * Either xAxis or yAxis (longitude or latitude) that it should scale the requested value into map space from axis space.
         * 				For example you can use this method if you want to find where longitude 50 stands scaled to map's width.
         *
         * @param targetName Either xAxis or yAxis to notify.
         * @param unscaledValue The value in axis space to translate into map space.
         */
    function (targetName, unscaledValue) { return; };
    ;
    /**
     * Either xAxis or yAxis (longitude or latitude) that it should unscale the requested value into axis space from map space.
     * 				For example you can use this method if you want to find what is the longitude unscaled from 0 width of the map.
     *
     * @param targetName Either xAxis or yAxis to notify.
     * @param scaledValue The value in map space to translate into axis space.
     */
    /**
         * Either xAxis or yAxis (longitude or latitude) that it should unscale the requested value into axis space from map space.
         * 				For example you can use this method if you want to find what is the longitude unscaled from 0 width of the map.
         *
         * @param targetName Either xAxis or yAxis to notify.
         * @param scaledValue The value in map space to translate into axis space.
         */
    IgMapComponent.prototype.unscaleValue = /**
         * Either xAxis or yAxis (longitude or latitude) that it should unscale the requested value into axis space from map space.
         * 				For example you can use this method if you want to find what is the longitude unscaled from 0 width of the map.
         *
         * @param targetName Either xAxis or yAxis to notify.
         * @param scaledValue The value in map space to translate into axis space.
         */
    function (targetName, scaledValue) { return; };
    ;
    /**
     * Manually starts a tiled zoom if one isn't already running.
     */
    /**
         * Manually starts a tiled zoom if one isn't already running.
         */
    IgMapComponent.prototype.startTiledZoomingIfNecessary = /**
         * Manually starts a tiled zoom if one isn't already running.
         */
    function () { return; };
    ;
    /**
     * Manually ends a tiled zoom if one is running.
     */
    /**
         * Manually ends a tiled zoom if one is running.
         */
    IgMapComponent.prototype.endTiledZoomingIfRunning = /**
         * Manually ends a tiled zoom if one is running.
         */
    function () { return; };
    ;
    /**
     * Clears the tile zoom tile cache so that new tiles will be generated. Only applies if the viewer is using a tile based zoom..
     */
    /**
         * Clears the tile zoom tile cache so that new tiles will be generated. Only applies if the viewer is using a tile based zoom..
         */
    IgMapComponent.prototype.clearTileZoomCache = /**
         * Clears the tile zoom tile cache so that new tiles will be generated. Only applies if the viewer is using a tile based zoom..
         */
    function () { return; };
    ;
    /**
     * Forces any pending deferred work to render on the map before continuing
     */
    /**
         * Forces any pending deferred work to render on the map before continuing
         */
    IgMapComponent.prototype.flush = /**
         * Forces any pending deferred work to render on the map before continuing
         */
    function () { return; };
    ;
    /**
     * Exports visual data from the map to aid in unit testing
     */
    /**
         * Exports visual data from the map to aid in unit testing
         */
    IgMapComponent.prototype.exportVisualData = /**
         * Exports visual data from the map to aid in unit testing
         */
    function () { return; };
    ;
    /**
     * Gets the actual minimum value of the target xAxis or yAxis
     *
     * @param targetName
     */
    /**
         * Gets the actual minimum value of the target xAxis or yAxis
         *
         * @param targetName
         */
    IgMapComponent.prototype.getActualMinimumValue = /**
         * Gets the actual minimum value of the target xAxis or yAxis
         *
         * @param targetName
         */
    function (targetName) { return; };
    ;
    /**
     * Gets the actual maximum value of the target xAxis or yAxis
     *
     * @param targetName
     */
    /**
         * Gets the actual maximum value of the target xAxis or yAxis
         *
         * @param targetName
         */
    IgMapComponent.prototype.getActualMaximumValue = /**
         * Gets the actual maximum value of the target xAxis or yAxis
         *
         * @param targetName
         */
    function (targetName) { return; };
    ;
    /**
     * Notifies the map that the container was resized
     */
    /**
         * Notifies the map that the container was resized
         */
    IgMapComponent.prototype.notifyContainerResized = /**
         * Notifies the map that the container was resized
         */
    function () { return; };
    ;
    /**
     * Zoom in to the geographic region specified, when possible (may need to wait fior map to be initialized).
     *
     * @param rect The geographic area rectangle.
     */
    /**
         * Zoom in to the geographic region specified, when possible (may need to wait fior map to be initialized).
         *
         * @param rect The geographic area rectangle.
         */
    IgMapComponent.prototype.zoomToGeographic = /**
         * Zoom in to the geographic region specified, when possible (may need to wait fior map to be initialized).
         *
         * @param rect The geographic area rectangle.
         */
    function (rect) { return; };
    ;
    /**
     * Given the current plot area of the control and a geographic region, get the WindowRect that would encompass that geographic region.
     *
     * @param rect The geographic area rectangle.
     */
    /**
         * Given the current plot area of the control and a geographic region, get the WindowRect that would encompass that geographic region.
         *
         * @param rect The geographic area rectangle.
         */
    IgMapComponent.prototype.getGeographicFromZoom = /**
         * Given the current plot area of the control and a geographic region, get the WindowRect that would encompass that geographic region.
         *
         * @param rect The geographic area rectangle.
         */
    function (rect) { return; };
    ;
    /**
     * Given the current plot area of the control and a geographic region, get the WindowRect that would encompass that geographic region.
     *
     * @param rect The geographic area rectangle.
     */
    /**
         * Given the current plot area of the control and a geographic region, get the WindowRect that would encompass that geographic region.
         *
         * @param rect The geographic area rectangle.
         */
    IgMapComponent.prototype.getZoomFromGeographic = /**
         * Given the current plot area of the control and a geographic region, get the WindowRect that would encompass that geographic region.
         *
         * @param rect The geographic area rectangle.
         */
    function (rect) { return; };
    ;
    /**
     * Creates a print preview page with the map, hiding all other elements on the page.
     */
    /**
         * Creates a print preview page with the map, hiding all other elements on the page.
         */
    IgMapComponent.prototype.print = /**
         * Creates a print preview page with the map, hiding all other elements on the page.
         */
    function () { return; };
    ;
    /**
     * Indicates that a series should render, even though no option has been modified that would normally cause it to refresh.
     *
     * @param targetName     The name of the series to render.
     * @param animate     Whether the change should be animated, if possible.
     */
    /**
         * Indicates that a series should render, even though no option has been modified that would normally cause it to refresh.
         *
         * @param targetName     The name of the series to render.
         * @param animate     Whether the change should be animated, if possible.
         */
    IgMapComponent.prototype.renderSeries = /**
         * Indicates that a series should render, even though no option has been modified that would normally cause it to refresh.
         *
         * @param targetName     The name of the series to render.
         * @param animate     Whether the change should be animated, if possible.
         */
    function (targetName, animate) { return; };
    ;
    IgMapComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-map",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "dataSource", "dataSourceUrl", "dataSourceType", "responseDataKey", "autoMarginWidth", "autoMarginHeight", "crosshairVisibility", "crosshairPoint", "plotAreaBackground", "defaultInteraction", "dragModifier", "panModifier", "previewRect", "windowRect", "zoomable", "windowScale", "windowResponse", "windowRectMinWidth", "windowPositionHorizontal", "windowPositionVertical", "circleMarkerTemplate", "triangleMarkerTemplate", "pyramidMarkerTemplate", "squareMarkerTemplate", "diamondMarkerTemplate", "pentagonMarkerTemplate", "hexagonMarkerTemplate", "tetragramMarkerTemplate", "pentagramMarkerTemplate", "hexagramMarkerTemplate", "overviewPlusDetailPaneBackgroundImageUri", "useTiledZooming", "preferHigherResolutionTiles", "zoomTileCacheSize", "backgroundContent", "series", "theme"],
                    outputs: ["tooltipShowing", "tooltipShown", "tooltipHiding", "tooltipHidden", "browserNotSupported", "seriesCursorMouseMove", "seriesMouseLeftButtonDown", "seriesMouseLeftButtonUp", "seriesMouseMove", "seriesMouseEnter", "seriesMouseLeave", "windowRectChanged", "gridAreaRectChanged", "refreshCompleted", "triangulationStatusChanged"]
                },] },
    ];
    /** @nocollapse */
    IgMapComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgMapComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgMapComponent = IgMapComponent;
//# sourceMappingURL=igmap.component.js.map