import { IgControlBase } from '../igcontrolbase/igcontrolbase';
import { ElementRef, IterableDiffers, Component, KeyValueDiffers, ChangeDetectorRef, Input, Renderer2, OnInit } from '@angular/core';

@Component({
    selector: 'ig-pie-chart',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'width', 'height', 'dataSource', 'dataSourceUrl', 'dataSourceType', 'responseDataKey', 'valueMemberPath', 'labelMemberPath', 'dataValue', 'dataLabel', 'labelsPosition', 'labelOuterColor', 'labelInnerColor', 'selectionMode', 'selectedItem', 'selectedItems', 'leaderLineVisibility', 'leaderLineType', 'leaderLineMargin', 'othersCategoryThreshold', 'formatLabel', 'othersCategoryStyle', 'othersCategoryType', 'othersCategoryText', 'explodedRadius', 'radiusFactor', 'allowSliceSelection', 'allowSliceExplosion', 'explodedSlices', 'selectedSlices', 'showTooltip', 'tooltipTemplate', 'legend', 'labelExtent', 'startAngle', 'sweepDirection', 'selectedStyle', 'brushes', 'outlines', 'legendItemTemplate', 'legendItemBadgeTemplate', 'textStyle', 'theme'],
    outputs: ['tooltipShowing', 'tooltipShown', 'tooltipHiding', 'tooltipHidden', 'browserNotSupported', 'sliceClick', 'labelClick', 'selectedItemChanging', 'selectedItemChanged', 'selectedItemsChanging', 'selectedItemsChanged'],
    standalone: false
})
export class IgPieChartComponent extends IgControlBase<IgPieChart> implements OnInit {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
      super(el, renderer, differs, kvalDiffers, cdr);
    }
    private _dataSource: any;
    public option(): void { return; }

    @Input()
    public set dataSource(value: any) {
        this._dataSource = value;
        const chart = jQuery(this._el).data(this._widgetName);
        if (chart) {
            jQuery(this._el)[this._widgetName]('option', 'dataSource', this._dataSource);
        }
    }
    ngOnInit() {
        if (this._dataSource === null || this._dataSource === undefined) {
            this._dataSource = this.options.dataSource;
        }
        if (!this.options.dataSource && this._dataSource) {
            this.options.dataSource = this._dataSource;
        }
        super.ngOnInit();
    }

    /**
     * Adds a new item to the data source and notifies the chart.
     *
     * @param item     the new item that will be added to the data source.
     */
    /* istanbul ignore next */
    public addItem(item: object): void { return; }
    /**
     * Inserts a new item to the data source and notifies the chart.
     *
     * @param item     the new item that will be inserted in the data source.
     * @param index     The index in the data source where the new item will be inserted.
     */
    /* istanbul ignore next */
    public insertItem(item: object, index: number): void { return; }
    /**
     * Deletes an item from the data source and notifies the chart.
     *
     * @param index     The index in the data source from where the item will be been removed.
     */
    /* istanbul ignore next */
    public removeItem(index: number): void { return; }
    /**
     * Updates an item in the data source and notifies the chart.
     *
     * @param index     The index in the data source that we want to change.
     * @param item     the new item that we want to set in the data source.
     */
    /* istanbul ignore next */
    public setItem(index: number, item: object): void { return; }
    /**
     * Exports the chart to a PNG image.
     *
     * @param width     The width of the image.
     * @param height     The height of the image.
     */
    /* istanbul ignore next */
    public exportImage(width?: object, height?: object): object { return; }
    /**
     * Destroys the widget.
     */
    /* istanbul ignore next */
    public destroy(): void { return; }
    /**
     * Returns the ID of parent element holding the chart.
     */
    /* istanbul ignore next */
    public id(): string { return; }
    /**
     * Returns the element holding the chart.
     */
    /* istanbul ignore next */
    public widget(): void { return; }
    /**
     * Creates a print preview page with the chart, hiding all other elements on the page.
     */
    /* istanbul ignore next */
    public print(): void { return; }
    /**
     * Exports visual data from the pie chart to aid in unit testing
     */
    /* istanbul ignore next */
    public exportVisualData(): void { return; }}
