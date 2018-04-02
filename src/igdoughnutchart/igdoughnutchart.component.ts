import { Component, ElementRef, Renderer, IterableDiffers, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-doughnut-chart",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","tooltipTemplate","maxRecCount","dataSource","dataSourceType","dataSourceUrl","responseTotalRecCountKey","responseDataKey","series","allowSliceSelection","isSurfaceInteractionDisabled","allowSliceExplosion","innerExtent","selectedStyle"],
	outputs: ["dataBinding","dataBound","updateTooltip","hideTooltip","tooltipShowing","tooltipShown","tooltipHiding","tooltipHidden","browserNotSupported","sliceClick","holeDimensionsChanged"]
})
export class IgDoughnutChartComponent extends IgControlBase<IgDoughnutChart> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) { super(el, renderer, differs, kvalDiffers, cdr); }


    ngOnInit() {
        Object.defineProperty(this, "dataSource", {
            set: this.createSetter("dataSource"),
            enumerable: true,
            configurable: true
        });
        super.ngOnInit();
    }

	/**
 	 * Adds a new series to the doughnut chart.
	 *
	 * @param seriesObj     The series object to be added.
	 */
	public addSeries(seriesObj: Object): void { return; } ;

	/**
 	 * Removes the specified series from the doughnut chart.
	 *
	 * @param seriesObj     The series object identifying the series to be removed.
	 */
	public removeSeries(seriesObj: Object): void { return; } ;

	/**
 	 * Updates the series with the specified name with the specified new property values.
	 *
	 * @param value     The series object identifying the series to be updated.
	 */
	public updateSeries(value: Object): void { return; } ;

	/**
 	 * Returns the center of the doughnut chart.
	 */
	public getCenterCoordinates(): Object { return; } ;

	/**
 	 * Returns the radius of the chart's hole.
	 */
	public getHoleRadius(): number { return; } ;

	/**
 	 * Returns information about how the doughnut chart is rendered.
	 */
	public exportVisualData(): Object { return; } ;

	/**
 	 * Causes all of the series that have pending changes e.g. by changed property values to be rendered immediately.
	 */
	public flush(): void { return; } ;

	/**
 	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;
}