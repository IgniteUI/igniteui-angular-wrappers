import { Component, ElementRef, Renderer, IterableDiffers, Optional } from "@angular/core";
import { IgEditorBase } from "./igeditorbase";
import { NgModel } from "@angular/forms";


@Component({
	selector: "ig-date-picker",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","value","tabIndex","allowNullValue","nullValue","inputName","readOnly","validatorOptions","buttonType","listItems","listWidth","listItemHoverDuration","dropDownAttachedToBody","dropDownAnimationDuration","visibleItemsCount","includeKeys","excludeKeys","textAlign","placeHolder","selectionOnFocus","textMode","spinWrapAround","isLimitedToListValues","revertIfNotValid","preventSubmitOnEnter","dropDownOrientation","maxLength","dropDownOnReadOnly","toUpper","toLower","locale","suppressNotifications","regional","inputMask","dataMode","unfilledCharsPrompt","padChar","emptyChar","minValue","maxValue","dateDisplayFormat","dateInputFormat","spinDelta","limitSpinToCurrentField","enableUTCDates","centuryThreshold","yearShift","datepickerOptions"],
	outputs: ["rendering","rendered","mousedown","mouseup","mousemove","mouseover","mouseout","blur","focus","keydown","keypress","keyup","valueChanging","valueChanged","dropDownListOpening","dropDownListOpened","dropDownListClosing","dropDownListClosed","dropDownItemSelecting","dropDownItemSelected","textChanged","itemSelected"]
})
export class IgDatePickerComponent extends IgEditorBase<IgDatePicker> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, @Optional() public model: NgModel) { super(el, renderer, differs, model); }

	/**
 	 * Returns a reference to the jQuery calendar used as a picker selector
	 */
	public getCalendar(): string { return; } ;
	public dropDownContainer(): void { return; } ;
	public findListItemIndex(): void { return; } ;
	public getSelectedListItem(): void { return; } ;
	public selectedListIndex(): void { return; } ;

	/**
 	 * Shows the drop down list.
	 */
	public showDropDown(): void { return; } ;

	/**
 	 * Hides the drop down list.
	 */
	public hideDropDown(): void { return; } ;

	/**
 	 * Returns a reference to the calendar button UI element of the editor.
	 */
	public dropDownButton(): string { return; } ;

	/**
 	 * Returns the visibility state of the calendar.
	 */
	public dropDownVisible(): boolean { return; } ;

	/**
 	 * Destroys the widget
	 */
	public destroy(): void { return; } ;
}