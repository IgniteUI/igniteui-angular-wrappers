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
var igcontrolbase_1 = require("../igcontrolbase/igcontrolbase");
var core_1 = require("@angular/core");
var IgPieChartComponent = /** @class */ (function (_super) {
    __extends(IgPieChartComponent, _super);
    function IgPieChartComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgPieChartComponent.prototype.option = function () { return; };
    ;
    //public option(): void { return; } ;
    //public option(): void { return; } ;
    IgPieChartComponent.prototype.ngOnInit = 
    //public option(): void { return; } ;
    function () {
        Object.defineProperty(this, "dataSource", {
            set: this.createSetter("dataSource"),
            enumerable: true,
            configurable: true
        });
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * Adds a new item to the data source and notifies the chart.
     *
     * @param item     the new item that will be added to the data source.
     */
    /**
         * Adds a new item to the data source and notifies the chart.
         *
         * @param item     the new item that will be added to the data source.
         */
    IgPieChartComponent.prototype.addItem = /**
         * Adds a new item to the data source and notifies the chart.
         *
         * @param item     the new item that will be added to the data source.
         */
    function (item) { return; };
    ;
    /**
     * Inserts a new item to the data source and notifies the chart.
     *
     * @param item     the new item that will be inserted in the data source.
     * @param index     The index in the data source where the new item will be inserted.
     */
    /**
         * Inserts a new item to the data source and notifies the chart.
         *
         * @param item     the new item that will be inserted in the data source.
         * @param index     The index in the data source where the new item will be inserted.
         */
    IgPieChartComponent.prototype.insertItem = /**
         * Inserts a new item to the data source and notifies the chart.
         *
         * @param item     the new item that will be inserted in the data source.
         * @param index     The index in the data source where the new item will be inserted.
         */
    function (item, index) { return; };
    ;
    /**
     * Deletes an item from the data source and notifies the chart.
     *
     * @param index     The index in the data source from where the item will be been removed.
     */
    /**
         * Deletes an item from the data source and notifies the chart.
         *
         * @param index     The index in the data source from where the item will be been removed.
         */
    IgPieChartComponent.prototype.removeItem = /**
         * Deletes an item from the data source and notifies the chart.
         *
         * @param index     The index in the data source from where the item will be been removed.
         */
    function (index) { return; };
    ;
    /**
     * Updates an item in the data source and notifies the chart.
     *
     * @param index     The index in the data source that we want to change.
     * @param item     the new item that we want to set in the data source.
     */
    /**
         * Updates an item in the data source and notifies the chart.
         *
         * @param index     The index in the data source that we want to change.
         * @param item     the new item that we want to set in the data source.
         */
    IgPieChartComponent.prototype.setItem = /**
         * Updates an item in the data source and notifies the chart.
         *
         * @param index     The index in the data source that we want to change.
         * @param item     the new item that we want to set in the data source.
         */
    function (index, item) { return; };
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
    IgPieChartComponent.prototype.exportImage = /**
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
    IgPieChartComponent.prototype.destroy = /**
         * Destroys the widget.
         */
    function () { return; };
    ;
    /**
     * Returns the ID of parent element holding the chart.
     */
    /**
         * Returns the ID of parent element holding the chart.
         */
    IgPieChartComponent.prototype.id = /**
         * Returns the ID of parent element holding the chart.
         */
    function () { return; };
    ;
    /**
     * Returns the element holding the chart.
     */
    /**
         * Returns the element holding the chart.
         */
    IgPieChartComponent.prototype.widget = /**
         * Returns the element holding the chart.
         */
    function () { return; };
    ;
    /**
     * Creates a print preview page with the chart, hiding all other elements on the page.
     */
    /**
         * Creates a print preview page with the chart, hiding all other elements on the page.
         */
    IgPieChartComponent.prototype.print = /**
         * Creates a print preview page with the chart, hiding all other elements on the page.
         */
    function () { return; };
    ;
    /**
     * Exports visual data from the pie chart to aid in unit testing
     */
    /**
         * Exports visual data from the pie chart to aid in unit testing
         */
    IgPieChartComponent.prototype.exportVisualData = /**
         * Exports visual data from the pie chart to aid in unit testing
         */
    function () { return; };
    ;
    IgPieChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-pie-chart",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "dataSource", "dataSourceUrl", "dataSourceType", "responseDataKey", "valueMemberPath", "labelMemberPath", "dataValue", "dataLabel", "labelsPosition", "labelOuterColor", "labelInnerColor", "selectionMode", "selectedItem", "selectedItems", "leaderLineVisibility", "leaderLineType", "leaderLineMargin", "othersCategoryThreshold", "formatLabel", "othersCategoryStyle", "othersCategoryType", "othersCategoryText", "explodedRadius", "radiusFactor", "allowSliceSelection", "allowSliceExplosion", "explodedSlices", "selectedSlices", "showTooltip", "tooltipTemplate", "legend", "labelExtent", "startAngle", "sweepDirection", "selectedStyle", "brushes", "outlines", "legendItemTemplate", "legendItemBadgeTemplate", "textStyle", "theme"],
                    outputs: ["tooltipShowing", "tooltipShown", "tooltipHiding", "tooltipHidden", "browserNotSupported", "sliceClick", "labelClick", "selectedItemChanging", "selectedItemChanged", "selectedItemsChanging", "selectedItemsChanged"]
                },] },
    ];
    /** @nocollapse */
    IgPieChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgPieChartComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgPieChartComponent = IgPieChartComponent;
//# sourceMappingURL=igpiechart.component.js.map