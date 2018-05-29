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
var IgFunnelChartComponent = /** @class */ (function (_super) {
    __extends(IgFunnelChartComponent, _super);
    function IgFunnelChartComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgFunnelChartComponent.prototype.ngOnInit = function () {
        Object.defineProperty(this, "dataSource", {
            set: this.createSetter("dataSource"),
            enumerable: true,
            configurable: true
        });
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * Gets array of selected slice items.
     *
     * @param selection     Array or selected slice items.
     * @return array|object     If parameter is undefined, then array of selected items is returned. Otherwise, it returns reference to igFunnelChart.
     */
    /**
         * Gets array of selected slice items.
         *
         * @param selection     Array or selected slice items.
         * @return array|object     If parameter is undefined, then array of selected items is returned. Otherwise, it returns reference to igFunnelChart.
         */
    IgFunnelChartComponent.prototype.selectedSliceItems = /**
         * Gets array of selected slice items.
         *
         * @param selection     Array or selected slice items.
         * @return array|object     If parameter is undefined, then array of selected items is returned. Otherwise, it returns reference to igFunnelChart.
         */
    function (selection) { return; };
    ;
    /**
     * Gets sets array of indexes of selected slices.
     *
     * @param selection     Array or selected slice indexes.
     * @return array|object     If parameter is undefined, then array of selected indexes is returned. Otherwise, it returns reference to igFunnelChart.
     */
    /**
         * Gets sets array of indexes of selected slices.
         *
         * @param selection     Array or selected slice indexes.
         * @return array|object     If parameter is undefined, then array of selected indexes is returned. Otherwise, it returns reference to igFunnelChart.
         */
    IgFunnelChartComponent.prototype.selectedSliceIndexes = /**
         * Gets sets array of indexes of selected slices.
         *
         * @param selection     Array or selected slice indexes.
         * @return array|object     If parameter is undefined, then array of selected indexes is returned. Otherwise, it returns reference to igFunnelChart.
         */
    function (selection) { return; };
    ;
    /**
     * Checks if slice is selected.
     *
     * @param slice     Index of slice or reference to slice-data-item.
     */
    /**
         * Checks if slice is selected.
         *
         * @param slice     Index of slice or reference to slice-data-item.
         */
    IgFunnelChartComponent.prototype.isSelected = /**
         * Checks if slice is selected.
         *
         * @param slice     Index of slice or reference to slice-data-item.
         */
    function (slice) { return; };
    ;
    /**
     * Toggles selected state of slice.
     *
     * @param slice     Index of slice or reference to slice-data-item.
     */
    /**
         * Toggles selected state of slice.
         *
         * @param slice     Index of slice or reference to slice-data-item.
         */
    IgFunnelChartComponent.prototype.toggleSelection = /**
         * Toggles selected state of slice.
         *
         * @param slice     Index of slice or reference to slice-data-item.
         */
    function (slice) { return; };
    ;
    IgFunnelChartComponent.prototype.exportVisualData = function () { return; };
    ;
    /**
     * Destroys widget.
     */
    /**
         * Destroys widget.
         */
    IgFunnelChartComponent.prototype.destroy = /**
         * Destroys widget.
         */
    function () { return; };
    ;
    IgFunnelChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-funnel-chart",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "tooltipTemplate", "maxRecCount", "dataSource", "dataSourceType", "dataSourceUrl", "responseTotalRecCountKey", "responseDataKey", "bezierPoints", "legend", "valueMemberPath", "brushes", "outlines", "bottomEdgeWidth", "innerLabelMemberPath", "outerLabelMemberPath", "innerLabelVisibility", "outerLabelVisibility", "outerLabelAlignment", "funnelSliceDisplay", "formatInnerLabel", "formatOuterLabel", "transitionDuration", "isInverted", "useBezierCurve", "allowSliceSelection", "useUnselectedStyle", "selectedSliceStyle", "unselectedSliceStyle", "legendItemBadgeTemplate", "useOuterLabelsForLegend", "textStyle", "outerLabelTextStyle", "outlineThickness", "pixelScalingRatio", "outerLabelTextColor", "textColor"],
                    outputs: ["dataBinding", "dataBound", "updateTooltip", "hideTooltip", "sliceClicked"]
                },] },
    ];
    /** @nocollapse */
    IgFunnelChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgFunnelChartComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgFunnelChartComponent = IgFunnelChartComponent;
//# sourceMappingURL=igfunnelchart.component.js.map