import { Component, Renderer, ElementRef, IterableDiffers, Optional, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { IgEditorBase } from "./igeditorbase";
import { NgModel } from "@angular/forms";

@Component({
	selector: "ig-numeric-editor",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","buttonType","listItems","listWidth","listItemHoverDuration","dropDownAttachedToBody","dropDownAnimationDuration","visibleItemsCount","includeKeys","excludeKeys","textAlign","placeHolder","selectionOnFocus","textMode","spinWrapAround","isLimitedToListValues","revertIfNotValid","preventSubmitOnEnter","dropDownOrientation","maxLength","dropDownOnReadOnly","toUpper","toLower","locale","suppressNotifications","regional","negativeSign","negativePattern","decimalSeparator","groupSeparator","groups","maxDecimals","minDecimals","dataMode","minValue","maxValue","spinDelta","scientificFormat"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged","dropDownListOpening","dropDownListOpened","dropDownListClosing","dropDownListClosed","dropDownItemSelecting","dropDownItemSelected","textChanged"]
})
export class IgNumericEditorComponent extends IgEditorBase<IgNumericEditor> {
	 constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef, @Optional() public model: NgModel) { super(el, renderer, differs, kvalDiffers, cdr, model); }

	/**
 	 * Gets/Sets editor value.
	 *
	 * @param newValue     New editor value.
	 */
	public value(newValue?: number): number { return; } ;

	/**
 	 * Finds index of list item by text that matches with the search parameters.
	 *
	 * @param number     The text to search for.
	 */
	public findListItemIndex(number: number): number { return; } ;
	public getSelectedText(): void { return; } ;
	public getSelectionStart(): void { return; } ;
	public getSelectionEnd(): void { return; } ;

	/**
 	 * Increments value in editor according to the parameter.
	 *
	 * @param delta     Increments value.
	 */
	public spinUp(delta?: number): void { return; } ;

	/**
 	 * Decrements value in editor according to the parameter.
	 *
	 * @param delta     Decrement value.
	 */
	public spinDown(delta?: number): void { return; } ;

	/**
 	 * Moves the hovered index to the item that appears above the current one in the list.
	 */
	public selectListIndexUp(): void { return; } ;

	/**
 	 * Moves the hovered index to the item that appears above the current one in the list.
	 */
	public selectListIndexDown(): void { return; } ;

	/**
 	 * Gets current regional.
	 */
	public getRegionalOption(): string { return; } ;
}