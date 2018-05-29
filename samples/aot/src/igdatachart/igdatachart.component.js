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
var IgDataChartComponent = /** @class */ (function (_super) {
    __extends(IgDataChartComponent, _super);
    function IgDataChartComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgDataChartComponent.prototype.ngOnInit = function () {
        Object.defineProperty(this, "dataSource", {
            set: this.createSetter("dataSource"),
            enumerable: true,
            configurable: true
        });
        _super.prototype.ngOnInit.call(this);
    };
    IgDataChartComponent.prototype.option = function () { return; };
    ;
    /**
     * Returns the element holding the chart.
     */
    /**
         * Returns the element holding the chart.
         */
    IgDataChartComponent.prototype.widget = /**
         * Returns the element holding the chart.
         */
    function () { return; };
    ;
    /**
     * Returns the ID of parent element holding the chart.
     */
    /**
         * Returns the ID of parent element holding the chart.
         */
    IgDataChartComponent.prototype.id = /**
         * Returns the ID of parent element holding the chart.
         */
    function () { return; };
    ;
    /**
     * Exports the chart to a PNG image.
     *
     * @param width     The width of the image.
     * @param height     The height of the image.
     */
    /**
         * Exports the chart to a PNG image.
         *
         * @param width     The width of the image.
         * @param height     The height of the image.
         */
    IgDataChartComponent.prototype.exportImage = /**
         * Exports the chart to a PNG image.
         *
         * @param width     The width of the image.
         * @param height     The height of the image.
         */
    function (width, height) { return; };
    ;
    /**
     * Destroys the widget.
     */
    /**
         * Destroys the widget.
         */
    IgDataChartComponent.prototype.destroy = /**
         * Destroys the widget.
         */
    function () { return; };
    ;
    /**
     * Notify the chart that styles it draws colors from may have been updated.
     */
    /**
         * Notify the chart that styles it draws colors from may have been updated.
         */
    IgDataChartComponent.prototype.styleUpdated = /**
         * Notify the chart that styles it draws colors from may have been updated.
         */
    function () { return; };
    ;
    /**
     * Resets the zoom level of the chart to default.
     */
    /**
         * Resets the zoom level of the chart to default.
         */
    IgDataChartComponent.prototype.resetZoom = /**
         * Resets the zoom level of the chart to default.
         */
    function () { return; };
    ;
    /**
     * Adds a new item to the data source and notifies the chart.
     *
     * @param item     The item that we want to add to the data source.
     * @param targetName     The name of the series or axis bound to the data source. This is required only when the data is bound to series or axis. If the data is bound to dataSource of igDataChart, the second parameter should not be set.
     */
    /**
         * Adds a new item to the data source and notifies the chart.
         *
         * @param item     The item that we want to add to the data source.
         * @param targetName     The name of the series or axis bound to the data source. This is required only when the data is bound to series or axis. If the data is bound to dataSource of igDataChart, the second parameter should not be set.
         */
    IgDataChartComponent.prototype.addItem = /**
         * Adds a new item to the data source and notifies the chart.
         *
         * @param item     The item that we want to add to the data source.
         * @param targetName     The name of the series or axis bound to the data source. This is required only when the data is bound to series or axis. If the data is bound to dataSource of igDataChart, the second parameter should not be set.
         */
    function (item, targetName) { return; };
    ;
    /**
     * Inserts a new item to the data source and notifies the chart.
     *
     * @param item     the new item that we want to insert in the data source.
     * @param index     The index in the data source where the new item will be inserted.
     * @param targetName     The name of the series or axis bound to the data source.
     */
    /**
         * Inserts a new item to the data source and notifies the chart.
         *
         * @param item     the new item that we want to insert in the data source.
         * @param index     The index in the data source where the new item will be inserted.
         * @param targetName     The name of the series or axis bound to the data source.
         */
    IgDataChartComponent.prototype.insertItem = /**
         * Inserts a new item to the data source and notifies the chart.
         *
         * @param item     the new item that we want to insert in the data source.
         * @param index     The index in the data source where the new item will be inserted.
         * @param targetName     The name of the series or axis bound to the data source.
         */
    function (item, index, targetName) { return; };
    ;
    /**
     * Deletes an item from the data source and notifies the chart.
     *
     * @param index     The index in the data source from where the item will be been removed.
     * @param targetName     The name of the series or axis bound to the data source. This is required only when the data is bound to series or axis. If the data is bound to dataSource of igDataChart, the second parameter should not be set.
     */
    /**
         * Deletes an item from the data source and notifies the chart.
         *
         * @param index     The index in the data source from where the item will be been removed.
         * @param targetName     The name of the series or axis bound to the data source. This is required only when the data is bound to series or axis. If the data is bound to dataSource of igDataChart, the second parameter should not be set.
         */
    IgDataChartComponent.prototype.removeItem = /**
         * Deletes an item from the data source and notifies the chart.
         *
         * @param index     The index in the data source from where the item will be been removed.
         * @param targetName     The name of the series or axis bound to the data source. This is required only when the data is bound to series or axis. If the data is bound to dataSource of igDataChart, the second parameter should not be set.
         */
    function (index, targetName) { return; };
    ;
    /**
     * Updates an item in the data source and notifies the chart.
     *
     * @param index     The index of the item in the data source that we want to change.
     * @param item     The new item object that will be set in the data source.
     * @param targetName     The name of the series or axis bound to the data source.
     */
    /**
         * Updates an item in the data source and notifies the chart.
         *
         * @param index     The index of the item in the data source that we want to change.
         * @param item     The new item object that will be set in the data source.
         * @param targetName     The name of the series or axis bound to the data source.
         */
    IgDataChartComponent.prototype.setItem = /**
         * Updates an item in the data source and notifies the chart.
         *
         * @param index     The index of the item in the data source that we want to change.
         * @param item     The new item object that will be set in the data source.
         * @param targetName     The name of the series or axis bound to the data source.
         */
    function (index, item, targetName) { return; };
    ;
    /**
     * Notifies the chart that an item has been set in an associated data source.
     *
     * @param dataSource     The data source in which the change happened.
     * @param index     The index in the items source that has been changed.
     * @param newItem     the new item that has been set in the collection.
     * @param oldItem     the old item that has been overwritten in the collection.
     */
    /**
         * Notifies the chart that an item has been set in an associated data source.
         *
         * @param dataSource     The data source in which the change happened.
         * @param index     The index in the items source that has been changed.
         * @param newItem     the new item that has been set in the collection.
         * @param oldItem     the old item that has been overwritten in the collection.
         */
    IgDataChartComponent.prototype.notifySetItem = /**
         * Notifies the chart that an item has been set in an associated data source.
         *
         * @param dataSource     The data source in which the change happened.
         * @param index     The index in the items source that has been changed.
         * @param newItem     the new item that has been set in the collection.
         * @param oldItem     the old item that has been overwritten in the collection.
         */
    function (dataSource, index, newItem, oldItem) { return; };
    ;
    /**
     * Notifies the chart that the items have been cleared from an associated data source.
     * 				It's not necessary to notify more than one target of a change if they share the same items source.
     *
     * @param dataSource     The data source in which the change happened.
     */
    /**
         * Notifies the chart that the items have been cleared from an associated data source.
         * 				It's not necessary to notify more than one target of a change if they share the same items source.
         *
         * @param dataSource     The data source in which the change happened.
         */
    IgDataChartComponent.prototype.notifyClearItems = /**
         * Notifies the chart that the items have been cleared from an associated data source.
         * 				It's not necessary to notify more than one target of a change if they share the same items source.
         *
         * @param dataSource     The data source in which the change happened.
         */
    function (dataSource) { return; };
    ;
    /**
     * Notifies the target axis or series that an item has been inserted at the specified index in its data source.
     * 				It's not necessary to notify more than one target of a change if they share the same items source.
     *
     * @param dataSource     The data source in which the change happened.
     * @param index     The index in the items source where the new item has been inserted.
     * @param newItem     the new item that has been set in the collection.
     */
    /**
         * Notifies the target axis or series that an item has been inserted at the specified index in its data source.
         * 				It's not necessary to notify more than one target of a change if they share the same items source.
         *
         * @param dataSource     The data source in which the change happened.
         * @param index     The index in the items source where the new item has been inserted.
         * @param newItem     the new item that has been set in the collection.
         */
    IgDataChartComponent.prototype.notifyInsertItem = /**
         * Notifies the target axis or series that an item has been inserted at the specified index in its data source.
         * 				It's not necessary to notify more than one target of a change if they share the same items source.
         *
         * @param dataSource     The data source in which the change happened.
         * @param index     The index in the items source where the new item has been inserted.
         * @param newItem     the new item that has been set in the collection.
         */
    function (dataSource, index, newItem) { return; };
    ;
    /**
     * Notifies the target axis or series that an item has been removed from the specified index in its data source.
     * 				It's not necessary to notify more than one target of a change if they share the same items source.
     *
     * @param dataSource     The data source in which the change happened.
     * @param index     The index in the items source from where the old item has been removed.
     * @param oldItem     the old item that has been removed from the collection.
     */
    /**
         * Notifies the target axis or series that an item has been removed from the specified index in its data source.
         * 				It's not necessary to notify more than one target of a change if they share the same items source.
         *
         * @param dataSource     The data source in which the change happened.
         * @param index     The index in the items source from where the old item has been removed.
         * @param oldItem     the old item that has been removed from the collection.
         */
    IgDataChartComponent.prototype.notifyRemoveItem = /**
         * Notifies the target axis or series that an item has been removed from the specified index in its data source.
         * 				It's not necessary to notify more than one target of a change if they share the same items source.
         *
         * @param dataSource     The data source in which the change happened.
         * @param index     The index in the items source from where the old item has been removed.
         * @param oldItem     the old item that has been removed from the collection.
         */
    function (dataSource, index, oldItem) { return; };
    ;
    /**
     * Notifies the target axis or series that it should scroll the requested data item into view.
     *
     * @param targetName     The name of the axis or series notify.
     * @param item     The data item to bring into view, if possible.
     */
    /**
         * Notifies the target axis or series that it should scroll the requested data item into view.
         *
         * @param targetName     The name of the axis or series notify.
         * @param item     The data item to bring into view, if possible.
         */
    IgDataChartComponent.prototype.scrollIntoView = /**
         * Notifies the target axis or series that it should scroll the requested data item into view.
         *
         * @param targetName     The name of the axis or series notify.
         * @param item     The data item to bring into view, if possible.
         */
    function (targetName, item) { return; };
    ;
    /**
     * Notifies the target axis that it should scale the requested value into chart space from axis space.
     * 				For example you can use this method if you want to find where value 50 of the x axis stands scaled to chart's width.
     *
     * @param targetName     The name of the axis to notify.
     * @param unscaledValue     The value in axis space to translate into chart space.
     */
    /**
         * Notifies the target axis that it should scale the requested value into chart space from axis space.
         * 				For example you can use this method if you want to find where value 50 of the x axis stands scaled to chart's width.
         *
         * @param targetName     The name of the axis to notify.
         * @param unscaledValue     The value in axis space to translate into chart space.
         */
    IgDataChartComponent.prototype.scaleValue = /**
         * Notifies the target axis that it should scale the requested value into chart space from axis space.
         * 				For example you can use this method if you want to find where value 50 of the x axis stands scaled to chart's width.
         *
         * @param targetName     The name of the axis to notify.
         * @param unscaledValue     The value in axis space to translate into chart space.
         */
    function (targetName, unscaledValue) { return; };
    ;
    /**
     * Notifies the target axis that it should unscale the requested value into axis space from chart space.
     * 				For example you can use this method if you want to find what is the value of x axis unscaled from 0 width of the chart.
     *
     * @param targetName     The name of the axis to notify.
     * @param scaledValue     The value in chart space to translate into axis space.
     */
    /**
         * Notifies the target axis that it should unscale the requested value into axis space from chart space.
         * 				For example you can use this method if you want to find what is the value of x axis unscaled from 0 width of the chart.
         *
         * @param targetName     The name of the axis to notify.
         * @param scaledValue     The value in chart space to translate into axis space.
         */
    IgDataChartComponent.prototype.unscaleValue = /**
         * Notifies the target axis that it should unscale the requested value into axis space from chart space.
         * 				For example you can use this method if you want to find what is the value of x axis unscaled from 0 width of the chart.
         *
         * @param targetName     The name of the axis to notify.
         * @param scaledValue     The value in chart space to translate into axis space.
         */
    function (targetName, scaledValue) { return; };
    ;
    /**
     * For the target axis, if using enhanced interval management and precise interval fitting, this will reset the cached maximum label width, and recalculate using the current labels.
     *
     * @param targetName     The name of the axis to notify.
     */
    /**
         * For the target axis, if using enhanced interval management and precise interval fitting, this will reset the cached maximum label width, and recalculate using the current labels.
         *
         * @param targetName     The name of the axis to notify.
         */
    IgDataChartComponent.prototype.resetCachedEnhancedInterval = /**
         * For the target axis, if using enhanced interval management and precise interval fitting, this will reset the cached maximum label width, and recalculate using the current labels.
         *
         * @param targetName     The name of the axis to notify.
         */
    function (targetName) { return; };
    ;
    /**
     * Notifies the target series that something that affects its visual properties has changed and the visual output needs a repaint.
     *
     * @param targetName     The name of the series to notify.
     */
    /**
         * Notifies the target series that something that affects its visual properties has changed and the visual output needs a repaint.
         *
         * @param targetName     The name of the series to notify.
         */
    IgDataChartComponent.prototype.notifyVisualPropertiesChanged = /**
         * Notifies the target series that something that affects its visual properties has changed and the visual output needs a repaint.
         *
         * @param targetName     The name of the series to notify.
         */
    function (targetName) { return; };
    ;
    /**
     * Forces any pending deferred work to render on the chart before continuing
     */
    /**
         * Forces any pending deferred work to render on the chart before continuing
         */
    IgDataChartComponent.prototype.flush = /**
         * Forces any pending deferred work to render on the chart before continuing
         */
    function () { return; };
    ;
    /**
     * Exports visual data from the chart to aid in unit testing
     */
    /**
         * Exports visual data from the chart to aid in unit testing
         */
    IgDataChartComponent.prototype.exportVisualData = /**
         * Exports visual data from the chart to aid in unit testing
         */
    function () { return; };
    ;
    /**
     * Gets the actual minimum value of the target numeric or date time axis
     *
     * @param targetName    The name of the axis from which to get the minimum value.
     */
    /**
         * Gets the actual minimum value of the target numeric or date time axis
         *
         * @param targetName    The name of the axis from which to get the minimum value.
         */
    IgDataChartComponent.prototype.getActualMinimumValue = /**
         * Gets the actual minimum value of the target numeric or date time axis
         *
         * @param targetName    The name of the axis from which to get the minimum value.
         */
    function (targetName) { return; };
    ;
    /**
     * Gets the actual maximum value of the target numeric or date time axis
     *
     * @param targetName    The name of the axis from which to get the maximum value.
     */
    /**
         * Gets the actual maximum value of the target numeric or date time axis
         *
         * @param targetName    The name of the axis from which to get the maximum value.
         */
    IgDataChartComponent.prototype.getActualMaximumValue = /**
         * Gets the actual maximum value of the target numeric or date time axis
         *
         * @param targetName    The name of the axis from which to get the maximum value.
         */
    function (targetName) { return; };
    ;
    /**
     * Gets the actual interval of the target numeric or date time axis
     *
     * @param targetName    The name of the axis from which to get the interval.
     */
    /**
         * Gets the actual interval of the target numeric or date time axis
         *
         * @param targetName    The name of the axis from which to get the interval.
         */
    IgDataChartComponent.prototype.getActualInterval = /**
         * Gets the actual interval of the target numeric or date time axis
         *
         * @param targetName    The name of the axis from which to get the interval.
         */
    function (targetName) { return; };
    ;
    /**
     * Creates a print preview page with the chart, hiding all other elements on the page.
     */
    /**
         * Creates a print preview page with the chart, hiding all other elements on the page.
         */
    IgDataChartComponent.prototype.print = /**
         * Creates a print preview page with the chart, hiding all other elements on the page.
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
    IgDataChartComponent.prototype.renderSeries = /**
         * Indicates that a series should render, even though no option has been modified that would normally cause it to refresh.
         *
         * @param targetName     The name of the series to render.
         * @param animate     Whether the change should be animated, if possible.
         */
    function (targetName, animate) { return; };
    ;
    /**
     * Gets the item item index associated with the specified world position.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     */
    /**
         * Gets the item item index associated with the specified world position.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         */
    IgDataChartComponent.prototype.getItemIndex = /**
         * Gets the item item index associated with the specified world position.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         */
    function (targetName, worldPoint) { return; };
    ;
    /**
     * Gets the item that is the best match for the specified world coordinates.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     */
    /**
         * Gets the item that is the best match for the specified world coordinates.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         */
    IgDataChartComponent.prototype.getItem = /**
         * Gets the item that is the best match for the specified world coordinates.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         */
    function (targetName, worldPoint) { return; };
    ;
    /**
     * For a category plotted series, gets the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
     *
     * @param targetName    The name of the series to target.
     */
    /**
         * For a category plotted series, gets the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
         *
         * @param targetName    The name of the series to target.
         */
    IgDataChartComponent.prototype.getItemSpan = /**
         * For a category plotted series, gets the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
         *
         * @param targetName    The name of the series to target.
         */
    function (targetName) { return; };
    ;
    /**
     * If possible, will return the best available main value of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    /**
         * If possible, will return the best available main value of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    IgDataChartComponent.prototype.getSeriesValue = /**
         * If possible, will return the best available main value of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    function (targetName, worldPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available value bounding box within the series that has the best value match for the world position provided.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     */
    /**
         * If possible, will return the best available value bounding box within the series that has the best value match for the world position provided.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         */
    IgDataChartComponent.prototype.getSeriesValueBoundingBox = /**
         * If possible, will return the best available value bounding box within the series that has the best value match for the world position provided.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         */
    function (targetName, worldPoint) { return; };
    ;
    /**
     * If possible, will return the best available value fine grained bounding boxes within the series that have the best value match for the world position provided.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     */
    /**
         * If possible, will return the best available value fine grained bounding boxes within the series that have the best value match for the world position provided.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         */
    IgDataChartComponent.prototype.getSeriesValueFineGrainedBoundingBoxes = /**
         * If possible, will return the best available value fine grained bounding boxes within the series that have the best value match for the world position provided.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         */
    function (targetName, worldPoint) { return; };
    ;
    /**
     * If possible, will return the best available main value position of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    /**
         * If possible, will return the best available main value position of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    IgDataChartComponent.prototype.getSeriesValuePosition = /**
         * If possible, will return the best available main value position of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    function (targetName, worldPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available main value position of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    /**
         * If possible, will return the best available main value position of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    IgDataChartComponent.prototype.getSeriesValuePositionFromSeriesPixel = /**
         * If possible, will return the best available main value position of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    function (targetName, seriesPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available main value of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    /**
         * If possible, will return the best available main value of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    IgDataChartComponent.prototype.getSeriesValueFromSeriesPixel = /**
         * If possible, will return the best available main value of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    function (targetName, seriesPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available value bounding box within the series that has the best value match for the given series pixel coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
     */
    /**
         * If possible, will return the best available value bounding box within the series that has the best value match for the given series pixel coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
         */
    IgDataChartComponent.prototype.getSeriesValueBoundingBoxFromSeriesPixel = /**
         * If possible, will return the best available value bounding box within the series that has the best value match for the given series pixel coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
         */
    function (targetName, seriesPoint) { return; };
    ;
    /**
     * If possible, will return the best available value fine grained bounding boxes within the series that have the best value match for series pixel position provided.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
     */
    /**
         * If possible, will return the best available value fine grained bounding boxes within the series that have the best value match for series pixel position provided.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
         */
    IgDataChartComponent.prototype.getSeriesValueFineGrainedBoundingBoxesFromSeriesPixel = /**
         * If possible, will return the best available value fine grained bounding boxes within the series that have the best value match for series pixel position provided.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
         */
    function (targetName, worldPoint) { return; };
    ;
    /**
     * If possible, will return the best available high value of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    /**
         * If possible, will return the best available high value of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    IgDataChartComponent.prototype.getSeriesHighValue = /**
         * If possible, will return the best available high value of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    function (targetName, worldPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available high value position of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    /**
         * If possible, will return the best available high value position of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    IgDataChartComponent.prototype.getSeriesHighValuePosition = /**
         * If possible, will return the best available high value position of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    function (targetName, worldPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available high value position of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    /**
         * If possible, will return the best available high value position of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    IgDataChartComponent.prototype.getSeriesHighValuePositionFromSeriesPixel = /**
         * If possible, will return the best available high value position of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    function (targetName, seriesPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available high value of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    /**
         * If possible, will return the best available high value of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    IgDataChartComponent.prototype.getSeriesHighValueFromSeriesPixel = /**
         * If possible, will return the best available high value of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    function (targetName, seriesPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available low value of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    /**
         * If possible, will return the best available low value of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    IgDataChartComponent.prototype.getSeriesLowValue = /**
         * If possible, will return the best available low value of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    function (targetName, worldPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available low value position of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    /**
         * If possible, will return the best available low value position of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    IgDataChartComponent.prototype.getSeriesLowValuePosition = /**
         * If possible, will return the best available low value position of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    function (targetName, worldPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available low value position of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    /**
         * If possible, will return the best available low value position of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    IgDataChartComponent.prototype.getSeriesLowValuePositionFromSeriesPixel = /**
         * If possible, will return the best available low value position of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    function (targetName, seriesPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * If possible, will return the best available low value of the series for a given world coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
     * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
     * @param skipUnknowns    If true, unknown values should be skipped.
     */
    /**
         * If possible, will return the best available low value of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    IgDataChartComponent.prototype.getSeriesLowValueFromSeriesPixel = /**
         * If possible, will return the best available low value of the series for a given world coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
         * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
         * @param skipUnknowns    If true, unknown values should be skipped.
         */
    function (targetName, seriesPoint, useInterpolation, skipUnknowns) { return; };
    ;
    /**
     * Gets the item item index associated with the specified series pixel coordinate.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
     */
    /**
         * Gets the item item index associated with the specified series pixel coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         */
    IgDataChartComponent.prototype.getItemIndexFromSeriesPixel = /**
         * Gets the item item index associated with the specified series pixel coordinate.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
         */
    function (targetName, seriesPoint) { return; };
    ;
    /**
     * Gets the item that is the best match for the specified world coordinates.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
     */
    /**
         * Gets the item that is the best match for the specified world coordinates.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
         */
    IgDataChartComponent.prototype.getItemFromSeriesPixel = /**
         * Gets the item that is the best match for the specified world coordinates.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
         */
    function (targetName, seriesPoint) { return; };
    ;
    /**
     * Gets the category offset for a series, if applicable.
     *
     * @param targetName    The name of the series to target.
     */
    /**
         * Gets the category offset for a series, if applicable.
         *
         * @param targetName    The name of the series to target.
         */
    IgDataChartComponent.prototype.getSeriesOffsetValue = /**
         * Gets the category offset for a series, if applicable.
         *
         * @param targetName    The name of the series to target.
         */
    function (targetName) { return; };
    ;
    /**
     * Gets the category width for a series, if applicable.
     *
     * @param targetName    The name of the series to target.
     */
    /**
         * Gets the category width for a series, if applicable.
         *
         * @param targetName    The name of the series to target.
         */
    IgDataChartComponent.prototype.getSeriesCategoryWidth = /**
         * Gets the category width for a series, if applicable.
         *
         * @param targetName    The name of the series to target.
         */
    function (targetName) { return; };
    ;
    /**
     * Replays the transition in animation for a series, if applicable.
     *
     * @param targetName    The name of the series to target.
     */
    /**
         * Replays the transition in animation for a series, if applicable.
         *
         * @param targetName    The name of the series to target.
         */
    IgDataChartComponent.prototype.replayTransitionIn = /**
         * Replays the transition in animation for a series, if applicable.
         *
         * @param targetName    The name of the series to target.
         */
    function (targetName) { return; };
    ;
    /**
     * Simulates a hover interaction over a given point in the viewport of a series.
     *
     * @param targetName    The name of the series to target.
     * @param seriesPoint    The point at which to hover. Should have an x property with type number and a y property with type number.
     */
    /**
         * Simulates a hover interaction over a given point in the viewport of a series.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The point at which to hover. Should have an x property with type number and a y property with type number.
         */
    IgDataChartComponent.prototype.simulateHover = /**
         * Simulates a hover interaction over a given point in the viewport of a series.
         *
         * @param targetName    The name of the series to target.
         * @param seriesPoint    The point at which to hover. Should have an x property with type number and a y property with type number.
         */
    function (targetName, seriesPoint) { return; };
    ;
    /**
     * Moves the cursor point of the target annotation layer to the desired world coordinates.
     *
     * @param targetName    The name of the series to target.
     * @param worldPoint    The point to which to move the cursor. Should have an x property with type number and a y property with type number.
     */
    /**
         * Moves the cursor point of the target annotation layer to the desired world coordinates.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The point to which to move the cursor. Should have an x property with type number and a y property with type number.
         */
    IgDataChartComponent.prototype.moveCursorPoint = /**
         * Moves the cursor point of the target annotation layer to the desired world coordinates.
         *
         * @param targetName    The name of the series to target.
         * @param worldPoint    The point to which to move the cursor. Should have an x property with type number and a y property with type number.
         */
    function (targetName, worldPoint) { return; };
    ;
    /**
     * Manually starts a tiled zoom if one isn't already running.
     */
    /**
         * Manually starts a tiled zoom if one isn't already running.
         */
    IgDataChartComponent.prototype.startTiledZoomingIfNecessary = /**
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
    IgDataChartComponent.prototype.endTiledZoomingIfRunning = /**
         * Manually ends a tiled zoom if one is running.
         */
    function () { return; };
    ;
    /**
     * Clears the tile zoom tile cache so that new tiles will be generated. Only applies if the viewer is using a tile based zoom.
     */
    /**
         * Clears the tile zoom tile cache so that new tiles will be generated. Only applies if the viewer is using a tile based zoom.
         */
    IgDataChartComponent.prototype.clearTileZoomCache = /**
         * Clears the tile zoom tile cache so that new tiles will be generated. Only applies if the viewer is using a tile based zoom.
         */
    function () { return; };
    ;
    IgDataChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-data-chart",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "isPagePanningAllowed", "syncChannel", "synchronizeVertically", "synchronizeHorizontally", "crosshairPoint", "windowRect", "horizontalZoomable", "verticalZoomable", "windowResponse", "windowRectMinWidth", "overviewPlusDetailPaneVisibility", "crosshairVisibility", "plotAreaBackground", "defaultInteraction", "dragModifier", "panModifier", "previewRect", "windowPositionHorizontal", "windowPositionVertical", "windowScaleHorizontal", "windowScaleVertical", "circleMarkerTemplate", "triangleMarkerTemplate", "pyramidMarkerTemplate", "squareMarkerTemplate", "diamondMarkerTemplate", "pentagonMarkerTemplate", "hexagonMarkerTemplate", "tetragramMarkerTemplate", "pentagramMarkerTemplate", "hexagramMarkerTemplate", "topMargin", "leftMargin", "rightMargin", "bottomMargin", "autoMarginWidth", "autoMarginHeight", "isSquare", "gridMode", "brushes", "markerBrushes", "outlines", "markerOutlines", "width", "height", "size", "dataSource", "dataSourceUrl", "dataSourceType", "responseDataKey", "isSurfaceInteractionDisabled", "animateSeriesWhenAxisRangeChanges", "title", "subtitle", "titleTextStyle", "titleTopMargin", "titleLeftMargin", "titleRightMargin", "titleBottomMargin", "subtitleTextStyle", "subtitleTopMargin", "subtitleLeftMargin", "subtitleRightMargin", "subtitleBottomMargin", "titleTextColor", "subtitleTextColor", "titleHorizontalAlignment", "subtitleHorizontalAlignment", "highlightingTransitionDuration", "useTiledZooming", "preferHigherResolutionTiles", "pixelScalingRatio", "zoomTileCacheSize", "contentHitTestMode", "legend", "axes", "series", "theme"],
                    outputs: ["tooltipShowing", "tooltipShown", "tooltipHiding", "tooltipHidden", "browserNotSupported", "seriesCursorMouseMove", "seriesMouseLeftButtonDown", "seriesMouseLeftButtonUp", "seriesMouseMove", "seriesMouseEnter", "seriesMouseLeave", "windowRectChanged", "gridAreaRectChanged", "refreshCompleted", "axisRangeChanged", "typicalBasedOn", "progressiveLoadStatusChanged", "assigningCategoryStyle", "assigningCategoryMarkerStyle"]
                },] },
    ];
    /** @nocollapse */
    IgDataChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgDataChartComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgDataChartComponent = IgDataChartComponent;
//# sourceMappingURL=igdatachart.component.js.map