import { Component, Renderer, IterableDiffers, ElementRef } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";


@Component({
	selector: "ig-bullet-graph",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","ranges","rangeToolTipTemplate","valueToolTipTemplate","targetValueToolTipTemplate","orientation","rangeBrushes","rangeOutlines","minimumValue","maximumValue","targetValue","targetValueName","value","valueName","rangeInnerExtent","rangeOuterExtent","valueInnerExtent","valueOuterExtent","interval","ticksPostInitial","ticksPreTerminal","labelInterval","labelExtent","labelsPostInitial","labelsPreTerminal","minorTickCount","tickStartExtent","tickEndExtent","tickStrokeThickness","tickBrush","fontBrush","valueBrush","valueOutline","valueStrokeThickness","minorTickStartExtent","minorTickEndExtent","minorTickStrokeThickness","minorTickBrush","isScaleInverted","backingBrush","backingOutline","backingStrokeThickness","backingInnerExtent","backingOuterExtent","scaleStartExtent","scaleEndExtent","targetValueBrush","targetValueBreadth","targetValueInnerExtent","targetValueOuterExtent","targetValueOutline","targetValueStrokeThickness","transitionDuration","showToolTipTimeout","showToolTip","font","pixelScalingRatio"],
	outputs: ["formatLabel","alignLabel"]
})
export class IgBulletGraphComponent extends IgControlBase<IgBulletGraph> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); } 

	/**
 	 * Returns a string containing the names of all the ranges delimited with a \n symbol.
	 */
	public getRangeNames(): void { return; } ;

	/**
 	 * Adds a new range to the bullet graph.
	 *
	 * @param value     The range object to be added.
	 */
	public addRange(value: Object): void { return; } ;

	/**
 	 * Removes a range from the bullet graph.
	 *
	 * @param value     A JS object with properties set as follows: name: nameOfTheRangeToRemove, remove: true
	 */
	public removeRange(value: Object): void { return; } ;

	/**
 	 * Updates the specified range of the bullet graph.
	 *
	 * @param value     The range object to be updated.
	 */
	public updateRange(value: Object): void { return; } ;

	/**
 	 * Returns information about how the bullet graph is rendered.
	 */
	public exportVisualData(): Object { return; } ;

	/**
 	 * Causes all pending changes of the bullet graph e.g. by changed property values to be rendered immediately.
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