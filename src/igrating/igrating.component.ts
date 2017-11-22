import { Component, ElementRef, Renderer, IterableDiffers } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-rating",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","vertical","value","valueHover","voteCount","voteWidth","voteHeight","swapDirection","valueAsPercent","focusable","precision","precisionZeroVote","roundedDecimalPlaces","theme","validatorOptions","cssVotes"],
	outputs: ["hoverChange","valueChange"]
})
export class IgRatingComponent extends IgControlBase<IgRating> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Gets reference to [igValidator](ui.igvalidator) used by igRating.
	 *
	 * @param destroy     Request to destroy validator.
	 */
	public validator(destroy?: boolean): Object { return; } ;

	/**
 	 * Triggers validation.
	 */
	public validate(): boolean { return; } ;

	/**
 	 * Gets/Sets (selected) value.
	 *
	 * @param val     New value which is rendered with selected css.
	 * @return number|object     If parameter is not 'number', then exact value rendered with selected css is returned. Otherwise, reference to igRating is returned.
	 */
	public value(val: number): number|Object { return; } ;

	/**
 	 * Gets/Sets hover value.
	 *
	 * @param val     New value which will be rendered with hover css when rating gets mouse.
	 * @return number|object     If parameter is not "number", then last value which was rendered with hover css is returned. Otherwise, reference to igRating is returned.
	 */
	public valueHover(val?: number): number|Object { return; } ;

	/**
 	 * Checks if igRating has focus.
	 */
	public hasFocus(): boolean { return; } ;

	/**
 	 * Sets focus to igRating. That has effect only when options.focusable is enabled.
	 */
	public focus(): Object { return; } ;

	/**
 	 * Destroys igRating widget.
	 */
	public destroy(): Object { return; } ;
}