import { Component, ElementRef, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, Input, Renderer2, OnInit } from '@angular/core';
import { IgControlBase } from '../igcontrolbase/igcontrolbase';

@Component({
    selector: 'ig-sparkline',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'width', 'height', 'tooltipTemplate', 'maxRecCount', 'dataSource', 'dataSourceType', 'dataSourceUrl', 'responseTotalRecCountKey', 'responseDataKey', 'brush', 'negativeBrush', 'markerBrush', 'negativeMarkerBrush', 'firstMarkerBrush', 'lastMarkerBrush', 'highMarkerBrush', 'lowMarkerBrush', 'trendLineBrush', 'horizontalAxisBrush', 'verticalAxisBrush', 'normalRangeFill', 'horizontalAxisVisibility', 'verticalAxisVisibility', 'markerVisibility', 'negativeMarkerVisibility', 'firstMarkerVisibility', 'lastMarkerVisibility', 'lowMarkerVisibility', 'highMarkerVisibility', 'normalRangeVisibility', 'displayNormalRangeInFront', 'markerSize', 'firstMarkerSize', 'lastMarkerSize', 'highMarkerSize', 'lowMarkerSize', 'negativeMarkerSize', 'lineThickness', 'valueMemberPath', 'labelMemberPath', 'trendLineType', 'trendLinePeriod', 'trendLineThickness', 'normalRangeMinimum', 'normalRangeMaximum', 'displayType', 'unknownValuePlotting', 'verticalAxisLabel', 'horizontalAxisLabel', 'formatLabel', 'pixelScalingRatio'],
    outputs: ['dataBinding', 'dataBound', 'updateTooltip', 'hideTooltip'],
    standalone: false
})
export class IgSparklineComponent extends IgControlBase<IgSparkline> implements OnInit {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
        super(el, renderer, differs, kvalDiffers, cdr);
    }

    @Input()
    public set dataSource(value: any) {
        this._dataSource = value;
        const widget = jQuery(this._el).data(this._widgetName);
        if (widget) {
            jQuery(this._el)[this._widgetName]('option', 'dataSource', this._dataSource);
        }
    }

    private _dataSource: any;

    ngOnInit() {
        if (this._dataSource === null || this._dataSource === undefined) {
            this._dataSource = this.options.dataSource;
        }
        if (!this.options.dataSource && this._dataSource) {
            this.options.dataSource = this._dataSource;
        }
        super.ngOnInit();
    }

    /* istanbul ignore next */
    public destroy(): void { return; }
}
