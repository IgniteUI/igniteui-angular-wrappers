import { Component, ElementRef, Renderer, IterableDiffers, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-sparkline",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","tooltipTemplate","maxRecCount","dataSource","dataSourceType","dataSourceUrl","responseTotalRecCountKey","responseDataKey","brush","negativeBrush","markerBrush","negativeMarkerBrush","firstMarkerBrush","lastMarkerBrush","highMarkerBrush","lowMarkerBrush","trendLineBrush","horizontalAxisBrush","verticalAxisBrush","normalRangeFill","horizontalAxisVisibility","verticalAxisVisibility","markerVisibility","negativeMarkerVisibility","firstMarkerVisibility","lastMarkerVisibility","lowMarkerVisibility","highMarkerVisibility","normalRangeVisibility","displayNormalRangeInFront","markerSize","firstMarkerSize","lastMarkerSize","highMarkerSize","lowMarkerSize","negativeMarkerSize","lineThickness","valueMemberPath","labelMemberPath","trendLineType","trendLinePeriod","trendLineThickness","normalRangeMinimum","normalRangeMaximum","displayType","unknownValuePlotting","verticalAxisLabel","horizontalAxisLabel","formatLabel","pixelScalingRatio"],
	outputs: ["dataBinding","dataBound","updateTooltip","hideTooltip"]
})
export class IgSparklineComponent extends IgControlBase<IgSparkline> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) { 
		super(el, renderer, differs, kvalDiffers, cdr);
    }

    ngOnInit() {
        Object.defineProperty(this, "dataSource", {
            set: this.createSetter("dataSource"),
            enumerable: true,
            configurable: true
        });
        super.ngOnInit();
    }

	public destroy(): void { return; } ;
}