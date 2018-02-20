import { Component, ElementRef, Renderer, IterableDiffers, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-radial-gauge",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","ranges","rangeBrushes","rangeOutlines","minimumValue","maximumValue","interval","centerX","centerY","value","scaleStartAngle","scaleEndAngle","scaleSweepDirection","transitionDuration","transitionEasingFunction","needleBrush","needleOutline","needleStartExtent","needleEndExtent","needleShape","needleStartWidthRatio","needleEndWidthRatio","needleBaseFeatureWidthRatio","needleBaseFeatureExtent","needlePointFeatureWidthRatio","needlePointFeatureExtent","needlePivotWidthRatio","needlePivotInnerWidthRatio","needlePivotShape","scaleStartExtent","needlePivotBrush","needlePivotOutline","needleStrokeThickness","needlePivotStrokeThickness","scaleEndExtent","labelExtent","labelInterval","tickStartExtent","tickEndExtent","tickStrokeThickness","tickBrush","fontBrush","minorTickStartExtent","minorTickEndExtent","minorTickStrokeThickness","minorTickBrush","minorTickCount","scaleBrush","backingBrush","backingOutline","backingStrokeThickness","backingOuterExtent","backingOversweep","scaleOversweep","scaleOversweepShape","backingCornerRadius","backingInnerExtent","backingShape","radiusMultiplier","duplicateLabelOmissionStrategy","isNeedleDraggingEnabled","isNeedleDraggingConstrained","font","transitionProgress","pixelScalingRatio"],
	outputs: ["formatLabel","alignLabel","valueChanged"]
})
export class IgRadialGaugeComponent extends IgControlBase<IgRadialGauge> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) { super(el, renderer, differs, kvalDiffers, cdr); }	

	/**
 	 * Returns a string containing the names of all the ranges delimited with a \n symbol.
	 */
	public getRangeNames(): string { return; } ;

	/**
 	 * Adds a new range to the radial gauge.
	 *
	 * @param value 
	 */
	public addRange(value: Object): void { return; } ;

	/**
 	 * Removes a specified range.
	 *
	 * @param value 
	 */
	public removeRange(value: Object): void { return; } ;

	/**
 	 * Updates the range.
	 *
	 * @param value 
	 */
	public updateRange(value: Object): void { return; } ;

	/**
 	 * Clears the ranges in the radial gauge.
	 */
	public clearRanges(): void { return; } ;

	/**
 	 * Scales a value on the gauge's main scale to an angle around the center point of the gauge, in radians.
	 *
	 * @param value 
	 */
	public scaleValue(value: Object): void { return; } ;

	/**
 	 * Unscales a value from an angle in radians to the represented value along the main scale of the gauge.
	 *
	 * @param value 
	 */
	public unscaleValue(value: Object): void { return; } ;

	/**
 	 * Gets the value for the main scale of the gauge for a given point within the bounds of the gauge.
	 *
	 * @param x 
	 * @param y 
	 */
	public getValueForPoint(x: Object, y: Object): number { return; } ;

	/**
 	 * Gets the point on the gauge for a given scale value and extent.
	 *
	 * @param value 
	 * @param extent 
	 */
	public getPointForValue(value: Object, extent: Object): void { return; } ;

	/**
 	 * Returns true if the main gauge needle bounding box contains the point provided, otherwise false.
	 *
	 * @param x 
	 * @param y 
	 */
	public needleContainsPoint(x: Object, y: Object): void { return; } ;

	/**
 	 * Exports the visual data for the radial gauge.
	 */
	public exportVisualData(): void { return; } ;

	/**
 	 * Flushes the gauge.
	 */
	public flush(): void { return; } ;

	/**
 	 * Destroys widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Returns true if the style was updated for the radial gauge.
	 */
	public styleUpdated(): void { return; } ;
}