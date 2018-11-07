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
var igcontrolbase_1 = require("../igcontrolbase/igcontrolbase");
var core_1 = require("@angular/core");
var IgPieChartComponent = /** @class */ (function (_super) {
    __extends(IgPieChartComponent, _super);
    function IgPieChartComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgPieChartComponent.prototype.option = function () { return; };
    ;
    Object.defineProperty(IgPieChartComponent.prototype, "dataSource", {
        //public option(): void { return; } ;
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
    IgPieChartComponent.prototype.ngOnInit = function () {
        if (this._dataSource === null || this._dataSource === undefined) {
            this._dataSource = this.options["dataSource"];
        }
        if (!this.options["dataSource"] && this._dataSource) {
            this.options["dataSource"] = this._dataSource;
        }
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * Adds a new item to the data source and notifies the chart.
     *
     * @param item     the new item that will be added to the data source.
     */
    IgPieChartComponent.prototype.addItem = function (item) { return; };
    ;
    /**
     * Inserts a new item to the data source and notifies the chart.
     *
     * @param item     the new item that will be inserted in the data source.
     * @param index     The index in the data source where the new item will be inserted.
     */
    IgPieChartComponent.prototype.insertItem = function (item, index) { return; };
    ;
    /**
     * Deletes an item from the data source and notifies the chart.
     *
     * @param index     The index in the data source from where the item will be been removed.
     */
    IgPieChartComponent.prototype.removeItem = function (index) { return; };
    ;
    /**
     * Updates an item in the data source and notifies the chart.
     *
     * @param index     The index in the data source that we want to change.
     * @param item     the new item that we want to set in the data source.
     */
    IgPieChartComponent.prototype.setItem = function (index, item) { return; };
    ;
    /**
     * Exports the chart to a PNG image.
     *
     * @param width     The width of the image.
     * @param height     The height of the image.
     */
    IgPieChartComponent.prototype.exportImage = function (width, height) { return; };
    ;
    /**
     * Destroys the widget.
     */
    IgPieChartComponent.prototype.destroy = function () { return; };
    ;
    /**
     * Returns the ID of parent element holding the chart.
     */
    IgPieChartComponent.prototype.id = function () { return; };
    ;
    /**
     * Returns the element holding the chart.
     */
    IgPieChartComponent.prototype.widget = function () { return; };
    ;
    /**
     * Creates a print preview page with the chart, hiding all other elements on the page.
     */
    IgPieChartComponent.prototype.print = function () { return; };
    ;
    /**
     * Exports visual data from the pie chart to aid in unit testing
     */
    IgPieChartComponent.prototype.exportVisualData = function () { return; };
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IgPieChartComponent.prototype, "dataSource", null);
    IgPieChartComponent = __decorate([
        core_1.Component({
            selector: "ig-pie-chart",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "dataSource", "dataSourceUrl", "dataSourceType", "responseDataKey", "valueMemberPath", "labelMemberPath", "dataValue", "dataLabel", "labelsPosition", "labelOuterColor", "labelInnerColor", "selectionMode", "selectedItem", "selectedItems", "leaderLineVisibility", "leaderLineType", "leaderLineMargin", "othersCategoryThreshold", "formatLabel", "othersCategoryStyle", "othersCategoryType", "othersCategoryText", "explodedRadius", "radiusFactor", "allowSliceSelection", "allowSliceExplosion", "explodedSlices", "selectedSlices", "showTooltip", "tooltipTemplate", "legend", "labelExtent", "startAngle", "sweepDirection", "selectedStyle", "brushes", "outlines", "legendItemTemplate", "legendItemBadgeTemplate", "textStyle", "theme"],
            outputs: ["tooltipShowing", "tooltipShown", "tooltipHiding", "tooltipHidden", "browserNotSupported", "sliceClick", "labelClick", "selectedItemChanging", "selectedItemChanged", "selectedItemsChanging", "selectedItemsChanged"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgPieChartComponent);
    return IgPieChartComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgPieChartComponent = IgPieChartComponent;
//# sourceMappingURL=igpiechart.component.js.map