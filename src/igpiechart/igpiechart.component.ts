import { IgControlBase } from "../igcontrolbase/igcontrolbase";
import { ElementRef, Renderer, IterableDiffers, Component, KeyValueDiffers, ChangeDetectorRef  } from "@angular/core";

@Component({
	selector: "ig-pie-chart",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","dataSource","dataSourceUrl","dataSourceType","responseDataKey","valueMemberPath","labelMemberPath","dataValue","dataLabel","labelsPosition","labelOuterColor","labelInnerColor","selectionMode","selectedItem","selectedItems","leaderLineVisibility","leaderLineType","leaderLineMargin","othersCategoryThreshold","formatLabel","othersCategoryStyle","othersCategoryType","othersCategoryText","explodedRadius","radiusFactor","allowSliceSelection","allowSliceExplosion","explodedSlices","selectedSlices","showTooltip","tooltipTemplate","legend","labelExtent","startAngle","sweepDirection","selectedStyle","brushes","outlines","legendItemTemplate","legendItemBadgeTemplate","textStyle","theme"],
	outputs: ["tooltipShowing","tooltipShown","tooltipHiding","tooltipHidden","browserNotSupported","sliceClick","labelClick","selectedItemChanging","selectedItemChanged","selectedItemsChanging","selectedItemsChanged"]
})
export class IgPieChartComponent extends IgControlBase<IgPieChart> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) { super(el, renderer, differs, kvalDiffers, cdr); }	public option(): void { return; } ;
    //public option(): void { return; } ;

    ngOnInit() {
        Object.defineProperty(this, "dataSource", {
            set: this.createSetter("dataSource"),
            enumerable: true,
            configurable: true
        });
        super.ngOnInit();
    }

	/**
 	 * Adds a new item to the data source and notifies the chart.
	 *
	 * @param item     the new item that will be added to the data source.
	 */
	public addItem(item: Object): void { return; } ;

	/**
 	 * Inserts a new item to the data source and notifies the chart.
	 *
	 * @param item     the new item that will be inserted in the data source.
	 * @param index     The index in the data source where the new item will be inserted.
	 */
	public insertItem(item: Object, index: number): void { return; } ;

	/**
 	 * Deletes an item from the data source and notifies the chart.
	 *
	 * @param index     The index in the data source from where the item will be been removed.
	 */
	public removeItem(index: number): void { return; } ;

	/**
 	 * Updates an item in the data source and notifies the chart.
	 *
	 * @param index     The index in the data source that we want to change.
	 * @param item     the new item that we want to set in the data source.
	 */
	public setItem(index: number, item: Object): void { return; } ;

	/**
 	 * Exports the chart to a PNG image.
	 *
	 * @param width     The width of the image.
	 * @param height     The height of the image.
	 */
	public exportImage(width?: Object, height?: Object): Object { return; } ;

	/**
 	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Returns the ID of parent element holding the chart.
	 */
	public id(): string { return; } ;

	/**
 	 * Returns the element holding the chart.
	 */
	public widget(): void { return; } ;

	/**
 	 * Creates a print preview page with the chart, hiding all other elements on the page.
	 */
	public print(): void { return; } ;

	/**
 	 * Exports visual data from the pie chart to aid in unit testing
	 */
	public exportVisualData(): void { return; } ;
}