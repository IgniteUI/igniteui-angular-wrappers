import { Component, ElementRef, Renderer, IterableDiffers, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-linear-gauge",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","ranges","rangeToolTipTemplate","needleToolTipTemplate","orientation","rangeBrushes","rangeOutlines","minimumValue","maximumValue","value","needleShape","needleName","rangeInnerExtent","scaleInnerExtent","rangeOuterExtent","scaleOuterExtent","needleInnerExtent","needleOuterExtent","needleInnerBaseWidth","needleOuterBaseWidth","needleInnerPointWidth","needleOuterPointWidth","needleInnerPointExtent","needleOuterPointExtent","interval","ticksPostInitial","ticksPreTerminal","labelInterval","labelExtent","labelsPostInitial","labelsPreTerminal","minorTickCount","tickStartExtent","tickEndExtent","tickStrokeThickness","tickBrush","fontBrush","needleBreadth","needleBrush","needleOutline","needleStrokeThickness","minorTickStartExtent","minorTickEndExtent","minorTickStrokeThickness","minorTickBrush","isScaleInverted","backingBrush","backingOutline","backingStrokeThickness","backingInnerExtent","backingOuterExtent","scaleStartExtent","scaleEndExtent","scaleBrush","scaleOutline","scaleStrokeThickness","isNeedleDraggingEnabled","transitionDuration","showToolTipTimeout","showToolTip","font","pixelScalingRatio"],
	outputs: ["formatLabel","alignLabel","valueChanged"]
})
export class IgLinearGaugeComponent extends IgControlBase<IgLinearGauge> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) { super(el, renderer, differs, kvalDiffers, cdr); }

	/**
 	 * Returns a string containing the names of all the ranges delimited with a \n symbol.
	 */
	public getRangeNames(): string { return; } ;

	/**
 	 * Adds a new range to the linear gauge.
	 *
	 * @param value     The range object to be added.
	 */
	public addRange(value: Object): void { return; } ;

	/**
 	 * Removes a range from the linear gauge.
	 *
	 * @param value     A JS object with properties set as follows: name: nameOfTheRangeToRemove, remove: true
	 */
	public removeRange(value: Object): void { return; } ;

	/**
 	 * Updates the specified range of the linear gauge.
	 *
	 * @param value     The range object to be updated.
	 */
	public updateRange(value: Object): void { return; } ;

	/**
 	 * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
	 *
	 * @param x 
	 * @param y 
	 */
	public getValueForPoint(x: Object, y: Object): number { return; } ;

	/**
 	 * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
	 *
	 * @param x The x coordinate of the point.
	 * @param y The y coordinate of the point.
	 */
	public needleContainsPoint(x: number, y: number): void { return; } ;

	/**
 	 * Returns information about how the linear gauge is rendered.
	 */
	public exportVisualData(): Object { return; } ;

	/**
 	 * Causes all pending changes of the linear gauge e.g. by changed property values to be rendered immediately.
	 */
	public flush(): void { return; } ;

	/**
 	 * Destroys widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
	 */
	public styleUpdated(): void { return; } ;
}