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
var IgDataChartComponent = /** @class */ (function (_super) {
    __extends(IgDataChartComponent, _super);
    function IgDataChartComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    Object.defineProperty(IgDataChartComponent.prototype, "dataSource", {
        set: function (value) {
            this._dataSource = value;
            var chart = jQuery(this._el).data(this._widgetName);
            if (chart) {
                jQuery(this._el)[this._widgetName]("option", "dataSource", this._dataSource);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    IgDataChartComponent.prototype.ngOnInit = function () {
        if (this._dataSource === null || this._dataSource === undefined) {
            this._dataSource = this.options["dataSource"];
        }
        if (!this.options["dataSource"] && this._dataSource) {
            this.options["dataSource"] = this._dataSource;
        }
        _super.prototype.ngOnInit.call(this);
    };
    IgDataChartComponent.prototype.option = function () { return; };
    ;
    /**
     * Returns the element holding the chart.
     */
    IgDataChartComponent.prototype.widget = function () { return; };
    ;
    /**
     * Returns the ID of parent element holding the chart.
     */
    IgDataChartComponent.prototype.id = function () { return; };
    ;
    /**
     * Exports the chart to a PNG image.
     *
     * @param width     The width of the image.
     * @param height     The height of the image.
     */
    IgDataChartComponent.prototype.exportImage = function (width, height) { return; };
    ;
    /**
     * Destroys the widget.
     */
    IgDataChartComponent.prototype.destroy = function () { return; };
    ;
    /**
     * Notify the chart that styles it draws colors from may have been updated.
     */
    IgDataChartComponent.prototype.styleUpdated = function () { return; };
    ;
    /**
     * Resets the zoom level of the chart to default.
     */
    IgDataChartComponent.prototype.resetZoom = function () { return; };
    ;
    /**
     * Adds a new item to the data source and notifies the chart.
     *
     * @param item     The item that we want to add to the data source.
     * @param targetName     The name of the series or axis bound to the data source. This is required only when the data is bound to series or axis. If the data is bound to dataSource of igDataChart, the second parameter should not be set.
     */
    IgDataChartComponent.prototype.addItem = function (item, targetName) { return; };
    ;
    /**
     * Inserts a new item to the data source and notifies the chart.
     *
     * @param item     the new item that we want to insert in the data source.
     * @param index     The index in the data source where the new item will be inserted.
     * @param targetName     The name of the series or axis bound to the data source.
     */
    IgDataChartComponent.prototype.insertItem = function (item, index, targetName) { return; };
    ;
    /**
     * Deletes an item from the data source and notifies the chart.
     *
     * @param index     The index in the data source from where the item will be been removed.
     * @param targetName     The name of the series or axis bound to the data source. This is required only when the data is bound to series or axis. If the data is bound to dataSource of igDataChart, the second parameter should not be set.
     */
    IgDataChartComponent.prototype.removeItem = function (index, targetName) { return; };
    ;
    /**
     * Updates an item in the data source and notifies the chart.
     *
     * @param index     The index of the item in the data source that we want to change.
     * @param item     The new item object that will be set in the data source.
     * @param targetName     The name of the series or axis bound to the data source.
     */
    IgDataChartComponent.prototype.setItem = function (index, item, targetName) { return; };
    ;
    /**
     * Notifies the chart that an item has been set in an associated data source.
     *
     * @param dataSource     The data source in which the change happened.
     * @param index     The index in the items source that has been changed.
     * @param newItem     the new item that has been set in the collection.
     * @param oldItem     the old item that has been overwritten in the collection.
     */
    IgDataChartComponent.prototype.notifySetItem = function (dataSource, index, newItem, oldItem) { return; };
    ;
    /**
     * Notifies the chart that the items have been cleared from an associated data source.
     * 				It's not necessary to notify more than one target of a change if they share the same items source.
     *
     * @param dataSource     The data source in which the change happened.
     */
    IgDataChartComponent.prototype.notifyClearItems = function (dataSource) { return; };
    ;
    /**
     * Notifies the target axis or series that an item has been inserted at the specified index in its data source.
     * 				It's not necessary to notify more than one target of a change if they share the same items source.
     *
     * @param dataSource     The data source in which the change happened.
     * @param index     The index in the items source where the new item has been inserted.
     * @param newItem     the new item that has been set in the collection.
     */
    IgDataChartComponent.prototype.notifyInsertItem = function (dataSource, index, newItem) { return; };
    ;
    /**
     * Notifies the target axis or series that an item has been removed from the specified index in its data source.
     * 				It's not necessary to notify more than one target of a change if they share the same items source.
     *
     * @param dataSource     The data source in which the change happened.
     * @param index     The index in the items source from where the old item has been removed.
     * @param oldItem     the old item that has been removed from the collection.
     */
    IgDataChartComponent.prototype.notifyRemoveItem = function (dataSource, index, oldItem) { return; };
    ;
    /**
     * Notifies the target axis or series that it should scroll the requested data item into view.
     *
     * @param targetName     The name of the axis or series notify.
     * @param item     The data item to bring into view, if possible.
     */
    IgDataChartComponent.prototype.scrollIntoView = function (targetName, item) { return; };
    ;
    /**
     * Notifies the target axis that it should scale the requested value into chart space from axis space.
     * 				For example you can use this method if you want to find where value 50 of the x axis stands scaled to chart's width.
     *
     * @param targetName     The name of the axis to notify.
     * @param unscaledValue     The value in axis space to translate into chart space.
     */
    IgDataChartComponent.prototype.scaleValue = function (targetName, unscaledValue) { return; };
    ;
    /**
     * Notifies the target axis that it should unscale the requested value into axis space from chart space.
     * 				For example you can use this method if you want to find what is the value of x axis unscaled from 0 width of the chart.
     *
     * @param targetName     The name of the axis to notify.
     * @param scaledValue     The value in chart space to translate into axis space.
     */
    IgDataChartComponent.prototype.unscaleValue = function (targetName, scaledValue) { return; };
    ;
    /**
     * For the target axis, if using enhanced interval management and precise interval fitting, this will reset the cached maximum label width, and recalculate using the current labels.
     *
     * @param targetName     The name of the axis to notify.
     */
    IgDataChartComponent.prototype.resetCachedEnhancedInterval = function (targetName) { return; };
    ;
    /**
     * Notifies the target series that something that affects its visual properties has changed and the visual output needs a repaint.
     *
     * @param targetName     The name of the series to notify.
     */
    IgDataChartComponent.prototype.notifyVisualPropertiesChanged = function (targetName) { return; };
    ;
    /**
     * Forces any pending deferred work to render on the chart before continuing
     */
    IgDataChartComponent.prototype.flush = function () { return; };
    ;
    /**
     * Exports visual data from the chart to aid in unit testing
     */
    IgDataChartComponent.prototype.exportVisualData = function () { return; };
    ;
    /**
     * Gets the actual minimum value of the target numeric or date time axis
     *
     * @param targetName    The name of the axis from which to get the minimum value.
     */
    IgDataChartComponent.prototype.getActualMinimumValue = function (targetName) { return; };
    ;
    /**
     * Gets the actual maximum value of the target numeric or date time axis
     *
     * @param targetName    The name of the axis from which to get the maximum value.
     */
    IgDataChartComponent.prototype.getActualMaximumValue = function (targetName) { return; };
    ;
    /**
     * Gets the actual interval of the target numeric or date time axis
     *
     * @param targetName    The name of the axis from which to get the interval.
     */
    IgDataChartComponent.prototype.getActualInterval = function (targetName) { return; };
    ;
    /**
     * Creates a print preview page with the chart, hiding all other elements on the page.
     */
    IgDataChartComponent.prototype.print = function () { return; };
    ;
    /**
     * Indicates that a series should render, even though no option has been modified that would normally cause it to refresh.
     *
     * @param targetName     The name of the series to render.
     * @param animate     Whether the change should be animated, if possible.
     */
    IgDataChartComponent.prototype.renderSeries = function (targetName, animate) { return; };
    ;
    /**
     * Gets the item item index associated with the specified world position.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     */
    IgDataChartComponent.prototype.getItemIndex = function (targetName, worldPoint) { return; };
    ;
    /**
     * Gets the item that is the best match for the specified world coordinates.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     */
    IgDataChartComponent.prototype.getItem = function (targetName, worldPoint) { return; };
    ;
    /**
     * For a category plotted series, gets the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
     *
     * @param targetName    The name of the series to target.
     */
    IgDataChartComponent.prototype.getItemSpan = function (targetName) { return; };
    ;
    /**
     * If possible, will return the best available main value of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    IgDataChartComponent.prototype.getSeriesValue = function (targetName, worldPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available value bounding box within the series that has the best value match for the world position provided.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     */
    IgDataChartComponent.prototype.getSeriesValueBoundingBox = function (targetName, worldPoint) { return; };
    ;
    /**
     * If possible, will return the best available value fine grained bounding boxes within the series that have the best value match for the world position provided.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     */
    IgDataChartComponent.prototype.getSeriesValueFineGrainedBoundingBoxes = function (targetName, worldPoint) { return; };
    ;
    /**
     * If possible, will return the best available main value position of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    IgDataChartComponent.prototype.getSeriesValuePosition = function (targetName, worldPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available main value position of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    IgDataChartComponent.prototype.getSeriesValuePositionFromSeriesPixel = function (targetName, seriesPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available main value of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    IgDataChartComponent.prototype.getSeriesValueFromSeriesPixel = function (targetName, seriesPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available value bounding box within the series that has the best value match for the given series pixel coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
     */
    IgDataChartComponent.prototype.getSeriesValueBoundingBoxFromSeriesPixel = function (targetName, seriesPoint) { return; };
    ;
    /**
     * If possible, will return the best available value fine grained bounding boxes within the series that have the best value match for series pixel position provided.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
     */
    IgDataChartComponent.prototype.getSeriesValueFineGrainedBoundingBoxesFromSeriesPixel = function (targetName, worldPoint) { return; };
    ;
    /**
     * If possible, will return the best available high value of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    IgDataChartComponent.prototype.getSeriesHighValue = function (targetName, worldPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available high value position of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    IgDataChartComponent.prototype.getSeriesHighValuePosition = function (targetName, worldPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available high value position of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    IgDataChartComponent.prototype.getSeriesHighValuePositionFromSeriesPixel = function (targetName, seriesPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available high value of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    IgDataChartComponent.prototype.getSeriesHighValueFromSeriesPixel = function (targetName, seriesPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available low value of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    IgDataChartComponent.prototype.getSeriesLowValue = function (targetName, worldPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available low value position of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    IgDataChartComponent.prototype.getSeriesLowValuePosition = function (targetName, worldPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available low value position of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    IgDataChartComponent.prototype.getSeriesLowValuePositionFromSeriesPixel = function (targetName, seriesPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available low value of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    IgDataChartComponent.prototype.getSeriesLowValueFromSeriesPixel = function (targetName, seriesPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * Gets the item item index associated with the specified series pixel coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     */
    IgDataChartComponent.prototype.getItemIndexFromSeriesPixel = function (targetName, seriesPoint) { return; };
    ;
    /**
     * Gets the item that is the best match for the specified world coordinates.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
     */
    IgDataChartComponent.prototype.getItemFromSeriesPixel = function (targetName, seriesPoint) { return; };
    ;
    /**
     * Gets the category offset for a series, if applicable.
     *
     * @param targetName    The name of the series to target.
     */
    IgDataChartComponent.prototype.getSeriesOffsetValue = function (targetName) { return; };
    ;
    /**
     * Gets the category width for a series, if applicable.
     *
     * @param targetName    The name of the series to target.
     */
    IgDataChartComponent.prototype.getSeriesCategoryWidth = function (targetName) { return; };
    ;
    /**
     * Replays the transition in animation for a series, if applicable.
     *
     * @param targetName    The name of the series to target.
     */
    IgDataChartComponent.prototype.replayTransitionIn = function (targetName) { return; };
    ;
    /**
     * Simulates a hover interaction over a given point in the viewport of a series.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The point at which to hover. Should have an x property with type number and a y property with type number.
     */
    IgDataChartComponent.prototype.simulateHover = function (targetName, seriesPoint) { return; };
    ;
    /**
     * Moves the cursor point of the target annotation layer to the desired world coordinates.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The point to which to move the cursor. Should have an x property with type number and a y property with type number.
     */
    IgDataChartComponent.prototype.moveCursorPoint = function (targetName, worldPoint) { return; };
    ;
    /**
     * Manually starts a tiled zoom if one isn't already running.
     */
    IgDataChartComponent.prototype.startTiledZoomingIfNecessary = function () { return; };
    ;
    /**
     * Manually ends a tiled zoom if one is running.
     */
    IgDataChartComponent.prototype.endTiledZoomingIfRunning = function () { return; };
    ;
    /**
     * Clears the tile zoom tile cache so that new tiles will be generated. Only applies if the viewer is using a tile based zoom.
     */
    IgDataChartComponent.prototype.clearTileZoomCache = function () { return; };
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IgDataChartComponent.prototype, "dataSource", null);
    IgDataChartComponent = __decorate([
        core_1.Component({
            selector: "ig-data-chart",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "isPagePanningAllowed", "syncChannel", "synchronizeVertically", "synchronizeHorizontally", "crosshairPoint", "windowRect", "horizontalZoomable", "verticalZoomable", "windowResponse", "windowRectMinWidth", "overviewPlusDetailPaneVisibility", "crosshairVisibility", "plotAreaBackground", "defaultInteraction", "dragModifier", "panModifier", "previewRect", "windowPositionHorizontal", "windowPositionVertical", "windowScaleHorizontal", "windowScaleVertical", "circleMarkerTemplate", "triangleMarkerTemplate", "pyramidMarkerTemplate", "squareMarkerTemplate", "diamondMarkerTemplate", "pentagonMarkerTemplate", "hexagonMarkerTemplate", "tetragramMarkerTemplate", "pentagramMarkerTemplate", "hexagramMarkerTemplate", "topMargin", "leftMargin", "rightMargin", "bottomMargin", "autoMarginWidth", "autoMarginHeight", "isSquare", "gridMode", "brushes", "markerBrushes", "outlines", "markerOutlines", "width", "height", "size", "dataSource", "dataSourceUrl", "dataSourceType", "responseDataKey", "isSurfaceInteractionDisabled", "animateSeriesWhenAxisRangeChanges", "title", "subtitle", "titleTextStyle", "titleTopMargin", "titleLeftMargin", "titleRightMargin", "titleBottomMargin", "subtitleTextStyle", "subtitleTopMargin", "subtitleLeftMargin", "subtitleRightMargin", "subtitleBottomMargin", "titleTextColor", "subtitleTextColor", "titleHorizontalAlignment", "subtitleHorizontalAlignment", "highlightingTransitionDuration", "useTiledZooming", "preferHigherResolutionTiles", "pixelScalingRatio", "zoomTileCacheSize", "contentHitTestMode", "legend", "axes", "series", "theme"],
            outputs: ["tooltipShowing", "tooltipShown", "tooltipHiding", "tooltipHidden", "browserNotSupported", "seriesCursorMouseMove", "seriesMouseLeftButtonDown", "seriesMouseLeftButtonUp", "seriesMouseMove", "seriesMouseEnter", "seriesMouseLeave", "windowRectChanged", "gridAreaRectChanged", "refreshCompleted", "axisRangeChanged", "typicalBasedOn", "progressiveLoadStatusChanged", "assigningCategoryStyle", "assigningCategoryMarkerStyle"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgDataChartComponent);
    return IgDataChartComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgDataChartComponent = IgDataChartComponent;
//# sourceMappingURL=igdatachart.component.js.map