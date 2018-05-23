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
var IgSparklineComponent = /** @class */ (function (_super) {
    __extends(IgSparklineComponent, _super);
    function IgSparklineComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgSparklineComponent.prototype.ngOnInit = function () {
        Object.defineProperty(this, "dataSource", {
            set: this.createSetter("dataSource"),
            enumerable: true,
            configurable: true
        });
        _super.prototype.ngOnInit.call(this);
    };
    IgSparklineComponent.prototype.destroy = function () { return; };
    ;
    IgSparklineComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-sparkline",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "tooltipTemplate", "maxRecCount", "dataSource", "dataSourceType", "dataSourceUrl", "responseTotalRecCountKey", "responseDataKey", "brush", "negativeBrush", "markerBrush", "negativeMarkerBrush", "firstMarkerBrush", "lastMarkerBrush", "highMarkerBrush", "lowMarkerBrush", "trendLineBrush", "horizontalAxisBrush", "verticalAxisBrush", "normalRangeFill", "horizontalAxisVisibility", "verticalAxisVisibility", "markerVisibility", "negativeMarkerVisibility", "firstMarkerVisibility", "lastMarkerVisibility", "lowMarkerVisibility", "highMarkerVisibility", "normalRangeVisibility", "displayNormalRangeInFront", "markerSize", "firstMarkerSize", "lastMarkerSize", "highMarkerSize", "lowMarkerSize", "negativeMarkerSize", "lineThickness", "valueMemberPath", "labelMemberPath", "trendLineType", "trendLinePeriod", "trendLineThickness", "normalRangeMinimum", "normalRangeMaximum", "displayType", "unknownValuePlotting", "verticalAxisLabel", "horizontalAxisLabel", "formatLabel", "pixelScalingRatio"],
                    outputs: ["dataBinding", "dataBound", "updateTooltip", "hideTooltip"]
                },] },
    ];
    /** @nocollapse */
    IgSparklineComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgSparklineComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgSparklineComponent = IgSparklineComponent;
//# sourceMappingURL=igsparkline.component.js.map