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
var IgFunnelChartComponent = /** @class */ (function (_super) {
    __extends(IgFunnelChartComponent, _super);
    function IgFunnelChartComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    Object.defineProperty(IgFunnelChartComponent.prototype, "dataSource", {
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
    IgFunnelChartComponent.prototype.ngOnInit = function () {
        if (this._dataSource === null || this._dataSource === undefined) {
            this._dataSource = this.options["dataSource"];
        }
        if (!this.options["dataSource"] && this._dataSource) {
            this.options["dataSource"] = this._dataSource;
        }
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * Gets array of selected slice items.
     *
     * @param selection     Array or selected slice items.
     * @return array|object     If parameter is undefined, then array of selected items is returned. Otherwise, it returns reference to igFunnelChart.
     */
    IgFunnelChartComponent.prototype.selectedSliceItems = function (selection) { return; };
    ;
    /**
     * Gets sets array of indexes of selected slices.
     *
     * @param selection     Array or selected slice indexes.
     * @return array|object     If parameter is undefined, then array of selected indexes is returned. Otherwise, it returns reference to igFunnelChart.
     */
    IgFunnelChartComponent.prototype.selectedSliceIndexes = function (selection) { return; };
    ;
    /**
     * Checks if slice is selected.
     *
     * @param slice     Index of slice or reference to slice-data-item.
     */
    IgFunnelChartComponent.prototype.isSelected = function (slice) { return; };
    ;
    /**
     * Toggles selected state of slice.
     *
     * @param slice     Index of slice or reference to slice-data-item.
     */
    IgFunnelChartComponent.prototype.toggleSelection = function (slice) { return; };
    ;
    IgFunnelChartComponent.prototype.exportVisualData = function () { return; };
    ;
    /**
     * Destroys widget.
     */
    IgFunnelChartComponent.prototype.destroy = function () { return; };
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IgFunnelChartComponent.prototype, "dataSource", null);
    IgFunnelChartComponent = __decorate([
        core_1.Component({
            selector: "ig-funnel-chart",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "tooltipTemplate", "maxRecCount", "dataSource", "dataSourceType", "dataSourceUrl", "responseTotalRecCountKey", "responseDataKey", "bezierPoints", "legend", "valueMemberPath", "brushes", "outlines", "bottomEdgeWidth", "innerLabelMemberPath", "outerLabelMemberPath", "innerLabelVisibility", "outerLabelVisibility", "outerLabelAlignment", "funnelSliceDisplay", "formatInnerLabel", "formatOuterLabel", "transitionDuration", "isInverted", "useBezierCurve", "allowSliceSelection", "useUnselectedStyle", "selectedSliceStyle", "unselectedSliceStyle", "legendItemBadgeTemplate", "useOuterLabelsForLegend", "textStyle", "outerLabelTextStyle", "outlineThickness", "pixelScalingRatio", "outerLabelTextColor", "textColor"],
            outputs: ["dataBinding", "dataBound", "updateTooltip", "hideTooltip", "sliceClicked"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgFunnelChartComponent);
    return IgFunnelChartComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgFunnelChartComponent = IgFunnelChartComponent;
//# sourceMappingURL=igfunnelchart.component.js.map