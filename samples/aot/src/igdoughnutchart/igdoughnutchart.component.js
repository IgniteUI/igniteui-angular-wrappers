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
var IgDoughnutChartComponent = /** @class */ (function (_super) {
    __extends(IgDoughnutChartComponent, _super);
    function IgDoughnutChartComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    Object.defineProperty(IgDoughnutChartComponent.prototype, "dataSource", {
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
    IgDoughnutChartComponent.prototype.ngOnInit = function () {
        if (this._dataSource === null || this._dataSource === undefined) {
            this._dataSource = this.options["dataSource"];
        }
        if (!this.options["dataSource"] && this._dataSource) {
            this.options["dataSource"] = this._dataSource;
        }
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * Adds a new series to the doughnut chart.
     *
     * @param seriesObj     The series object to be added.
     */
    IgDoughnutChartComponent.prototype.addSeries = function (seriesObj) { return; };
    ;
    /**
     * Removes the specified series from the doughnut chart.
     *
     * @param seriesObj     The series object identifying the series to be removed.
     */
    IgDoughnutChartComponent.prototype.removeSeries = function (seriesObj) { return; };
    ;
    /**
     * Updates the series with the specified name with the specified new property values.
     *
     * @param value     The series object identifying the series to be updated.
     */
    IgDoughnutChartComponent.prototype.updateSeries = function (value) { return; };
    ;
    /**
     * Returns the center of the doughnut chart.
     */
    IgDoughnutChartComponent.prototype.getCenterCoordinates = function () { return; };
    ;
    /**
     * Returns the radius of the chart's hole.
     */
    IgDoughnutChartComponent.prototype.getHoleRadius = function () { return; };
    ;
    /**
     * Returns information about how the doughnut chart is rendered.
     */
    IgDoughnutChartComponent.prototype.exportVisualData = function () { return; };
    ;
    /**
     * Causes all of the series that have pending changes e.g. by changed property values to be rendered immediately.
     */
    IgDoughnutChartComponent.prototype.flush = function () { return; };
    ;
    /**
     * Destroys the widget.
     */
    IgDoughnutChartComponent.prototype.destroy = function () { return; };
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IgDoughnutChartComponent.prototype, "dataSource", null);
    IgDoughnutChartComponent = __decorate([
        core_1.Component({
            selector: "ig-doughnut-chart",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "tooltipTemplate", "maxRecCount", "dataSource", "dataSourceType", "dataSourceUrl", "responseTotalRecCountKey", "responseDataKey", "series", "allowSliceSelection", "isSurfaceInteractionDisabled", "allowSliceExplosion", "innerExtent", "selectedStyle"],
            outputs: ["dataBinding", "dataBound", "updateTooltip", "hideTooltip", "tooltipShowing", "tooltipShown", "tooltipHiding", "tooltipHidden", "browserNotSupported", "sliceClick", "holeDimensionsChanged"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgDoughnutChartComponent);
    return IgDoughnutChartComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgDoughnutChartComponent = IgDoughnutChartComponent;
//# sourceMappingURL=igdoughnutchart.component.js.map