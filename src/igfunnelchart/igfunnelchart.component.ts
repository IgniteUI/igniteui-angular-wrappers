import { Component, ElementRef, Renderer, IterableDiffers, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-funnel-chart",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","tooltipTemplate","maxRecCount","dataSource","dataSourceType","dataSourceUrl","responseTotalRecCountKey","responseDataKey","bezierPoints","legend","valueMemberPath","brushes","outlines","bottomEdgeWidth","innerLabelMemberPath","outerLabelMemberPath","innerLabelVisibility","outerLabelVisibility","outerLabelAlignment","funnelSliceDisplay","formatInnerLabel","formatOuterLabel","transitionDuration","isInverted","useBezierCurve","allowSliceSelection","useUnselectedStyle","selectedSliceStyle","unselectedSliceStyle","legendItemBadgeTemplate","useOuterLabelsForLegend","textStyle","outerLabelTextStyle","outlineThickness","pixelScalingRatio","outerLabelTextColor","textColor"],
	outputs: ["dataBinding","dataBound","updateTooltip","hideTooltip","sliceClicked"]
})
export class IgFunnelChartComponent extends IgControlBase<IgFunnelChart> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) { super(el, renderer, differs, kvalDiffers, cdr); }

	/**
 	 * Gets array of selected slice items.
	 *
	 * @param selection     Array or selected slice items.
	 * @return array|object     If parameter is undefined, then array of selected items is returned. Otherwise, it returns reference to igFunnelChart.
	 */
	public selectedSliceItems(selection?: any[]): any[] { return; } ;

	/**
 	 * Gets sets array of indexes of selected slices.
	 *
	 * @param selection     Array or selected slice indexes.
	 * @return array|object     If parameter is undefined, then array of selected indexes is returned. Otherwise, it returns reference to igFunnelChart.
	 */
	public selectedSliceIndexes(selection?: any[]): any[] { return; } ;

	/**
 	 * Checks if slice is selected.
	 *
	 * @param slice     Index of slice or reference to slice-data-item.
	 */
	public isSelected(slice: Object): boolean { return; } ;

	/**
 	 * Toggles selected state of slice.
	 *
	 * @param slice     Index of slice or reference to slice-data-item.
	 */
	public toggleSelection(slice: Object): Object { return; } ;
	public exportVisualData(): void { return; } ;

	/**
 	 * Destroys widget.
	 */
	public destroy(): void { return; } ;
}