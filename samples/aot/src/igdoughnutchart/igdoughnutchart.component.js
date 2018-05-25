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
var IgDoughnutChartComponent = /** @class */ (function (_super) {
    __extends(IgDoughnutChartComponent, _super);
    function IgDoughnutChartComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgDoughnutChartComponent.prototype.ngOnInit = function () {
        Object.defineProperty(this, "dataSource", {
            set: this.createSetter("dataSource"),
            enumerable: true,
            configurable: true
        });
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * Adds a new series to the doughnut chart.
     *
     * @param seriesObj     The series object to be added.
     */
    /**
         * Adds a new series to the doughnut chart.
         *
         * @param seriesObj     The series object to be added.
         */
    IgDoughnutChartComponent.prototype.addSeries = /**
         * Adds a new series to the doughnut chart.
         *
         * @param seriesObj     The series object to be added.
         */
    function (seriesObj) { return; };
    ;
    /**
     * Removes the specified series from the doughnut chart.
     *
     * @param seriesObj     The series object identifying the series to be removed.
     */
    /**
         * Removes the specified series from the doughnut chart.
         *
         * @param seriesObj     The series object identifying the series to be removed.
         */
    IgDoughnutChartComponent.prototype.removeSeries = /**
         * Removes the specified series from the doughnut chart.
         *
         * @param seriesObj     The series object identifying the series to be removed.
         */
    function (seriesObj) { return; };
    ;
    /**
     * Updates the series with the specified name with the specified new property values.
     *
     * @param value     The series object identifying the series to be updated.
     */
    /**
         * Updates the series with the specified name with the specified new property values.
         *
         * @param value     The series object identifying the series to be updated.
         */
    IgDoughnutChartComponent.prototype.updateSeries = /**
         * Updates the series with the specified name with the specified new property values.
         *
         * @param value     The series object identifying the series to be updated.
         */
    function (value) { return; };
    ;
    /**
     * Returns the center of the doughnut chart.
     */
    /**
         * Returns the center of the doughnut chart.
         */
    IgDoughnutChartComponent.prototype.getCenterCoordinates = /**
         * Returns the center of the doughnut chart.
         */
    function () { return; };
    ;
    /**
     * Returns the radius of the chart's hole.
     */
    /**
         * Returns the radius of the chart's hole.
         */
    IgDoughnutChartComponent.prototype.getHoleRadius = /**
         * Returns the radius of the chart's hole.
         */
    function () { return; };
    ;
    /**
     * Returns information about how the doughnut chart is rendered.
     */
    /**
         * Returns information about how the doughnut chart is rendered.
         */
    IgDoughnutChartComponent.prototype.exportVisualData = /**
         * Returns information about how the doughnut chart is rendered.
         */
    function () { return; };
    ;
    /**
     * Causes all of the series that have pending changes e.g. by changed property values to be rendered immediately.
     */
    /**
         * Causes all of the series that have pending changes e.g. by changed property values to be rendered immediately.
         */
    IgDoughnutChartComponent.prototype.flush = /**
         * Causes all of the series that have pending changes e.g. by changed property values to be rendered immediately.
         */
    function () { return; };
    ;
    /**
     * Destroys the widget.
     */
    /**
         * Destroys the widget.
         */
    IgDoughnutChartComponent.prototype.destroy = /**
         * Destroys the widget.
         */
    function () { return; };
    ;
    IgDoughnutChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-doughnut-chart",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "tooltipTemplate", "maxRecCount", "dataSource", "dataSourceType", "dataSourceUrl", "responseTotalRecCountKey", "responseDataKey", "series", "allowSliceSelection", "isSurfaceInteractionDisabled", "allowSliceExplosion", "innerExtent", "selectedStyle"],
                    outputs: ["dataBinding", "dataBound", "updateTooltip", "hideTooltip", "tooltipShowing", "tooltipShown", "tooltipHiding", "tooltipHidden", "browserNotSupported", "sliceClick", "holeDimensionsChanged"]
                },] },
    ];
    /** @nocollapse */
    IgDoughnutChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgDoughnutChartComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgDoughnutChartComponent = IgDoughnutChartComponent;
//# sourceMappingURL=igdoughnutchart.component.js.map